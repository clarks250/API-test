var app = angular.module('myApp', []);

app.controller('UserController', function($scope, UserService) {
    $scope.users = [];
    $scope.selectedUser = null;

    UserService.getUsers().then(function(response) {
        $scope.users = response.data;
    });

    $scope.showDetails = function(user) {
        $scope.selectedUser = user;
        $('#userDetailsModal').modal('show');
    };

    $scope.closeModal = function() {
        $scope.selectedUser = null;
        $('#userDetailsModal').modal('hide');
    };

    $scope.confirmDelete = function() {
        var confirmDelete = confirm("Are you sure you want to delete this record?");
        if (confirmDelete) {
            console.log("Record deleted");
        }
    };
});

app.factory('UserService', function($http) {
    var userService = {};

    userService.getUsers = function() {
        return $http.get('https://jsonplaceholder.typicode.com/users');
    };

    return userService;
});

app.directive('onLongPress', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var timer;
            element.on('mousedown', function() {
                timer = $timeout(function() {
                    console.log("Long press detected!");
                }, 1000);
            });
            element.on('mouseup', function() {
                $timeout.cancel(timer);
            });
        }
    };
});
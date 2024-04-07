angular.module('myApp')
    .controller('UserController', ['$scope', 'UserService', function($scope, UserService) {
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

        $scope.confirmDelete = function(user) {
            $scope.selectedUser = user;
            var confirmDelete = confirm("Are you sure you want to delete this record?");
            if (confirmDelete) {
                UserService.deleteUser($scope.selectedUser);
                console.log("Record deleted");
            }
        };
    }]);

angular.module('myApp')
    .factory('UserService', ['$http', function($http) {
        var userService = {};

        userService.getUsers = function() {
            return $http.get('https://jsonplaceholder.typicode.com/users');
        };

        userService.deleteUser = function(userId) {
            return $http.delete('https://jsonplaceholder.typicode.com/users/' + userId);
        };

        return userService;
    }]);

angular.module('myApp')
    .directive('onLongPress', ['$timeout', function($timeout) {
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
    }]);

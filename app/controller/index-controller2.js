angular.module('rw')
    .controller('IndexController2', IndexController2);

(function(){
    'use strict';

    function IndexController2($scope){
        $scope.myStyle = {};
        $scope.myClass = '';

        $scope.$watch('nome', function (newValue, oldValue){
            if (newValue === oldValue)
            {
                return;
            }

            if (newValue == 'Maria')
            {
                $scope.myClass = 'amarelo';
            }
            else {
                $scope.myClass = 'verde';
            }
        });
    }
})();
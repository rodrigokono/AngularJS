angular.module('rw')
    .controller('IndexController', IndexController);

(function() {
    'use strict';

    function IndexController($scope){
        $scope.nome = "Opa";
        $scope.onClickTeste = onClickTeste;

        function onClickTeste(){
            $scope.nome = 'Teste de alteração de JavaScript';
        }
    }
})();






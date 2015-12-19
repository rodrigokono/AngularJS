angular.module('rw')
    .controller('IndexController3', IndexController3);

(function(){
    'use strict';

    function IndexController3($scope){
        $scope.listaDePessoas = [];
        $scope.entidade = {};
        $scope.salvar = salvar;
        $scope.limpar = limpar;
        $scope.excluir = excluir;

        function salvar(){
            if($scope.myForm.$invalid)
            {
                alert("Favor verificar os campos do formulário");
                return;

            }
            $scope.listaDePessoas.push($scope.entidade);
            limpar();
        }

        function limpar(){
            $scope.entidade = {};
        }

        function excluir(){

        }
    }
})();
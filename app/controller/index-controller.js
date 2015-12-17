angular.module('rw')
    .controller('IndexController', IndexController);
angular.module('rw')
    .controller('IndexController2', IndexController2);
angular.module('rw')
    .controller('IndexController3', IndexController3);
angular.module('rw')
    .controller('IndexController5', IndexController5);

function IndexController($scope){
    $scope.nome = "Opa";
    $scope.onClickTeste = onClickTeste;

    function onClickTeste(){
        $scope.nome = 'Teste de alteração de JavaScript';
    }
}

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

function IndexController5($scope){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.gridOptions = {};
    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar(){
        $scope.gridOptions.data = 'listaDePessoas';

        $scope.gridOptions.rowTemplate = 'app/template/row-template.html';

        $scope.gridOptions.columnDefs = [
            {displayName:'Nome', field: 'nome', cellTemplate: 'app/template/cel-template.html'},
            {displayName:'Data de Nascimento', field:'nascimento', cellTemplate: 'app/template/cel-template.html'},
            {displayName:'Sexo', field:'sexo', cellTemplate: 'app/template/cel-template.html'}
        ];
    }

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

    function gridItemClick(linhaSelecionada, indexCol, indexRow){
        alert('Linha selecionada: ' + linhaSelecionada + ' Coluna:' + indexCol + 'Linha:' + indexRow);
    }

    function getRowStyle(linhaSelecionada){
        var myStyle = {};
        myStyle.backgroundColor = linhaSelecionada.cor;

        return myStyle;
    }
}
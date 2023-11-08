var ListaApp = angular.module("lista",[])

    ListaApp.controller('lista_principal',function($scope){
       $scope.usuario_escolhido = ""
       $scope.conteudo_dialog = ""
       $scope.Tema_usuario = ""


       $scope.chama_usuario = function(Nome,conteudo,tema){
           $scope.usuario_escolhido = Nome
           $scope.conteudo_dialog = conteudo
           $scope.Tema_usuario = tema
       }
       $scope.Fechar_dialogo = function(){
           $scope.usuario_escolhido = ""
       }
        $scope.Lista_usuarios = [
            {
                "Nome":"Navios cruzeiros",
                "Tema":"Coralt",
                "conteudo":"Cruzeiro é uma viagem de turismo em barcos ou navios."

            },
            {
                "Nome":"Navio Tanque",
                "Tema":"CorPadrao",
                "conteudo":"O navio tanque é o utilizado para o transporte de substâncias líquidas."
            },
            {
                "Nome":"Navio Porta-Contêineres ",
                "Tema":"Coralt", 
                "conteudo":"Os navios porta-contêineres se tornaram a principal forma de transporte de produtos manufaturados em todo o mundo Professor de Quimica"
            }
        ]
    })

    ListaApp.controller('lislista_segundaria',function($scope){
        $scope.Lista_usuarios = [1,2,3,4,5]
        $scope.Texto = ""
       
    })
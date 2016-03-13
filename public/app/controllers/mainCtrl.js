angular.module('mainCtrl', [])
    .controller('mainController', function($scope,$window,$location,$http){
   $scope.init=function(){
        $http.get("/api/history")
            .success(function(data) {
                $window.localStorage.setItem('history',JSON.stringify(data));

            });

   }
   var vm = this;
    vm.data='';
    vm.send= function(){
        
        vm.data = {
            message: vm.message,
            timeStamp: new Date
        };
        console.log(vm.data);
        $http.post('/api/chat',vm.data)
            .success(function(data){
            $window.localStorage.setItem('chat',JSON.stringify(data));
        })
        .error(function(data){
            console.log('Error: '+data);
        });
    }
    $scope.history = function(){
        console.log("hist clicked");
           
            $http.get('/api/history')
                .success(function(data){
                
            $scope.messagehist = data;
                console.log($scope.messagehist);
                
            })
            .error(function(data){
                console.log('Error: '+data);
            });
            
            
   }
    /*
    vm.history= $window.localStorage.getItem('history');
    console.log(vm.history);*/
    
});
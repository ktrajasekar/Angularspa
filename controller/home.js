    // create the controller and inject Angular's $scope
    applicationSpa.controller('MainController', function($scope, serviceReturn, serviceReturnservi) { 
        // create a message to display in our view
        $scope.message = 'Welcome to home page';
    });

    //factory
    applicationSpa.factory('serviceReturn', function($http){
    
        return{
            servicefun: function(){
             return console.log("asdasdas");
            }, 
            functionfact: function(a,b){
            
              return console.log("perfect");
            }

        }

    });

    //Services

    applicationSpa.service('serviceReturnservi', function($http){
        
    this.helloTest = function(one){
       return console.log(one);
    }
    this.woreld = function(){
        return console.log("asdas")
    }
    
    });



angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ButtonsCtrl', 

function ($scope) {
  $scope.checkModel = {
    sport:
            {"2015":
                {"01":
                    {
                        "09":true,
                        "10":true                
            }
        }
    },
    meditation:
            {"2015":
                {"01":
                    {
                        "09":true,
                        "10":true                
            }
        }
    }
  };
});
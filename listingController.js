angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function()
    {
        $scope.listings.push({        
        "code" : $scope.addCode,
        "name" : $scope.addName,
        "coordinates" :
        {
            "latitude": $scope.addLat,
            "longitutde": $scope.addLong
        },
        "address" : $scope.addAdd
        });
    };
      $scope.addCode = null;
      $scope.addName = null;
      $scope.addLat = null;
      $scope.addLong = null;
      $scope.addAdd = null;
    $scope.deleteListing = function(index) {
        var lamporewpl = $scope.listings.indexOf(index);
        $scope.listings.splice(lamporewpl, 1);
        
        
    };
    $scope.showDetails = function(index) {
        //$scope.detailedInfo = index;
        $scope.coordinates = index.coordinates;
        $scope.address = index.address;
        $scope.name = index.name;
    };
  }
]);
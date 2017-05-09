angular.module('app', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'ngRoute'])

.run(function($rootScope) {
    $rootScope.products = [
      { name: 'Nirvana Super Shisha - Berry Blast', date: '05/01/17', price: 1250 },
      { name: 'Starbuzz Exotic - Pirates Cave', date: '12/02/17', price: 1020 },
      { name: 'Argelini - Red Fruit', date: '04/03/17', price: 1050 },
      { name: 'Starbuzz Exotic - Blue Mist', date: '30/03/17', price: 1150 }
    ];
})

  .controller('firstOne', function($scope, $rootScope) {
   $scope.products = $rootScope.products;
  })

  .filter('sumPrice', function () {
    return function (collection, column) {
      var total = 0;

      collection.forEach(function (item) {
        total += parseInt(item[column]);
      });

      return total;
    };
  })

   .config( ['$routeProvider',
      function( $routeProvider ){ 
        $routeProvider
          .when( "/", {
              templateUrl: "pages/main.html",
              controller: 'firstOne'
            }
          )
           .when( "/modal", {
              templateUrl: "pages/modal.html",
              controller: 'secondOne'
            }
          )
          .otherwise( { redirectTo: '/' } 
          );
      }]
    )
   .config(['$locationProvider', function($locationProvider) {
      $locationProvider.hashPrefix('');
    }])


    .controller('secondOne', function($scope, $rootScope) {
    $scope.refer = [
        {name:'Nirvana Super',price:'1500'},
        {name:'Nirvana Light',price:'1200'},
        {name:'Starbuzz',price:'1060'},
        {name:'Daily Hookah Formula',price:'1110'},
    ];

    $scope.names = _.map($scope.refer, function(item) {
      return item.name;
    });

    $scope.change = function() {
      $scope.name = _.find($scope.refer, function(item) { return item.name === $scope.addname});
    };
    $scope.add = function() {
      $rootScope.products.push({
        name: $scope.addname,
        price: $scope.name.price,
        date: $scope.selectedDate
      });

      $scope.addname = '';
      $scope.name = {};
      $scope.selectedDate= '';
      return redirect("/");
    }

     $scope.selectedDate= '';

  })
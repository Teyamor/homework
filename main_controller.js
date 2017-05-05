angular.module('app', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap'])
  .filter('sumPrice', function () {
    return function (collection, column) {
      var total = 0;

      collection.forEach(function (item) {
        total += parseInt(item[column]);
      });

      return total;
    };
  })
  .controller('mainController', function($scope, $modal) {
    $scope.products = [
      { name: 'Nirvana Super Shisha - Berry Blast', date: '05/01/17', number: 1, price: 1290 },
      { name: 'Starbuzz Exotic - Pirates Cave', date: '12/02/17', number: 2, price: 1020 },
      { name: 'Argelini - Red Fruit', date: '04/03/17', number: 4, price: 1050 },
      { name: 'Starbuzz Exotic - Blue Mist', date: '30/03/17', number: 3, price: 1150 }
    ];

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
      $scope.products.push({
        name: $scope.addname,
        price: $scope.name.price,
        date: $scope.selectedDate
      });

      $scope.addname = '';
      $scope.name = {};
      $scope.selectedDate= '';
    }

     $scope.selectedDate= '';


    var myModal = $modal({scope: $scope, templateURL: `modal.html`, show: false, selector: '.modal'});
    $scope.showModal = function() {
      myModal.$promise.then(myModal.show);
    };
  })
  .directive('modal', function() {
    return {
      templateUrl: 'modal.html'
    }
  });
  

app.controller('CartCtrl', ['$http', '$scope', '$location', 'cartService', function($http, $scope, $location, cartService) {
  cartService.getData().then(function(resp){
    $scope.data = resp.data.map(function(el) {
       el.quantity = 0;
       return el
    })
    $scope.categories = []
    resp.data.map(function(el){
      return el.categories.map(function(el) {
        if ($scope.categories.indexOf(el) === -1) {
          $scope.categories.push(el)
        }
      })
    })
  })

  $scope.addToCart = function(item,quantity){
    $scope.cart = cartService.addToCart(item,quantity)
  }
  $scope.totalCart = function(cart){
    $scope.total = cartService.totalCart(cart)
  }

  $scope.priceSort = [
    {
      label: 'Low to High',
      value: false
    },
    {
      label: 'High to Low',
      value: true
    }
  ];

}]);

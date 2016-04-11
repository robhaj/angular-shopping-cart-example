app.service('cartService', ['$http', function($http) {
  var cart = [];
  var quantity = 1;
  return {
    getData: function() {
      return $http.get('/data')
    },
    addToCart: function(item,quantity) {
      if (cart.indexOf(item) === -1){
        item.quantity = quantity
        if (quantity === undefined){
          item.quantity === 1
        }
        cart.push(item)
        return cart
      } else {
        item.quantity += quantity
        return cart
      }
    },
    checkout: function(cart) {
      $location.url('/checkout')
      return cart
    },
    totalCart: function(arr) {
      return arr.map(function(el){
        return el.price * el.quantity
      }).reduce(function(a,b){
        return a + b
      })
    }
  }

}])

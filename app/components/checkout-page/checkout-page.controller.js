app.controller('CheckoutCtrl', ['$scope', 'cartService', function($scope, cartService) {
cartService.checkout()
}])

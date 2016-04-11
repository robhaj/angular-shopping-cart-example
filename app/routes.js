app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/cart'
      })
      .when('/checkout', {
        templateUrl: 'app/components/checkout-page/checkout-page.view.html',
        controller: 'CheckoutCtrl'
      })
      .when('/cart', {
        templateUrl: 'app/components/cart/cart.view.html',
        controller: 'CartCtrl'
      });
    }])

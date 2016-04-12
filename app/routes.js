app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/checkout', {
        template: '<checkout-page></checkout-page>'
      })
      .when('/cart', {
        template: '<cart></cart>'
      })
      .otherwise({
        redirectTo: '/cart'
      });
    }])

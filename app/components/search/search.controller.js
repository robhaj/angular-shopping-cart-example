  app.controller('searchController', function($scope) {
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
  })

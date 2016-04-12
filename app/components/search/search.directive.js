app.directive('search', function() {
  return {
    restrict : 'E',
    scope: {
      categories:"="
    },
    templateUrl: 'app/components/search/search.view.html'
  }
})

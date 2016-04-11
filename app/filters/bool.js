app.filter('bool', function() {
  return function(input, t, f) {
    return input ? t : f
  }
})

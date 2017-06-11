app.controller('categoryctrl', function($scope, $state, category) {
    category.getCategory().then(function(res) {
        console.log(res.data.data);
        $scope.categories = res.data.data;
    });

    function redirectToEventListing(categoryId) {
        $state.go('/category/' + categoryId);
    }
});
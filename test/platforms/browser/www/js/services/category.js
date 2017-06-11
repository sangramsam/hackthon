app.service("category", function(Settings, $q, $http, auth) {
    function getCategory() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: Settings.BASE_URL + "/Dashboard/getCategoryList",
            headers: {
                'Content-Type': 'application/json',
                'User-Id': auth.getToken()
            }
        }).then(function(response, status, headers, config) {
            deferred.resolve({
                status: status,
                data: response.data
            });
        }, function(response, status, headers, config) {
            deferred.reject({
                status: status,
                data: response.data
            });
        });
        return deferred.promise;
    };
    return {
        getCategory: getCategory,
    }
});
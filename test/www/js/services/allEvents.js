app.service("allEvents", function(Settings, $q, $http, auth) {
    function getEvents(categoryId) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/Dashboard/getCategoryEvents",
            data: { category_id: categoryId },
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
        getEvents: getEvents,
    }
});
/**
 * Created by Geeks on 6/10/2017.
 */
app.service("myEvent", function(Settings, auth, $q, $http) {
    function getMyEvents(user) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: Settings.BASE_URL + "/Dashboard/myCratedEvents",
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
        getMyEvents: getMyEvents
    }
});
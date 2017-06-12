app.service("eventDetails", function(Settings, $q, $http, auth) {
    function getEvent(eventId) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/Dashboard/getEventDetails",
            data: { event_id: eventId },
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
     function Going(eventId) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/Dashboard/joinEvents",
            data: { event_id: eventId },
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
        getEvent: getEvent,
        Going:Going
    }
});
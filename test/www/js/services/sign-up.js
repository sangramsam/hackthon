app.service("signUp", function(Settings, $q, $http) {
    function signUp(user) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/user/signUp",
            data: {
                user_name: user.name,
                user_email: user.email,
                user_password: user.password,
                apartment_id: user.apartment
            },
            headers: {
                'Content-Type': 'application/json'
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

    function getApartment() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: Settings.BASE_URL + "/user/getApartmentList",
            headers: {
                'Content-Type': 'application/json'
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
        signUp: signUp,
        getApartment: getApartment
    }
});
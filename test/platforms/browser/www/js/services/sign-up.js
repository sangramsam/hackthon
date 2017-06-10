app.service("signUp", function(Settings, $q, $http) {
    function signUp(user) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/user/signUp",
            data: {
                user_first_name: user.fname,
                user_last_name: user.lname,
                user_phone: user.Mobile,
                user_email: user.email,
                user_password: user.password,
                apartment_id: user.aptno
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
    return {
        singIn: singIn
    }
});
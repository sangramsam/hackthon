/**
 * Created by Geeks on 6/10/2017.
 */
app.service("Login", function(Settings, $q, $http) {
    function Login(user) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "user/login",
            data: {
                user_email:user.email,
                user_password:user.password
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
        Login: Login
    }
});
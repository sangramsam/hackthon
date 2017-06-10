/**
 * Created by Geeks on 6/10/2017.
 */
app.factory("auth", function() {
    var userToken;
    return {
        getToken : function () {
            return userToken; //we need some way to access actual variable value
        },
        setToken:function(sa){
            userToken=sa;
            return userToken;
        }
    }
});
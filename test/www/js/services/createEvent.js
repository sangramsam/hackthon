app.service("createEvent", function(Settings, $q, $http,auth) {
    function createEvent(event,id,img,date,from,to) {
        var deferred = $q.defer();
    
        alert("post event called" +img);
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "Dashboard/createEvent",
            data: {
                event_name:event.name,
                 event_date:date, 
                 event_from_time :from, 
                 event_to_time: to, 
                 event_details:event.about,
                 category_id:id, 
                 uploadedfile:img,
                 event_amount:event.eventPrice
            },
            headers: {
                'Content-Type': 'application/json',
                'User-Id':auth.getToken()
            }
        }).then(function(response, status, headers, config) {
            alert("post event success" );
            deferred.resolve({
                status: status,
                data: response.data
            });
        }, function(response, status, headers, config) {
               alert("post event failed"+response.data );
            deferred.reject({
                status: status,
                data: response.data
            });
        });
        return deferred.promise;
    };

      function comment(comment,event_id) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: Settings.BASE_URL + "/Dashboard/addCommentsToEvents",
            data: {
               event_id:event_id, 
               event_comment:comment
            },
            headers: {
                'Content-Type': 'application/json',
                'User-Id':auth.getToken()
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
        createEvent: createEvent,
        comment:comment
    }
});
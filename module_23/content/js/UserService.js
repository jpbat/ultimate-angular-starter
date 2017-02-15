function UserService($http) {

    var API = "http://jsonplaceholder.typicode.com/users/"

    this.getUser = function(userId) {
        return $http
            .get(API + userId)
            .then(function (response) {
                return response.data;
            }, function (error) {
                // error
                console.log(error);
            });
    }
    this.getAllUsers = function() {
        return $http
            .get(API)
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.log(error);
            });
    }
}

angular
    .module('app')
    .service('UserService', UserService)
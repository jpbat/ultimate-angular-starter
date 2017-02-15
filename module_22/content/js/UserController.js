function UserController($http) {

    var ctrl = this;
    var API = "http://jsonplaceholder.typicode.com/users/"

    this.userId = '';
    this.chosenUser = {};
    this.getUser = function () {
        if (!this.userId) {
            return;
        }
        $http
            .get(API + this.userId)
            .then(function (response) {
                // success
                console.log(response);
                ctrl.chosenUser = response.data;
            }, function (error) {
                // error
                console.log(error);
            });
    };
 }

angular
    .module('app')
    .controller('UserController', UserController);
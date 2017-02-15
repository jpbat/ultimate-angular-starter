function MainController() {
    this.person = {
        name: "Joao",
        location: "Porto",
    }
 }

angular
    .module('app')
    .controller('MainController', MainController);
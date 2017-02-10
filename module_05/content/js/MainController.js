function MainController() {
    this.name = "Joao";
    this.friends = ['pipa', "frito", "david"];
}

angular
    .module('app')
    .controller('MainController', MainController);
function HomeController() {
    this.viewName = "HomeView";
}

angular
    .module('app')
    .controller('HomeController', HomeController);
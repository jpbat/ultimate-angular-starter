function MainController() {
    this.object = {
        one: 'key 1',
        two: 'key 2',
    }
    this.array = ["this", "is", "funny"];
    this.name = "joao";
}

angular
    .module('app')
    .controller('MainController', MainController);
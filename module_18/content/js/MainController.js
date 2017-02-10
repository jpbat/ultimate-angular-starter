function MainController() {
    this.object = {
        one: 'key 1',
        two: 'key 2',
    }
    this.array = ["this", "is", "funny"];
    this.name = "joao";
    this.date = 1288323623006;
}

angular
    .module('app')
    .controller('MainController', MainController);
function MoviesController() {
    this.favorites = [{
        title: 'Kung Fu Panda',
        year: '1991',
    },{
        title: 'Kung Fu Panda 2',
        year: '1991',
    }]
}

angular
    .module('app')
    .controller('MoviesController', MoviesController);
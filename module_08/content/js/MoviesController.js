function MoviesController() {
    this.favorites = [{
        title: 'Kung Fu Panda',
        year: '1991',
        popular: false,
    },{
        title: 'Kung Fu Panda 2',
        year: '1993',
        popular: true,
    },{
        title: 'Kung Fu Panda 3',
        year: '1995',
        popular: false,
    }]
}

angular
    .module('app')
    .controller('MoviesController', MoviesController);
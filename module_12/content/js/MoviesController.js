function MoviesController() {
    this.favorites = [{
        title: 'Kung Fu Panda',
        year: '1991',
        popular: false,
        category: "drama",
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxOTY1NjUyN15BMl5BanBnXkFtZTcwMjMxMDk1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        imdb: "http://www.imdb.com/title/tt0441773/?ref_=fn_al_tt_1",
    },{
        title: 'Kung Fu Panda 2',
        year: '1993',
        popular: true,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MTQ3NTI3Nl5BMl5BanBnXkFtZTcwNzEzODQ2NA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        imdb: "http://www.imdb.com/title/tt1302011/?ref_=fn_al_tt_5",
    },{
        title: 'Kung Fu Panda 3',
        year: '1995',
        popular: false,
        category: "comedy",
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        imdb: "http://www.imdb.com/title/tt2267968/?ref_=fn_al_tt_4",
    }]
}

angular
    .module('app')
    .controller('MoviesController', MoviesController);
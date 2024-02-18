
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
    }
    Movie.prototype.addActors = function (actorName) {
        this.actors.push(actorName);
    };
    Movie.prototype.addDirector = function (directorName) {
        this.director = directorName;
    };
    Movie.prototype.addWriter = function (writerName) {
        this.writer = writerName;
    };
    Movie.prototype.addLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.addPlatform = function (platformName) {
        this.platform = platformName;
    };
    Movie.prototype.addIsMCU = function (answer) {
        this.isMCU = answer;
    };
    Movie.prototype.addMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.addProducer = function (producerName) {
        this.producer = producerName;
    };
    Movie.prototype.addDistributor = function (distributorName) {
        this.distributor = distributorName;
    };
    Movie.prototype.showInfoMovie = function () {
        return ("Title - ".concat(this.title, "\n\n            Release year - ").concat(this.releaseYear, "\n\n            Actors - ").concat(this.actors.join(', '), "\n\n            Nationality - ").concat(this.nationality, "\n\n            Director - ").concat(this.director, "\n\n            Writer - ").concat(this.writer, "\n\n            Language - ").concat(this.language, "\n\n            Platform - ").concat(this.platform, "\n\n            is MCU - ").concat(this.isMCU, "\n\n            Main character name - ").concat(this.mainCharacterName, "\n\n            Producer - ").concat(this.producer, "\n\n            Distributor - ").concat(this.distributor, "\n\n            Genre - ").concat(this.genre, "\n\n            Photo - ").concat(this.photo, "\n"));
    };
    return Movie;
}());
exports.Movie = Movie;


var container = document.getElementById("pelisContainer");
let movieDB = [
    {
        id: 1, 
        img: 'https://pics.filmaffinity.com/Todo_a_la_vez_en_todas_partes-751636896-large.jpg',
        title: 'Everything, everywhere, all at once',
        releaseYear: 2023, 
        nationality: 'American',
        genre: 'Comedy',
    }, 

    {
        id: 2, 
        img: 'https://m.media-amazon.com/images/S/pv-target-images/0ca6d79319601eaa8292c41247599f47001c67fec9a47a8c765d2a6e4ac012da.jpg',
        title: 'Parasite',
        releaseYear: 2019, 
        nationality: 'Korean',
        genre: 'Drama',
    }, 

    {
        id: 3, 
        img: 'https://pics.filmaffinity.com/Moulin_Rouge-702295729-large.jpg',
        title: 'Moulin Rouge',
        releaseYear: 2001, 
        nationality: 'American',
        genre: 'Musical',
    }
]

function createMovie() {
    var htmlCards = '';
    movieDB.forEach(movie => {
        const card = `
        <div class="card" style="width: 18rem;">
                <img src="${movie.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="cardPrice">${movie.releaseYear}€</p>
                    <p class="cardPrice">${movie.nationality}€</p>
                    <p class="cardPrice">${movie.genre}€</p>
                </div>
            </div>`
        htmlCards += card;
    })
    container.innerHTML = htmlCards;
}

createMovie()



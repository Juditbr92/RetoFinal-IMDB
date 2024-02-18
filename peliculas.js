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
        <div class="card" id="cardsStyle" style="width: 18rem;">
                <img src="${movie.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="cardPrice"> Release year: ${movie.releaseYear}</p>
                    <p class="cardPrice"> Nationality: ${movie.nationality}</p>
                    <p class="cardPrice">Genre: ${movie.genre}</p>
                </div>
            </div>`
        htmlCards += card;
    })
    container.innerHTML = htmlCards;
}

createMovie()

function addMovie() {
    const imgInput = document.getElementById('img').value
    const titleInput = document.getElementById('title').value;
    const releaseYearInput = document.getElementById('release').value;
    const nationalityInput = document.getElementById('nationality').value;
    const genreInput = document.getElementById('genre').value;

    const newFilm = {
        img: imgInput,
        title: titleInput,
        release: releaseYearInput, 
        nationality: nationalityInput, 
        genre: genreInput
    };
    movieDB.push(newFilm);
    createMovie()
}

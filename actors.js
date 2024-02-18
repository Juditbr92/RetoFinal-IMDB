var containerActors = document.getElementById("actorContainer");

let actorsDB = [
    {
        id: 1,
        photo: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2023/07/04/16884784570312.jpg',
        name: 'Brad Pitt',
        age: 60,
        weight: 72, 
        height: 1.80,
        retired: 'No',
        nationality: 'American',
        oscars: 2,
        profession: 'Actor'
    }, 

    {
        id: 2,
        photo: 'https://hips.hearstapps.com/hmg-prod/images/nicole_kidman_photo_stuart_c_wilson_getty_images_693045658_profile.jpg?crop=1xw:0.9823182711198428xh;center,top&resize=640:*',
        name: 'Nicole Kidman',
        age: 56,
        weight: 69, 
        height: 1.80,
        retired: 'No',
        nationality: 'Australian',
        oscars: 1,
        profession: 'Actor'
    }, 

    {
        id: 3,
        photo: 'https://pics.filmaffinity.com/084390309102082-nm_200.jpg',
        name: 'Tom Holland',
        age: 27,
        weight: 65, 
        height: 1.69,
        retired: 'No',
        nationality: 'English',
        oscars: 0,
        profession: 'Actor'
    }, 
]

function showActor(){
    var htmlCards = '';
    actorsDB.forEach(actor => {
        const card = `
        <div class="card" id="cardsStyle" style="width: 18rem;">
                <img src="${actor.photo}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${actor.name}</h5>
                    <p class="cardPrice"> Edad ${actor.age}</p>
                    <p class="cardPrice"> Weight: ${actor.weight} kg</p>
                    <p class="cardPrice">Height: ${actor.height} cm</p>
                    <p class="cardPrice">Retired: ${actor.retired}</p>
                    <p class="cardPrice">Nationality: ${actor.nationality}</p>
                    <p class="cardPrice">Oscar number: ${actor.oscars}</p>
                    <p class="cardPrice">Profession: ${actor.profession}</p>
                </div>
            </div>`
        htmlCards += card;
    })
    containerActors.innerHTML = htmlCards;
}

showActor()

function addActor(){
    const photoInput = document.getElementById('photo').value
    const nameInput = document.getElementById('name').value;
    const ageInput = document.getElementById('age').value;
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;
    const isRetiredInput = document.getElementById('retired').value;
    const nationalityInput = document.getElementById('nationality').value;
    const oscarsInput = document.getElementById('oscars').value;
    const professionInput = document.getElementById('profession').value;

    const newProfessional = {
        photo: photoInput,
        name: nameInput,
        age: ageInput,
        weight: weightInput,
        height: heightInput, 
        retired: isRetiredInput,
        nationality: nationalityInput, 
        oscars: oscarsInput, 
        profession: professionInput
    }

    actorsDB.push(newProfessional);
    showActor()
}

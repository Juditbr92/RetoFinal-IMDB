export class Movie {
    public title: string
    public releaseYear: number
    public actors: string[]
    public nationality: string
    public director: string
    public writer: string
    public language: string
    public platform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    public photo: string

    constructor(title: string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = []
    }

    public addActors(actorName: string): void{
        this.actors.push(actorName);
    } 

    public addDirector(directorName: string){
        this.director = directorName;
    }

    public addWriter(writerName: string){
        this.writer = writerName;
    }

    public addLanguage(language: string){
        this.language = language
    }

    public addPlatform(platformName: string){
        this.platform = platformName;
    }

    public addIsMCU(answer: boolean){
        this.isMCU = answer;
    }

    public addMainCharacterName(mainCharacterName: string){
        this.mainCharacterName = mainCharacterName
    }

    public addProducer(producerName: string){
        this.producer = producerName;
    }

    public addDistributor(distributorName){
        this.distributor = distributorName;
    }

    public showInfoMovie(){
        return (
            `Title - ${this.title}\n
            Release year - ${this.releaseYear}\n
            Actors - ${this.actors.join(', ')}\n
            Nationality - ${this.nationality}\n
            Director - ${this.director}\n
            Writer - ${this.writer}\n
            Language - ${this.language}\n
            Platform - ${this.platform}\n
            is MCU - ${this.isMCU}\n
            Main character name - ${this.mainCharacterName}\n
            Producer - ${this.producer}\n
            Distributor - ${this.distributor}\n
            Genre - ${this.genre}\n
            Photo - ${this.photo}\n`
        )
    }
}

const container = document.getElementById("pelisContainer");

const moviesDB = [
    new Movie('Everything Everywhere All at Once', 2023, 'American', 'comedy'),
    new Movie('Parasite', 2019, 'Korean', 'drama'),
    new Movie('Moulin Rouge', 2001, 'American', 'musical')
]





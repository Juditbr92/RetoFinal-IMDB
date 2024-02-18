export class Professional {
    public name: string 
    public age: number
    public weight: number
    public height: number 
    public isRetired: boolean
    public nationality: string
    public oscarsNumber: number
    public profession: string
    public photo: string

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    public showToString(){
        return (
            `Name - ${this.name}\n 
            Age - ${this.age}\n 
            Weight - ${this.weight}\n 
            Height - ${this.height}\n 
            Is retired - ${this.isRetired}\n 
            Nationality - ${this.nationality}\n 
            Oscars Number - ${this.oscarsNumber}\n 
            Profession - ${this.profession}\n
            Photo - ${this.photo}`
        )
    }
}



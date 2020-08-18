export class Person {
    constructor(
        public heightCm = 0,
        public weightKg = 0
    ){}

    public get bmi(){
        let h = (this.heightCm)/100
        return this.weightKg/h**2
    }

    public get category(){
        let bmi = this.bmi
        if(bmi < 18.5) return "Underweight"
        else if (bmi >=18.5 && bmi < 25) return "normal"
        else if(bmi > 25) return "overweight"
    }
}
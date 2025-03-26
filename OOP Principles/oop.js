

class person{
    constructor(name){
        this.name = name;
    }

    introduceSelf(){
        return `My name is ${this.name}.`;
    }

}

class professor extends person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }

    teaches(){
        return `I am teaching ${this.subject}.`;
    }
    introduceSelf(){
        return `My name is ${this.name} and I will be your ${this.subject} professor.`;
    }
}

class student extends person{
    constructor(name, year){
        super(name);
        this.year = year;
    }

    introduceSelf(){
        return `My name is ${this.name} and I'm in year ${this.year}.`;
    }
    StudyArchery(){
        return this.year > 1;
    }
    canStudyArchery(){
        if(this.StudyArchery()){
            return `${this.name} can study archery`;
        }else{
            return `${this.name} can't study archery`;
        }
    }
}

// creating a person object
john = new person('John');

console.log(john.introduceSelf());
console.log("-----------");

// creating a teacher object 
teacher1 = new professor('John', 'English');
student1 = new student('Jane', 3);  
student2 = new student('Jake', 1);

console.log(teacher1.teaches());
console.log(teacher1.introduceSelf());
console.log("-----------");
console.log(student1.introduceSelf());
console.log("-----------");
console.log(student1.canStudyArchery());
console.log(student2.canStudyArchery());
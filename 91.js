// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return "this is person class";
    }
    static desc = "static Property";
    get fullName(){
        return`${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
       const [firstName, lastName] = fullName.split(" "); //Distracktaring
        // [Yeamin, Adi]
        this.firstName = "Yeamin";
        this.lastName = "Adi";
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const person1 = new Person("mijbah","khandkar",6)
// console.log(person1.eat());
const info = Person.classInfo();
console.log(Person.desc);
console.log(info);
// getter and setters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return`${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
       const [firstName, lastName] = fullName.split(" "); //Distracktaring
        // [Yeamin, Adi]
        this.firstName = "Yeamin";
        this.lastName = "Adi";
    }


    // basic
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
}


const person1 = new Person("mijbah", "khandkar",5)
//  console.log(person1.fullName());
// console.log(person1.fullName); get

// person1.setName("Yeamin","Adi");
person1.firstName = "Yeamin";
person1.lastName = "Adi";
console.log(person1);




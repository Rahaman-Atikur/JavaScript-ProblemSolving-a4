let person1 ={ name: "Rahul", gender: "male", age: 28 };
let person2 ={ name: "Joya", gender: "female", age: 21 };

function validProposal(person1, person2) {
    
    if (typeof person1 !== Object || typeof person2 !== Object) {
        return "Invalid";
    }
    let ageDifference = Math.abs(person1['age']-person2['age']);
    if (person1['gender'] == 'male' && person2['gender'] == 'female' && ageDifference >= 0 && ageDifference < 7) {
        return true;
    }
    else {
        return false;
    }
}
let result = validProposal(person1,person2);
console.log(result);


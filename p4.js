let person1 = {};
let person2 =  { name: "mitu", gender: "male", age: 32 };
function validProposal(person1, person2) {
    if(typeof person1!=="object" ||typeof person2!=="object" || Array.isArray(person1,person2)){
        return "Invalid";
    }
    let ageDifference = Math.abs(person1['age'] - person2['age']);
    if (person1['gender'] == 'male' && person2['gender'] == 'female' && ageDifference >= 0 && ageDifference <= 7) {
        return true;
    }
    else if (person1['gender'] == 'female' && person2['gender'] == 'male' && ageDifference >= 0 && ageDifference <= 7) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validProposal(person1,person2));


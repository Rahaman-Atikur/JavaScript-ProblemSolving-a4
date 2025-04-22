
let contact = ["01987654321"];
function validContact(contact) {
    for (let i = 0; i < contact.length; i++) {

        if (typeof contact !== 'string') {
            return "Invalid";
        }
        else if (contact.length === 11 && contact[0] === '0' && contact[1] === '1' && contact[i] !== ' ') {
            return true;
        }
        else {
            return false;
        }
    }
}
let result = validContact(contact);
console.log(result);



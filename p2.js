
function validContact(contact) {
    if (typeof contact !== 'string') {
        return "Invalid";
    }
    for (let i = 0; i < contact.length; i++) {
        if (contact.length === 11 && contact[0] === '0' && contact[1] === '1' && contact[i] !== ' ') {
            return true;
        }
        else {
            return false;
        }
    }
}



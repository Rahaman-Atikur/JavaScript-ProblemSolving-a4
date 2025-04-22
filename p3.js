
function willSuccess(marks) {
    let passMarkCounter = 0;
    let failMarkCounter = 0;
    if (Array.isArray(marks) == false) {
        return "Invalid";
    }
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            passMarkCounter++;
        }
        else if (marks[i] < 50) {
            failMarkCounter++;
        }
    }
    if (passMarkCounter > failMarkCounter) {
        return true;
    }
    else {
        return false;
    }

}



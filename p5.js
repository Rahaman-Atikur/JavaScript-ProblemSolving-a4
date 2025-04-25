function calculateSleepTime(times) {
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        totalSeconds = totalSeconds + times[i];
    }
    let h = parseInt(totalSeconds / 3600);

    let m = parseInt((totalSeconds % 3600) / 60);
    let s = parseInt((totalSeconds % 3600) % 60);

    let myObject = {
        hour: h,
        minutes: m,
        seconds: s,
    }
    return myObject;
}




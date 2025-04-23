/**
 * Convert seconds from an array to hour , minutes , and seconds
 * ------------------------------------------------------------------------------
 * 1. Create a function and pass that array, and find total sum of that array.(done)
 * 2. Convert it Hour, minutes and seconds 
 * 3. keep separately in variable 
 * 4. Then keep that variable like a object 
 * 5. return that object
 * 
 */
let times = [1000, 2000, 725];
function calculateSleepTime(times) {
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds = totalSeconds + times[i];
    }
    console.log(totalSeconds / 3600);
    console.log(totalSeconds / 60);



}
calculateSleepTime(times);



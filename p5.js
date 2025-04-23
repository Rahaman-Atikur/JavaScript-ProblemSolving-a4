let times = [1000, 2000, 725];
function calculateSleepTime(times) {
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds = totalSeconds + times[i];
    }
    console.log(totalSeconds/3600);
    // let result = {
    //     hour:,
    //     minutes:,
    //     seconds:
    // }
    
}
calculateSleepTime(times);



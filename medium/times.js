/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // we used Date() class in Javascript and getTime() to obtain the current time. Approach used - If we get the current time each before starting the calculation part and after completing the calculation part and then getting the difference, we can obtain the total time taken in calculating the sum. 


    const startDate = new Date();  
    const startTime = startDate.getTime();
    
    let totalSum = 0;
    for(let i=0; i<n; i++) {
        totalSum += i;
    }

    // sum is calculated upto N

    const endDate = new Date(); 
    const endTime = endDate.getTime();

    // take the difference of the current times calculated and obtain the time taken in the calculation part 
    const takenTime = endTime - startTime;
    return takenTime;
}

// NOTE: YOU NEED TO COME TO "MEDIUM/" FOLDER and then run this command "node times.js". Otherwise it won't run

console.log("Time for sum from 1 to 100:", calculateTime(100), "milliseconds");
console.log("Time for sum from 1 to 100000:", calculateTime(100000), "milliseconds");
console.log("Time for sum from 1 to 1000000000:", calculateTime(1000000000), "milliseconds");
// we simply consoled the function by mentioning the value of N as mentioned in the question.
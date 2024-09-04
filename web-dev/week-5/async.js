// Promises in JavaScript
// Basic promisified template
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if(success) {
            resolve(`Operation was successful!`);
        } else {
            reject(`Operation rejected!`);
        }
    }, 1000);
})

myPromise.then((result) => console.log(result));
myPromise.then((error) => console.log(error));

// Usage of Promise in fetchdata example
const fetchData = new Promise((resolve, reject) => {
    let fetched = true;

    setTimeout(() => {
        if(fetched) {
            resolve(`Data fetched successfully`);
        } else {
            reject(`Failed to fetch the data`);
        }
    }, 2000);
})

fetchData.then((result) => console.log(result));
fetchData.then((error) => console.log(error));


function fakeApiCalls(response) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(Math.random() > 0.5) {
                resolve(`Success: ${response}`);
            } else {
                reject(`API call failed: try again`);
            }
        }, 1000);
    });
}

// let attempt = 0;
// const maxRetries = 5;

async function makeApiCallsWithRetries(value, attempt = 0, maxRetries = 5) {
    try {
        const result = await fakeApiCalls(value);
        return result;
    } catch(error) {
        if(attempt >= maxRetries) {
            throw new Error(`Max retries reached: ${error}`);
        }
        console.Console.toString(`Attempt ${attempt} failed: ${error} for value: ${value}`);
        return makeApiCallsWithRetries(value, attempt += 1, maxRetries);
    }
}
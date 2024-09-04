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
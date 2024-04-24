//Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(arr) {
    for (let value of arr) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}
// Test
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//Task 02: Awaiting a Call


async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000); // Simulate delay of 2 seconds
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Test
awaitCall();

// Task 03: Handling Errors with Async/Await
async function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error fetching data");
        }, 2000); // Simulate delay of 2 seconds
    });
}

async function awaitCallWithError() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

// Test
awaitCallWithError();

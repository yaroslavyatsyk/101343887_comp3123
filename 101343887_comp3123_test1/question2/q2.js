const resolvePromise = new Promise(function(resolve) {
    setTimeout(() => {
        resolve({"message" : "Success"})
    }, 500);
})

const rejectPromise = new Promise(function(reject) {
    setTimeout(() => {
        reject({"error" : "Failed"})
    },500)
})

resolvePromise.then(values => console.log(values))
rejectPromise.then(values => console.log(values))
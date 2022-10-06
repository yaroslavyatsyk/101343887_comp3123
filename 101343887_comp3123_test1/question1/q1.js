const lowerCaseWords = (mixArray) => {
    let wordsArray = [];
    let promises = new Promise((resolve, reject) => {
        for (item of mixArray) {
            if(typeof item == "string") {
                wordsArray.push(item.toLowerCase());
                resolve("It is the string");
            }
            else {
                reject("It is not string");
            }
        }
    })
    promises.then(() => {
        console.log("String object successfully modified");
    }).catch(() => {
        console.log("Item can not be  successfully modified");
    })
    return wordsArray;
}
const mixArray = ['PIZZA', true, 10, 23, 'Wings'];

console.log(lowerCaseWords(mixArray));
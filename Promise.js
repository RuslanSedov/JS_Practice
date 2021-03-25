console.log("request data...")

// setTimeout(() => {
//     console.log("preparing data...")

//     const backendData = {
//         server: "DWS",
//         port: 88,
//         status: "working",
//     }



// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Preparing data...")

//         const backendData = {
//             server: "DWS",
//             port: 88,
//             status: "working",
//         }
//         resolve(backendData)
            
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
       
//         }, 2000)
//     })
// })
//     .then(clientData => {
//         console.log("Data received", clientData)
//         return clientData
//     }).then(data => {
//         data.fromPromise = true
//         console.log("Modified", data)
//     })
//     .catch(err => {
//         console.error("error", err)
//     })
//     .finally(() => console.log("finally")) //выполнится в любом случае
    //promise - один уровень вложенности
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log("After 2 sec"))
// sleep(3000).then(() => console.log("After 3 sec"))
Promise.all([sleep(2000), sleep(5000)])
.then(() => {
    console.log("All promises")
})

Promise.race([sleep(2000), sleep(5000)])
.then(() => {
    console.log("Race promises")
})

//промисы - это определенная обертка над ассинхронностью, которая добавляет удобство для написания кода

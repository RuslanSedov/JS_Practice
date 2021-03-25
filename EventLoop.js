console.log("Start")

window.setTimeout(function() {
    console.log("start2")
}, 2000)
//? программа сразу бежит на 9 строчку

function timeOut() {
    console.log("timeOut 2222222222222222222222222")
}

setTimeout(timeOut, 2000)
//?Если в параметре setTimeout передать вызов функции - то она выполнится сразу без таймаута
console.log("end")

//?EventLoop - 
//закидываются все функции в call stack
//выполняются поочередно
//если ассинхронные - то их регистрирует API браузера и ставит в очередь на выполнение callback queue


let count = 0

function countClick() {
    count++;
}

function start() {
    count = 0
    setTimeout(stop, 2000)
}

function stop() {
    console.log(count)
}
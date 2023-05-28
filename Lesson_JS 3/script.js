let x = 0
let y = 0
function createBlock() {
    let newblock = document.createElement("div")
    let container = document.querySelector(".container")
    let inputWidth = document.querySelector(".inpwdth").value
    let inputHeight = document.querySelector(".inphght").value
    let inputColor = document.querySelector(".inpcolor").value
    container.append(newblock)
    newblock.style.width = inputWidth + 'px'
    newblock.style.height = inputHeight + 'px'
    newblock.style.background = inputColor
    console.log()
    newblock.style.top = y + 'px'
    newblock.style.left = x + 'px'
    
}
function moveRight() {
    x += 50
}
function moveLeft() {
    x -= 50
}
function moveUp() {
    y += 50
}
function moveDown() {
    y -= 50
}
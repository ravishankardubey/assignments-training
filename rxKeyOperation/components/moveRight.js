export function moveRight(posLeft) {
    let movableObject = document.getElementById("cat");
    posLeft = posLeft + 5;
    movableObject.style.left = posLeft + "px";
    return posLeft;
}

document.body.style.backgroundColor = "silver";

document.getElementById("title").style.color = "green";

document.querySelectorAll("h3").forEach(h3 => {
    h3.style.textTransform = "uppercase";
});
const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Papaya";
fruitList.appendChild(newFruit);

const vegList = document.getElementById("vegList");
const newVegetable = document.createElement("li");
newVegetable.textContent = "Spinach";
vegList.appendChild(newVegetable)

function addImageToListItem(listItem, imagePath) {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = listItem.textContent;
    img.style.width = '200px';
    img.style.height = '200px';

    listItem.insertBefore(img, listItem.firstChild);
}

const fruitItems = document.querySelectorAll("#fruList li");
const vegetableItems = document.querySelectorAll("#vegList li");

addImageToListItem(fruitItems[0], "image/mango.jpg");
addImageToListItem(fruitItems[1], "image/banana.jpg");
addImageToListItem(fruitItems[2], "image/water_melon.jpg");
addImageToListItem(fruitItems[3], "image/papaya.jpg");


addImageToListItem(vegetableItems[0], "image/onion.jpg");
addImageToListItem(vegetableItems[1], "image/tomato.jpg");
addImageToListItem(vegetableItems[2], "image/kales.jpeg");
addImageToListItem(vegetableItems[3], "image/cocumber.jpeg");
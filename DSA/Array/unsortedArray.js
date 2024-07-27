const myArray = [5, 6, 7, 9, 2, 4, 3, 8, 1];
const arrayValuesElement = document.getElementById('arrayValues');
if (arrayValuesElement) {
    arrayValuesElement.innerHTML = myArray.map(element => `<div>${element}</div>`).join('');
} else {
    console.error('Element with id "arrayValues" not found');
}


document.addEventListener("DOMContentLoaded", function () {

fetch("http://localhost:5219/api/Invoice")
.then(response => response.json())
.then(data => {

let html = "<ul>";

data.items.forEach(item => {
html += `<li>${item.name} - $${item.price}</li>`;
});

html += "</ul>";

document.getElementById("invoice-container").innerHTML = html;

})
.catch(err => console.error(err));

});
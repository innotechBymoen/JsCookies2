let chosen_color = Cookies.get(`chosen_color`);
if(chosen_color === undefined) {
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>Error, please select a color on the other page</h1>`);
} else {
    document.body.insertAdjacentHTML(`afterbegin`, `<div style="width: 50px; height: 50px; background-color: ${chosen_color}"></div>`);
}

function delete_color(details) {
    Cookies.remove(`chosen_color`);
}

let delete_button = document.querySelector(`#delete_button`);
delete_button.addEventListener(`click`, delete_color)
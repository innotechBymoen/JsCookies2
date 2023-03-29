function cookie_click(details) {
    Cookies.set(`button_clicked`, `yes`);
}

let click_button = document.querySelector(`#click_button`);
click_button.addEventListener(`click`, cookie_click);

function cookie_delete(details) {
    Cookies.remove(`button_clicked`);
}

let delete_button = document.querySelector(`#delete_button`);
delete_button.addEventListener(`click`, cookie_delete);

let click_value = Cookies.get(`button_clicked`);
if(click_value === undefined) {
    click_button.insertAdjacentHTML(`afterend`,`<h1>Please click the button</h1>`);
} else {
    click_button.insertAdjacentHTML(`afterend`,`<h1>Good job making a cookie!</h1>`);
}


function select_color(details) {
    Cookies.set(`chosen_color`, details[`target`].getAttribute(`cookie_color`));
}

let color_buttons = document.querySelectorAll(`.color_button`);
for(let i=0; i<color_buttons.length; i++) {
    color_buttons[i].addEventListener(`click`, select_color);
}
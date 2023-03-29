function cookie_click(details) {
    Cookies.set(`button_clicked`, `yes`);
}

let click_button = document.querySelector(`#click_button`);
click_button.addEventListener(`click`, cookie_click);

let click_value = Cookies.get(`button_clicked`);
if(click_value === undefined) {
    click_button.insertAdjacentHTML(`afterend`,`<h1>Please click the button</h1>`);
} else {
    click_button.insertAdjacentHTML(`afterend`,`<h1>Good job making a cookie!</h1>`);
}
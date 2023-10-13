const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})

var dropdownElement = document.getElementById('pesquisarDropdown');

var timer;

dropdownElement.addEventListener('mouseenter', function () {
    var dropdown = new bootstrap.Dropdown(dropdownElement);
    dropdown.show();

    clearTimeout(timer);
});

dropdownElement.addEventListener('mouseleave', function () {
    timer = setTimeout(function () {
        var dropdown = new bootstrap.Dropdown(dropdownElement);
        dropdown.hide();
    }, 300);
});
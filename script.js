const togglebtn = document.querySelector('.toggle_btn')
const togglebtnMenu = document.querySelector('.toggle_btn i')
const dropdownmenu = document.querySelector('.dropdownmenu')

    togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

        togglebtnMenu.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
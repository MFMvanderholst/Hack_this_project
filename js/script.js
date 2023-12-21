function openNav() {
    document.querySelector('div.overlay').style.width = '15%';
    document.querySelector('a.openbtn').style.display = 'none';
}

function closeNav() {
    document.querySelector('div.overlay').style.width = '0%';
    document.querySelector('a.openbtn').style.display = 'block';
}
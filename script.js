const accordin = document.querySelector('.accordin');
const accordinBtns = document.querySelectorAll('.accordin-btn');

function openAccordinItems () {

    if(this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active')
    }else {
        closeAccordinItems();
        this.nextElementSibling.classList.toggle('active');
    }

};

const closeAccordinItems = () => {
    const allActiveItems = document.querySelectorAll('.accordin-info');
    allActiveItems.forEach(item => item.classList.remove('active'));
}

const clickOutsideAccordin = e => {
    if(
        e.target.classList.contains('accordin-btn') ||
        e.target.classList.contains('accordin-info') ||
        e.target.classList.contains('accordin-info-text')
        )
    return;

    closeAccordinItems();
}

accordinBtns.forEach(btn => btn.addEventListener('click', openAccordinItems));
window.addEventListener('click', clickOutsideAccordin);
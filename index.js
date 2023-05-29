const toggle = document.querySelector('.toggle');
const items = document.querySelectorAll('.main-container,.box-head,.header-left,.header-right,.toggle-ball,.facebook,.twitter,.instagram,.youtube,.overview,.facebook-overview,.twitter-overview,.instagram-overview,.youtube-overview,.attribution');

toggle.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active')
    });
    toggle.classList.toggle('active');
})
let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        window.open('https://nhentai.net/g/' + e.target.value, '_blank');
    }
})

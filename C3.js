const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'rgb(34, 34, 34)') {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        this.innerText = 'Bật chế độ tối';
    } else {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        this.innerText = 'Tắt chế độ tối';
    }
});
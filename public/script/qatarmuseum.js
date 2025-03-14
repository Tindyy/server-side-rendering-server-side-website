const allObjects = document.querySelector('.all-objects');
const fullscreenBtn = document.querySelector('#fsinactive'); // Fullscreen button
const smallscreenBtn = document.querySelector('#fsactive'); // Smallscreen button
const homepage = document.querySelector('.home-page')

fullscreenBtn.addEventListener('onClick', () => {
    fullscreenBtn.classList.add('active');
    smallscreenBtn.classList.add('active');
    allObjects.classList.add('active');
});

smallscreenBtn.addEventListener('click', () => {
    fullscreenBtn.classList.remove('active');
    smallscreenBtn.classList.remove('active');
    allObjects.classList.remove('active');
});


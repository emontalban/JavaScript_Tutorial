const laptop = document.querySelector('.site-img');

laptop.addEventListener('mouseover', (event)=> {
    event.target.style.border = '40px solid red';
    event.target.style.borderRadius = '50%';
})

laptop.addEventListener('mouseout', (event)=> {
    event.target.style.border = '40px solid transparent';

})
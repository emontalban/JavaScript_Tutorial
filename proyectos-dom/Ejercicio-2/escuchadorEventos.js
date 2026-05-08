const dateBtm = document.getElementById('dateBtn');
const dateElement = document.getElementById('dateComponentEvent');

dateBtm.addEventListener('click', (event)=>{
    dateElement.innerHTML = Date();
})
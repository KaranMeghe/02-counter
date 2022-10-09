// set initial count 
let count = 0;

// select value and buttons
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) =>{
    btn.addEventListener('click',(e)=>{
        const select = e.currentTarget.classList;
        if(select.contains("increase")){
            count++;
        } else if (select.contains("decrease")){
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;

        if(count > 0){
          value.style.color = 'green';
        } else if(count < 0){
            value.style.color = 'red';
        } else{
            value.style.color = 'black';
        }
    })
})

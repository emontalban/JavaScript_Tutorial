 const getCurrentContentLength = (content, max) =>{
        const maxLength = max;
        if(content.length > maxLength){
            return false;
        }else{
            return true;
        }
    }
    const msgInput = document.querySelector('.msgInput');
    const msgCounter = document.querySelector('.msgCounter');
    const max = 144;

    // msgInput.onkeyup = function(){
        
    //     msgCounter.innerHTML= max - this.value.length;
    //     if(!getCurrentContentLength(this.value, (max-1))){
    //         msgInput.disabled= true;
    //     }
    // }

    msgInput.addEventListener('input', function () {

        if (this.value.length > max) {
            this.value = this.value.substring(0, max);
        }

        msgCounter.innerHTML = max - this.value.length;
    });
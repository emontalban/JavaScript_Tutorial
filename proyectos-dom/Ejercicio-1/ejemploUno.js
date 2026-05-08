   const imgs = document.querySelectorAll('.site-img');

    imgs.forEach(img => {
        img.addEventListener('mouseover' ,(e)=>{
        const container = e.target.parentElement;
        const overlay = container.querySelector('div');

        overlay.classList.remove('hide-img-overlay');
        overlay.classList.add('show-img-overlay');
        });

        img.addEventListener('mouseout' ,(e)=>{
        const container = e.target.parentElement;
        const overlay = container.querySelector('div');

        overlay.classList.add('hide-img-overlay');
        overlay.classList.remove('show-img-overlay');
        });

    })

    
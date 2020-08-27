(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', ()=>  {
        toggleElements(); 
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024)
            offElements();
    })

    function toggleElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.toggle('on');
        })
    }

    function offElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.remove('on');
        })
    }



    
    function captureError(ex) {
        var errorData = {
            name: ex.name, // e.g. ReferenceError
            message: ex.line, // e.g. x is undefined
            url: document.location.href,
            stack: ex.stack // stacktrace string; remember, different per-browser!
        };
        
        $.post('/logger/js/', {
            data: errorData
        });
    }


})(window, document)



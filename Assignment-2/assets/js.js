'use strict';

let dialog = document.getElementById('dialog1');
let close = document.getElementById('button');

window.onload = () => {
    // Method to --> show modal <--
    dialog.showModal();
};  

close.addEventListener('click', function() {
    //Close modal
    dialog.close();
});
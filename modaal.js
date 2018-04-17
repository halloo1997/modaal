// Setting up let variables
var modal           = document.querySelector('#achtergrond');
var modalWindow     = document.querySelector('#Venster');
var modalContent    = document.querySelector('#Content');
var close           = document.querySelector('#close');
var modalTriggers   = document.querySelectorAll('.tekst');
var allModals       = new Object();

//Setting up a const variable
const closeModal = () => {
    modalContent.innerHTML = "";
    modal.parentNode.removeChild(modal);
}


//Adding EventListeners to the close button and modal
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

//Adding EventListeners to trigger links
for(let i = 0; i < modalTriggers.length; i++) {
    let item = modalTriggers[i].hash.substr(1);
    allModals[item] = document.getElementById(item);
    // Adding Click Event
    modalTriggers[i].addEventListener('click', (e) => {
        e.preventDefault()
    modalContent.appendChild(allModals[item]);
    document.body.appendChild(modal);
    sound.src = "clicksfx.mp3";
    sound.play();
})
}

//Removing ModalContent
for(element in allModals) {
    allModals[element].parentNode.removeChild(allModals[element]);
}
//Starting closeModal function
closeModal();

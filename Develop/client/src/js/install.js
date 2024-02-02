const btnInstall = document.getElementById('buttonInstall');

let deferredPrompt; 

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    btnInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
btnInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.defferedPrompt = null;
    btnInstall.classList.toggle('hidden', true);  
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully.');
});

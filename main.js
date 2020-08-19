// UI Variables 
const newProject = document.getElementById('newproj-btn'),
    startBtn = document.getElementById('start-btn'),
    mainContainer = document.getElementById('main-container'),
    startSection = document.getElementById('start-section'),
    exitBtn = document.getElementById('exit-btn'),
    logInBtn = document.getElementById('login-btn'),
    regBtn = document.getElementById('registration-btn');


// Start Project function 
const startProj = () => {
    mainContainer.classList.add('active');
    startSection.classList.add('active')
}

// Close Start Section Function 

const closeStartSection = () => {
    mainContainer.classList.remove('active');
    startSection.classList.remove('active')
}

// Create new Project function
const createNewProject = () => {
    console.log('done');
}

// Show Alert function
const showAlert = () => {
    const alertEl = document.createElement('div');

    alertEl.classList.add('active-alert')

    alertEl.innerHTML = `<h2>Upss...</h2><p>element w budowie, cały czas nad tym pracuje <i class="far fa-smile-wink"></i></p><button class='exit-alert-btn main-btn'id='close-alert'><i class="far fa-times-circle"></i></button>`

    mainContainer.appendChild(alertEl)

    // const closeAlertBtn = document.getElementById('exit-alert-btn')

    // const removeAlert = () => {
    //     mainContainer.removeChild(alertEl)
    // }


    // closeAlertBtn.onclick = removeAlert()


    setTimeout(function () {
        mainContainer.removeChild(alertEl)
    }, 3000)

}




// LISTENERS 
startBtn.addEventListener('click', startProj);
newProject.addEventListener('click', createNewProject);
exitBtn.addEventListener('click', closeStartSection);
regBtn.addEventListener('click', showAlert);
logInBtn.addEventListener('click', showAlert)
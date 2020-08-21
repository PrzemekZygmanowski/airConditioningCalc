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


    // close alert - delete alert from DOM
    const closeAlertBtn = document.getElementById('close-alert');

    closeAlertBtn.addEventListener('click', function () {
        mainContainer.removeChild(alertEl);
    })


    // // LISTENERS TO DYNAMIC ELEMENTS 
    // alertEl.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('.exit-alert-btn')) {
    //         console.log('dziala');
    //         // mainContainer.removeChild(alertEl)
    //     }
    // })

    setTimeout(function () {
        mainContainer.removeChild(alertEl)
    }, 3000)

}

//CREATE NEW PROJECT 
const createProject = (e) => {
    e.preventDefault()

    console.log('dziala');

    const newProjectSection = document.createElement('section');

    newProjectSection.classList.add('new-proj-section');

    setTimeout(function () {
        newProjectSection.classList.add('active');
    }, 10)

    newProjectSection.innerHTML = `<div class="new-proj-container">
        <div class="new-proj-btns">
            <button class="exit-project main-btn" id="exit-project"><i class="far fa-times-circle"></i></button>
            <button class="save-project main-btn" id="save-project"><i class="far fa-save"></i></button>
        </div>
        
        <h2>Nowy Projekt</h2>

        <div class='basic-form-container' id='basic-form-container'>
        <h3>Dane podstawowe</h3>
        <form action="" class='basic-form' id="basic-info-form">
        <label for="name">Nazwa Projektu</label>
        <input type="text" id='name' placeholder="Nazwa Projektu" required>
        <label for="localisation">Lokalizacja</label>
        <input type="text" id='Localisation' placeholder="Lokalizacja">
        <input class='basic-submit start-btn' id="basic-submit" type="submit" value="Zapisz">
        </div>
        <button class="help-btn-section main-btn" id="help-btn-start"><i
                class="far fa-question-circle"></i></button>
    </div>`

    mainContainer.appendChild(newProjectSection);

    // close new project section
    const closeProjBtn = document.getElementById('exit-project');

    closeProjBtn.addEventListener('click', function () {

        newProjectSection.classList.remove('active')

        //Remove project from the Dom
        setTimeout(function () {
            mainContainer.removeChild(newProjectSection)
        }, 1000)
    })

    // save project 
    const saveProjBtn = document.getElementById('save-project');

    saveProjBtn.addEventListener('click', function () {
        showAlert()
    })

}




// LISTENERS 
startBtn.addEventListener('click', startProj);
newProject.addEventListener('click', createProject);
exitBtn.addEventListener('click', closeStartSection);
regBtn.addEventListener('click', showAlert);
logInBtn.addEventListener('click', showAlert);

// LISTENERS TO DYNAMIC ELEMENTS 
// mainContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('.active-alert')) {
//         console.log('dziala');
//         // mainContainer.removeChild(alertEl)
//     }
// })
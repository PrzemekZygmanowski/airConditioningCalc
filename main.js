// UI Variables 
const newProject = document.getElementById('newproj-btn'),
    startBtn = document.getElementById('start-btn'),
    mainContainer = document.getElementById('main-container'),
    startSection = document.getElementById('start-section'),
    exitBtn = document.getElementById('exit-btn'),
    logInBtn = document.getElementById('login-btn'),
    regBtn = document.getElementById('registration-btn'),
    helpBtn = document.getElementsByClassName('help-btn');



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

// show help function
const showHelp = () => {
    const helpEl = document.createElement('div');

    helpEl.classList.add('help-element');

    helpEl.innerHTML = `<h2>Pomoc</h2><p>Tutaj będzie pojawiała się pomoc dotycząca aplikacji i zagadnień merytorycznych <i class="far fa-smile-wink"></i></p><button class='exit-help-btn main-btn'id='close-help'><i class="far fa-times-circle"></i></button>`

    mainContainer.appendChild(helpEl);

    // close alert - delete alert from DOM
    const closeHelpBtn = document.getElementById('close-help');

    closeHelpBtn.addEventListener('click', function () {
        body.removeChild(helpEl);
    })
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


const localStorageRooms = JSON.parse(localStorage.getItem("rooms"))

let rooms = localStorage.getItem("rooms") !== null ? localStorageRooms : [];


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
        <div class='new-proj-wrapper'>
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

        <div class="add-room">
        <h3>Dodaj pomieszczenie</h3>
        <form id="add-room-form">
        <div class="form-control">
            <label for="text">Nazwa pomieszczenia</label>
            <input type=" text" id="room-name" placeholder="Nazwa pomieszczenia...">
        </div>
        <div class="form-control">
            <label for="number">Powierzchnia</label>
            <input type="number" id="room-area" placeholder="Powierzchnia...">
        </div>
        <div class="form-control">
        <label for="number">Temperatura wew.</label>
        <input type="range" min='12' max='32' value='20' id="inner-temp">
    </div>
    <input class='add-room-btn start-btn' id="add-room-btn" type="submit" value="Dodaj">
    </form>
        </div>
        
        <div class="rooms-container">
        <h3>Pomieszczenia</h3>
        <ul id="room-list" class="room-list">
        <li class="room-Li" id='room-Li'><span>01.</span><span>nazwa</span><span>Q= XX kW</span><button class="edit-room-btn"><i class="fas fa-cog"></i></button><button class="delete-room-btn"><i class="far fa-times-circle"></i></button></li>
        <li class="room-Li" id='room-Li'><span>02.</span><span>nazwa</span><span>Q= XX kW</span><button class="edit-room-btn"><i class="fas fa-cog"></i></button><button class="delete-room-btn"><i class="far fa-times-circle"></i></button></li>
        <li class="room-Li" id='room-Li'><span>03.</span><span>nazwa</span><span>Q= XX kW</span><button class="edit-room-btn"><i class="fas fa-cog"></i></button><button class="delete-room-btn"><i class="far fa-times-circle"></i></button></li>
        </ul>

        </div>
        <button class="help-btn-section main-btn" id="help-btn-start"><i
                class="far fa-question-circle"></i></button>      
        </div>     
                 
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

    // add new room


    const addRoomBtn = document.getElementById('add-room-btn');

    addRoomBtn.addEventListener('click', addNewRoom)

}



// Add new room function
const addNewRoom = (e) => {
    e.preventDefault();

    const addRoomForm = document.getElementById('add-room-form'),
        roomName = document.getElementById('room-name'),
        roomArea = document.getElementById('room-area'),
        innerTemp = document.getElementById('inner-temp');
    let id = 1

    if (roomName.value.trim() === '' || roomArea.value.trim() === '') {
        alert("Przepraszam, nazwai powierzchnia pomieszczenia są wymagane :)")
    } else {
        const room = {
            id: generateID(),
            name: roomName.value,
            area: +roomArea.value,
            iTemp: +innerTemp.value
        }
        rooms.push(room);
        addRoomToDOM(room)
        // updateValues()

        // updateLocalStorage()

        roomName.value = "";
        roomArea.value = "";
        innerTemp.value = ""
    }
    console.log('dodaj pokoj');
}
// Generaterandom Id 
function generateID() {
    return Math.floor(Math.random() * 10)
}

// add room to DOM list 
const addRoomToDOM = (room) => {

    const roomlist = document.getElementById('room-list')

    const item = document.createElement('li');

    item.classList.add('room-Li');
    item.id = 'room-Li'

    item.innerHTML = `<span>${romm.id}</span><span>${room.name}</span><span>Q= XX kW</span><button class="edit-room-btn"><i class="fas fa-cog"></i></button><button class="delete-room-btn"><i class="far fa-times-circle"></i></button>`

    roomlist.appendChild(item)
}







// LISTENERS 
startBtn.addEventListener('click', startProj);
newProject.addEventListener('click', createProject);
exitBtn.addEventListener('click', closeStartSection);
regBtn.addEventListener('click', showAlert);
logInBtn.addEventListener('click', showAlert);
// helpBtn.addEventListener('click', function () {
//     console.log('dziala');
// });

// LISTENERS TO DYNAMIC ELEMENTS 
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('.help-btn')) {
//         console.log('dziala');
//         showHelp()
//         // mainContainer.removeChild(alertEl)
//     }
// })
//NAZWA POMIESZCZENIA - STRING!!!

// UI Variables
const newProject = document.getElementById('newproj-btn'),
  startBtn = document.getElementById('start-btn'),
  mainContainer = document.getElementById('main-container'),
  startSection = document.getElementById('start-section'),
  exitBtn = document.getElementById('exit-btn'),
  logInBtn = document.getElementById('login-btn'),
  regBtn = document.getElementById('registration-btn'),
  headerHelpBtn = document.getElementById('help-btn-header'),
  headerHelpWindow = document.getElementById('header-help-alert'),
  closeHeaderAlert = document.getElementById('exit-header-help-btn'),
  startHelpBtn = document.getElementById('help-btn-start'),
  startHelpWindow = document.getElementById('start-help-alert'),
  closeStartAlert = document.getElementById('exit-start-help-btn'),
  helpBtn = document.getElementsByClassName('help-btn');

// Start Project function
const startProj = () => {
  mainContainer.classList.add('active');
  startSection.classList.add('active');
};

// Close Start Section Function
const closeStartSection = () => {
  mainContainer.classList.remove('active');
  startSection.classList.remove('active');
};

// Create new Project function
const createNewProject = () => {
  console.log('done');
};

// show header help-alert function
const headerHelpAlert = () => {
  headerHelpWindow.classList.add('active');
};

// Close header help alert function
const closeHeaderHelpAlert = () => {
  headerHelpWindow.classList.remove('active');
};

// show start help-alert function
const startHelpAlert = () => {
  startHelpWindow.classList.add('active');
};

// Close start help alert function
const closeStartHelpAlert = () => {
  startHelpWindow.classList.remove('active');
};

// const startHelpAlert = () => {
//   const helpEl = document.createElement('div');

//   helpEl.classList.add('help-element');

//   helpEl.innerHTML = `<h2>Pomoc</h2><p>Tutaj będzie pojawiała się pomoc dotycząca aplikacji i zagadnień merytorycznych <i class="far fa-smile-wink"></i></p><button class='exit-help-btn main-btn'id='close-help'><i class="far fa-times-circle"></i></button>`;

//   mainContainer.appendChild(helpEl);

//   // close alert - delete alert from DOM
//   const closeHelpBtn = document.getElementById('close-help');

//   closeHelpBtn.addEventListener('click', function () {
//     body.removeChild(helpEl);
//   });
// };

// Show Alert function
const showAlert = () => {
  const alertEl = document.createElement('div');

  alertEl.classList.add('active-alert');

  alertEl.innerHTML = `<h2>Upss...</h2><p>element w budowie, cały czas nad tym pracuje <i class="far fa-smile-wink"></i></p><button class='exit-alert-btn main-btn'id='close-alert'><i class="far fa-times-circle"></i></button>`;

  mainContainer.appendChild(alertEl);

  // close alert - delete alert from DOM
  const closeAlertBtn = document.getElementById('close-alert');

  closeAlertBtn.addEventListener('click', function () {
    mainContainer.removeChild(alertEl);
  });

  setTimeout(function () {
    mainContainer.removeChild(alertEl);
  }, 3000);
};

const localStorageRooms = JSON.parse(localStorage.getItem('rooms'));

let rooms = localStorage.getItem('rooms') !== null ? localStorageRooms : [];

//CREATE NEW PROJECT
const createProject = (e) => {
  e.preventDefault();

  console.log('dziala');

  const newProjectSection = document.createElement('section');

  newProjectSection.classList.add('new-proj-section');

  setTimeout(function () {
    newProjectSection.classList.add('active');
  }, 10);

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
        </ul>

        </div>
        <button class="help-btn-section main-btn" id="help-btn-start"><i
                class="far fa-question-circle"></i></button>
        </div>
    </div>`;

  mainContainer.appendChild(newProjectSection);

  // close new project section
  const closeProjBtn = document.getElementById('exit-project');

  closeProjBtn.addEventListener('click', function () {
    newProjectSection.classList.remove('active');

    //Remove project from the Dom
    setTimeout(function () {
      mainContainer.removeChild(newProjectSection);
    }, 1000);
  });

  // save project
  const saveProjBtn = document.getElementById('save-project');

  saveProjBtn.addEventListener('click', function () {
    showAlert();
  });

  // add new room

  const addRoomBtn = document.getElementById('add-room-btn');

  addRoomBtn.addEventListener('click', addNewRoom);
};

// Add new room function
const addNewRoom = (e) => {
  e.preventDefault();

  const addRoomForm = document.getElementById('add-room-form'),
    roomName = document.getElementById('room-name'),
    roomArea = document.getElementById('room-area'),
    innerTemp = document.getElementById('inner-temp');
  let id = 1;

  if (roomName.value.trim() === '' || roomArea.value.trim() === '') {
    alert('Przepraszam, nazwai powierzchnia pomieszczenia są wymagane :)');
  } else {
    const room = {
      id: generateID(),
      name: roomName.value,
      area: +roomArea.value,
      iTemp: +innerTemp.value,
    };
    rooms.push(room);
    addRoomToDOM(room);
    addRoomSectionToDOM(room);
    // updateValues()

    // updateLocalStorage()

    roomName.value = '';
    roomArea.value = '';
    innerTemp.value = '';
  }
  console.log('dodaj pokoj');
};
// Generate random Id
function generateID() {
  return Math.floor(Math.random() * 10);
}

// add room to DOM list
const addRoomToDOM = (room) => {
  const roomlist = document.getElementById('room-list');

  const item = document.createElement('li');

  // add class and id to item
  item.classList.add('room-Li');
  item.id = 'room-Li';

  item.innerHTML = `<span>0${room.id}.</span><span>${room.name}</span><span>Q= XX kW</span><button class="edit-room-btn" id='edit-room-btn' data-num='${room.name}'><i class="fas fa-cog"></i></button><button class="delete-room-btn"><i class="far fa-times-circle"></i></button>`;

  roomlist.appendChild(item);
};

// ADD ROOM SECTION TO DOM
const addRoomSectionToDOM = (room) => {
  console.log(room.id);

  const roomSection = document.createElement('section');

  // add class and id to room section
  roomSection.classList.add('room-section', `room-${room.id}`, 'hide');
  roomSection.id = `${room.name}-room`;
  roomSection.dataset.num = `${room.id}`;

  roomSection.innerHTML = `<button class="exit-room main-btn" id="exit-room" ><i class="far fa-times-circle"></i></button>
    <button class="help-btn-room main-btn" id="help-btn-room"><i class="far fa-question-circle"></i></button>
<div><h2>${room.name}</h2></div>
<div class='room-overlap home-overlap active' id='home'>
<div class='main-data'>
<h3>Dane podstawowe</h3>
<h4>Całkowite zyski ciepła: 00 kW</h4>
<p>Powierzchnia: <strong>${room.area} m kwd.</strong></p>
<p>Temperatura wewnętrzna: <strong>${room.iTemp} st. C</strong></p>
<p>Zyski ciepła od ludzi: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła od oświetlenia: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła od urządzeń: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła od przegród przezroczystych: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła od przegród nieprzezroczystych: <strong>Q=00 kW</strong></p>
</div>
</div>
<div class='room-overlap human-overlap' id='human'>
<h3>Zyski ciepła od ludzi</h3>
<p>Zyski ciepła jawnego: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła utajonego: <strong>Q=00 kW</strong></p>
<p>Zyski ciepła od ludzi: <strong>Q=00 kW</strong></p>
<form id="human-form" class='room-form'>
    <div class="form-control">
        <label for="number">Ilość ludzi</label>
        <input type="range" min='0' max='100' value='50' id="people-number">
    </div>
    <div class="form-control">
        <label for="text">Kim są Ci ludzie?</label>
          <select type=" text" id="people-sex">
            <option value="1"> Mężczyźni </option>
            <option value="2"> Kobiety </option>
            <option value="3"> Mężczyźni i Kobiety </option>
            <option value="4"> Dzieci </option>
          </select>
    </div>
    <div class="form-control">
        <label for="text">Współczynnik jednoczesności</label>
          <select type=" text" id="people-ratio">
            <option value="1"> Biura i duże sale </option>
            <option value="2"> Hotele, pokoje wieloosobowe </option>
            <option value="3"> Domy towarowe</option>
            <option value="4"> Pomieszczenia techniczne </option>
            <option value="5"> Teatry, kina </option>
          </select>
        </div>
    <div class="form-control">
        <label for="text">Aktywność</label>
          <select type=" text" id="people-activity">
            <option value="1"> Mała </option>
            <option value="2"> Średnia </option>
            <option value="3"> Duża </option>
          </select>
    </div>
    <input class='start-btn' id="submit-human-btn" type="submit" value="Oblicz">
    </form>

</div>
<div class='room-overlap light-overlap' id='light'>
  <h3>Zyski ciepła od oświetlenia</h3>
  <p>Zyski ciepła od oświetlenia: <strong>Q=00 kW</strong></p>
  <p>Powierzchnia: <strong>${room.area} m kwd.</strong></p>
  <div class="form-control">
        <label for="text">Rodzaj pomieszczenia</label>
          <select type=" text" id="room-type">
            <option value="1"> Magazyny, drogi komunikacyjne w budynkach dla ludzi i samochodów, klatki schodowe, korytarze, schody i wejścia do hal w zakładach, mieszkania, teatry </option>
            <option value="2">Magazyny z czynnościami odczytywania,
            spedycja, kantyny, restauracje, zakłady produk- cyjne, proste prace montażowe, komunikacja</option>
            <option value="3"> Biura z miejscami z dala od okien, biblioteki,
            przedszkola, sale wykładowe, konferencyjne, pomieszczenia sprzedaży, średnio dokładne prace montażowe</option>
            <option value="4">Biura typu open-space, elektroniczne przetwa-
            rzanie danych, sale wykładowe z niewystar- czającym światłem dziennym, dokładne prace montażowe, kuchnie w restauracjach, laboratoria,
            domy towarowe, hale wystawowe</option>
            <option value="5"> Duże pomieszczenia biurowe, kreślarnie,
            grawernie, farbiarnie</option>
            <option value="6">Badanie farb, montaż precyzyjny, wytwarzanie
            towarów ozdobnych</option>
            <option value="7">Montaż części precyzyjnych, jubilerstwo,
            zegarmistrzostwo, zakłady optyczne, kontrola jakości przy dużych wymaganiach</option>
          </select>
  </div>
    <div class="form-control">
      <label for="text">Rodzaj oświetlenia:</label>
        <select type=" text" id="light-type">
          <option value="1"> Żarowe </option>
          <option value="2"> Fluorescencyjne </option>
        </select>
      </div>
  <div class="form-control">
    <label for="number">Moc oświetlenia</label>
    <input type="range" min='20' max='25' value='22' id="light-power">
  </div>
</div>
<div class='room-overlap machine-overlap' id='machine'><h3>Zyski ciepła od urządzeń</h3></div>
<div class='room-overlap window-overlap' id='window'><h3>Zyski ciepła przez przegrody przezroczyste</h3></div>
<div class='room-overlap wall-overlap' id='wall'><h3>Zyski ciepła przez przegrody nieprzezroczyste</h3></div>
    <div class="navbar">
        <ul class="room-navbar">
            <li><button class="room-btn" id="home-btn" data-tab='home'><i class="fas fa-home"></i></button></li>
            <li><button class="room-btn" id="human-btn" data-tab='human'><i class="far fa-smile"></i></button></li>
            <li><button class="room-btn" id="light-btn" data-tab='light'><i class="far fa-lightbulb"></i></button></li>
            <li><button class="room-btn" id="machine-btn" data-tab='machine'><i class="fas fa-laptop"></i></button></li>
            <li><button class="room-btn" id="window-btn" data-tab='window'><i class="fas fa-cloud-sun"></i></button></li>
            <li><button class="room-btn" id="wall-btn" data-tab='wall'><i class="fas fa-door-closed"></i></button></li>
        </ul>
    </div>`;

  mainContainer.appendChild(roomSection);

  // Exit room function
  const exitRoomBtn = document.querySelectorAll('.exit-room');

  exitRoomBtn.forEach(function (el) {
    const exitRoom = () => {
      console.log('2423');
      roomSection.classList.add('hide');
    };

    el.addEventListener('click', exitRoom);
  });

  //Switch overlap
  switchOverlap();
  // Edit room
  editRoom();
};

//EDIT & EXIT ROOM
function editRoom() {
  const roomSection = document.querySelectorAll('.room-section');
  const editRoomBtn = document.querySelectorAll('.edit-room-btn');

  editRoomBtn.forEach(function (el) {
    el.addEventListener('click', editRoomfunc);
  });

  function editRoomfunc(el) {
    const roomBtnTarget = el.currentTarget;
    currentRoom = roomBtnTarget.dataset.num;
    console.log(el.currentRoom);

    roomSection.forEach(function (el) {
      el.classList.add('hide');
    });

    document
      .querySelector('#' + currentRoom + '-room')
      .classList.remove('hide');
  }
}

//SWITCH OVERLAP FUNCTION
function switchOverlap() {
  //variables
  // const homeBtn = document.getElementById('home-btn'),
  //       humanBtn = document.getElementById('human-btn'),
  //       lightBtn = document.getElementById('light-btn'),
  //       machineBtn = document.getElementById('machine-btn'),
  //       windowBtn = document.getElementById('window-btn'),
  //       wallBtn = document.getElementById('wall-btn'),
  //       homeOverlap = document.getElementById('home-overlap'),
  //       humanOverlap = document.getElementById('human-overlap'),
  //       lightOverlap = document.getElementById('light-overlap'),
  //       machineOverlap = document.getElementById('machine-overlap'),
  //       windowOverlap = document.getElementById('window-overlap'),
  //       wallOverlap = document.getElementById('wall-overlap');
  const roomOverlap = document.querySelectorAll('.room-overlap'),
    roomBtn = document.querySelectorAll('.room-btn');

  roomBtn.forEach(function (el) {
    el.addEventListener('click', openTab);
  });

  function openTab(el) {
    const btnTarget = el.currentTarget,
      overlap = btnTarget.dataset.tab;

    console.log(el.currentTarget);

    roomOverlap.forEach(function (el) {
      el.classList.remove('active');
    });

    roomBtn.forEach(function (el) {
      el.classList.remove('active');
    });

    document.querySelector('#' + overlap).classList.add('active');

    btnTarget.classList.add('active');
  }
}

// LISTENERS
startBtn.addEventListener('click', startProj);
headerHelpBtn.addEventListener('click', headerHelpAlert);
closeHeaderAlert.addEventListener('click', closeHeaderHelpAlert);
startHelpBtn.addEventListener('click', startHelpAlert);
closeStartAlert.addEventListener('click', closeStartHelpAlert);
newProject.addEventListener('click', createProject);
exitBtn.addEventListener('click', closeStartSection);
regBtn.addEventListener('click', showAlert);
logInBtn.addEventListener('click', showAlert);

// helpBtn.addEventListener('click', function () {
//     console.log('dziala');
// });

//LISTENERS TO DYNAMIC ELEMENTS
// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('.help-btn')) {
//     console.log('dziala');
//     showHelp();
//     // mainContainer.removeChild(alertEl)
//   }
// });

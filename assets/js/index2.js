let btn = document.getElementById('btn');
let lista = document.getElementById('items');
let borrar = document.querySelector('.borrar');
let hecho = document.getElementById('hecho');
let ident = document.getElementById('ident');
let total = document.getElementById('total');
let realizadas = document.getElementById('realizadas');
let pendientes = document.getElementById('pendientes');
let input = document.getElementById('todo1');

let toDoList = [
  {
    ident: 16,
    texto: 'Hacer mercado',
    hecho: false,
    borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        
    `,
  },
  {
    ident: 60,
    texto: 'Estudiar para la prueba',
    hecho: false,
    borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        
    `,
  },
  {
    ident: 24,
    texto: 'Sacar a pasear a Toddy',
    hecho: false,
    borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        
    `,
  },
];

let maxValueOfY = Math.max.apply(toDoList.ident, toDoList.map(function (o) {
  maxValueOfY = o.ident;
}));


console.log("Conectado, el valor maximo del array toDoList es ${maxValueOfY} la cantidad de elementos en el array es ${toDoList.length}");
console.log(toDoList);



let total1 = toDoList.length;
let realizadas1 = toDoList.filter(todo => todo.hecho == true).length;
let pendientes1 = toDoList.filter(todo => todo.hecho == false).length;
function rendertotal() {
  total.innerHTML = ` ${total1} `;
  realizadas.innerHTML = ` ${realizadas1} `;
  pendientes.innerHTML = ` ${pendientes1} `;
}//render elements in the list

let renderLista = function renderLista() {
  //clean lista
  lista.innerHTML = '';
  //render elements in the list
  let html = '';
  toDoList.forEach(todo => {
    html += `
        <tr>
        <th scope="row" class="fs-5">
    ${todo.ident}</th>
        <td class="fs-5">
    ${todo.texto}</td>
        <td><input type="checkbox" name="hecho" id="hecho" class="form-check-input m-2"></td>
        <td class="fs-5">
    ${todo.borrar}</td>
        </tr>
        
    `;
    lista.innerHTML = html;
  }
  );
};


let newObject = {};

function captura() {
  if (document.getElementById('todo1').innerText == '') {
    console.log('No se puede agregar una tarea vacia');
    return false;
  }
  else {

    let input = document.getElementById('todo1').value;
    let ident = maxValueOfY + 1;

    newObject = {
      "ident": ident,
      "texto": input,
      "hecho": false,
      "borrar": `
        <a href="#" id="borrar" onclick="borr(
    ${borrar})"> </a>
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
    `,
    };
    newObject = newObject;
  }

}

// push newobject to the array toDoList
function add() {
  if (captura() == false) {
    console.log(input.value);
    console.log('No se puede agregar una tarea vacia');
    return false;
  } else {
    toDoList.push(newObject);
    renderList();
  }
}

function listar() {
  try {
    ;
    add(parseInt(captura()));
  } catch (err) {
    console.log(err);
  } finally {
    renderLista();
    console.log(newObject);
  }
};

function clearInput() {
  input.value = '';
};


function renderList() {
  listar();
  renderLista();
  rendertotal();
  clearInput();
}

renderList();


//add event listener to the button
btn.addEventListener('click', listar());

// add delete functionallity to the delete button
function borr(ident) {
  //find the object to delete
  let toDelete = toDoList.find(todo => todo.borrar === ident);
  //delete the object without changing the array
  toDoList.splice(toDoList.indexOf(toDelete), 1);
  //render the list again
  renderLista();
  rendertotal();
}


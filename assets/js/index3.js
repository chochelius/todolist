// capture all ids from C:\Users\Jorge\Desktop\desafioToDo\index.html
let input = document.getElementById("textos").value;
let btn = document.getElementById('btn');
let lista = document.getElementById('items');
let borrar = document.getElementById('borrar');
let hecho = document.querySelector('.true');
let total = document.getElementById('total');
let realizadas = document.getElementById('realizadas');
let pendientes = document.getElementById('pendientes');

let maxIdent = "";

//create toDoList

let toDoList = [

    {
        ident: 16,
        texto: "Hacer mercado",
        hecho: false,
        borrar: 16,
    },
    {
        ident: 60,
        texto: "Estudiar para la prueba",
        hecho: false,
        borrar: 60
    },
    {
        ident: 24,
        texto: "Sacar a pasear a Toddy",
        hecho: false,
        borrar: 16
    }
];

function seHizo(val) {
    if ( val == true) {val =  'checked';}
    else if (val = false) { val = 'unchecked';}
};








function renderListas() {
    toDoList.forEach(item => {

        item = 
           `
    <tr>
    <td>${item.ident}</td>
    <td>"${item.texto}"</td>
    <td> <input type='checkbox' class='true' ${seHizo(item.hecho)}> </td>
    <td> <a href="#" id="borrar" onclick="borr(${item.ident})">
    <img src="assets/img/xmark-outline.svg" class="icono my-auto">
    </a>
    </td>
    </tr>
    `;
        lista.innerHTML += item;

    });
}

let realizado = document.querySelector('.true');
realizado.addEventListener('change', function () {
    console.log('cambio');
    if (realizado.checked) {
        changeHecho(realizado.value, true);
    } else {
        changeHecho(realizado.value, false);
    };
    renderTotals();
    renderListas();
} );


function renderTotals() {
    total.innerHTML = "";
    realizadas.innerHTML = "";
    pendientes.innerHTML = "";

    //render totals to the dom
    length1 = toDoList.length;
    realizadas1 = toDoList.filter(todo => todo.hecho === true);
    pendientes1 = toDoList.filter(todo => todo.hecho === false);
    total.innerHTML = length1;
    realizadas.innerHTML = realizadas1;
    pendientes.innerHTML = pendientes1.length;

    // find the maximum value of ident in the array of objects
    maxIdent = toDoList.reduce((max, todo) => Math.max(max, todo.ident), 0);
    console.log(maxIdent);
}

console.log(`Conectado, el valor maximo del array toDoList es ${maxIdent} la cantidad de elementos en el array es ${toDoList.length}`);



// initial render of list and totals to the dom
let render = function render() {
    //clear lista
    lista.innerHTML = "";
    //render toDoList
    renderListas();
    //render totals
    renderTotals();

}

//clear input
let clearInput = function clearInput() {
    document.getElementById('todo1').value = "";
}

render();

// get input value and add to toDoList as an array of objects
let addTodo = function addTodo() {
    //get input value
    console.log(input.textContent);
    input = document.getElementById("todo1").value;
    toDoList.push({
        ident: (nextIdent = maxIdent + 1),
        texto: `${input}`,
        hecho: false,
        borrar: nextIdent,
    });
    lista.innerHTML = "";
    renderListas();
    renderTotals();





    //clear input
    clearInput();

};

let changeHecho = function (hecho) {
    toDoList.forEach(hecho => {
        if (hecho) {
            realizadas.innerHTML = (realizadas1+1);
            renderTotals();
        } else if (hecho){ 
            pendientes.innerHTML = (total1-1);
            renderTotals();
        }
    } );
}
     


function borr(id) {
    // filter out object with the parameter ident from the toDoList array
    toDoList = toDoList.filter(todo => todo.ident !== id);
    render();
}         


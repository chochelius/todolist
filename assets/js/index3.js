// capture all ids from C:\Users\Jorge\Desktop\desafioToDo\index.html
let input = document.getElementById('todo1').value;
let btn = document.getElementById('btn');
let lista = document.getElementById('items');
let borrar = document.getElementById('borrar');
let hecho = document.querySelectorAll("input[type=checkbox][name=hecho]");
let total = document.getElementById('total');
let realizadas = document.getElementById('realizadas');
let pendientes = document.getElementById('pendientes');



//create todoList

let todoList = [

    {
        ident: 16,
        texto: "Hacer mercado",
        hecho: ` <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>`,
        borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        `,
    },
    {
        ident: 60,
        texto: "Estudiar para la prueba",
        hecho: ` <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>`,
        borrar: `
        <a href="#" id="borrar" onclick="borr(60)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        `,
    },
    {
        ident: 24,
        texto: "Sacar a pasear a Toddy",
        hecho: ` <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>`, 
        borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        `,
    },
];


function isTodo(todo) {
    //check if todo is boolean
    if (typeof todo.hecho == "boolean") {
        return true;
    }

}




// initial render of list and totals to the dom
 function render() {
    //clear lista
    lista.innerHTML = "";
    //render todoList
    todoList.forEach(todo => {
        lista.innerHTML += `
        <tr>
        <td>${todo.ident}</td>
        <td>${todo.texto}</td>
        <td>${todo.hecho}</td>
        <td>${todo.borrar}</td>
        </tr>
        `;
        //clear lista
        

        //render totals to the dom
        total.innerHTML = todoList.length;
        realizadas.innerHTML = todoList.filter(todo => todo.hecho == true).length;
        pendientes.innerHTML = todoList.filter(todo => todo.hecho == false).length;

        
    }
    );
}

render();

//clear input
function clearInput() {
    document.getElementById('todo1').value = "";
} 

clearInput();
//get highest value of ident and save it as a variable

let maxIdent = todoList.reduce((max, todo) => { return todo.ident > max ? todo.ident : max; }, 0);

// get input value and add to todoList as an array of objects
function addTodo() {
    //clear lista
    lista.innerHTML = "";
    //get input value
    let input = document.getElementById('todo1').value;
    todoList.push({
        ident: maxIdent + 1 ,
        texto: input,
        hecho: `<td><input type="checkbox" class="false" onclick="checked(this)"></td>`,
        borrar: `
        <a href="#" id="borrar${maxIdent + 1})" onclick="borr(${maxIdent + 1}))">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        `,
    });
    render();

    maxIdent++; //increment maxIdent
    //clear input
    document.getElementById('todo1').value = "";

}


ifChecked = () => {
    isTodo();
    if (hecho.checked) {
        console.log("hecho");
        todoList.forEach(todo => {
            if (hecho.id == todo.ident) {
                todo.hecho = true;
                render();
            }
        }
        );
    } else {
        todoList.forEach(todo => {
            if (todo.ident == hecho.id) {
                todo.hecho = false;
                render();
            }
        }
        );
    }
}

isValue = () => {
    console.log(todoList[0].hecho)
}  

document.getElementById('').addEventListener('change', isValue());


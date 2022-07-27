let todo = document.getElementById('todo1');
let btn = document.getElementById('btn');
let lista = document.getElementById('lista');
let borrar = document.querySelector(".borrar");
let hecho = document.getElementById('hecho');
let ident = document.getElementById('ident');
let total = document.getElementById('total');
let realizadas = document.getElementById('realizadas');
let pendientes = document.getElementById('pendientes');




let todoList = [

    {
        ident: 16,
        texto: "Hacer mercado",
        hecho: false,
        borrar: `
        <a href="#" id="borrar" onclick="borr(16)">
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>
        `,
      } ,
    {
        ident: 60,
        texto: "Estudiar para la prueba",
        hecho: false,
        borrar: `<a href="#" id="borrar" onclick="borr(60)>
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>`,
      },
    {
        ident: 24,
        texto: "Sacar a pasear a Toddy",
        hecho: false,
        borrar: `<a href="#" id="borrar" onclick="borr()>
        <img src="assets/img/xmark-outline.svg" class="icono my-auto">
        </a>`, 
        },
];



let maxValueOfY = Math.max.apply(todoList.ident, todoList.map(function(o) { return o.ident; }));


console.log(`Conectado, el valor maximo del array todoList es ${maxValueOfY} la cantidad de elementos en el array es ${todoList.length}`);
console.log(todoList);





console.log (todoList.length, todoList.filter(todo => todo.hecho == true).length, todoList.filter(todo => todo.hecho == false).length);

let total1 = todoList.length;
let realizadas1 = todoList.filter(todo => todo.hecho == true).length;
let pendientes1 = todoList.filter(todo => todo.hecho == false).length;


let rendertotal = () => {
    
    total.innerHTML = ` ${ total1 } `;
    realizadas.innerHTML = ` ${ realizadas1 } `;
    pendientes.innerHTML = ` ${ pendientes1 } `;
       
}

function render1() {
        todoList.forEach((todo) => {
        //use appendChild to add elements to lista
        lista.innerHTML += `
        <tr>
        <td>${todo.ident}</td>
        <td>${todo.texto}</td>
        <td><input type="checkbox" name="hecho" id="hecho" class="form-check-input m-2"></td>
        <td>${todo.borrar}</td>
        </tr>
        `;
    }
    );
}

function completo() {
    () => {
        if (hecho.checked) {
            todoList.forEach((todo) => {
                if (todo.ident == ident.value) {
                    todo.hecho = true;
                } else {
                    todo.hecho = false;
                }
            }
            );
        }
    };
}

//clear input



const render = () => {
    completo;
    render1;
    rendertotal;
    todo.value = '';
}


const borr = () => {
    //find object on array of objects todoList
    let obj = todoList.find(obj => obj.ident === ident.value);
    //remove object from array of objects todoList
    todoList.splice(todoList.indexOf(obj), 1);
    //render array of objects todoList
    render();
}

//add todo to array of objects todoList

const nuevoElemento = () => {
    let texto = todo.value;
    let ident = maxValueOfY + 1;
    let hecho = false;
    let borrar = `<a href="#" id="borrar" onclick="borr()>`
    todoList.push( {ident, texto, hecho, borrar } );
    lista.innerHTML = ' ';
    render1();
    rendertotal();

    

};


render();




borrar.addEventListener('click', borr());
hecho.addEventListener('onchange', rendertotal());
btn.addEventListener('click', nuevoElemento);






let interestListArray = ["Fútbol","Basket","Tenis","Paddle", "ciclismo", "atletismo", "natación", "Alpinismo",
                    "Ajedrez","Crucigramas","Puzzles","Sudoku", "Jardinería",
                    "Fotografía", "Videojuegos", "Cine", "Música", "Escritura",
                    "Piano", "Baile", "Pintura", "Cocina", "Viajes", 
                    "Yoga", "Pilates", "Tai-chi", "Karate", "Reiki"];

let profileText = {
    male: "Desarrollador web innovador, proactivo y con capacidad para desarrollar páginas web elegantes y pioneras. Diseños de aplicaciones para clientes exigentes. </br>Organizado y con capacidad de multitarea con experiencia en programación de proyectos, mejora de diseños y verificación del código. Habilidades de desarrollo web y aplicaciones móviles para una posición estimulante en una compañia moderna, abierta y profesional.",
    female: "Desarrolladora web innovadora, proactiva y con capacidad para desarrollar páginas web elegantes y pioneras. Diseños de aplicaciones para clientes exigentes. </br>Organizada y con capacidad de multitarea con experiencia en programación de proyectos, mejora de diseños y verificación del código. Habilidades de desarrollo web y aplicaciones móviles para una posición estimulante en una compañia moderna, abierta y profesional."
};

/**
 * * Se genera un user random cada vez que se inicia la pagina
 */
function fillData(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/", true);
    request.onload = function(){
        
        let data = JSON.parse(request.responseText);
        console.log(data);
        
        //Datos personales
        setProfileData(data);

        //nivel de lenguajes
        setLanguagesBar();

        //Nivel de skills
        setSkills();

        //Intereses
        setInterestList();
        
        };
    request.send();
}


/**
 * Funcion para obtener un numero al azar entre 2 numeros, indicando el factor adicionalmente
 * @param {*} min desde
 * @param {*} max hasta
 * @param {*} factor facto
 * @returns 
 */

function randomizer(min, max, factor){
    return Math.round((Math.random()*(max-min)+min)/factor)*factor;
}

/**
 * Funcion para setear los datos de la persona
 */
function setProfileData(data) {
    document.getElementById("name").innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
    document.getElementById("profileImage").src = data.results[0].picture.large;
    document.getElementById("cellphone").innerHTML = data.results[0].cell;
    document.getElementById("cellphone").href = `tel:${data.results[0].cell}` ;
    document.getElementById("email").innerHTML = data.results[0].email;
    document.getElementById("email").href = `mailto:${data.results[0].email}?Subject=Contacto%20CV%20`;
    document.getElementById("web").innerHTML = `www.${data.results[0].name.first}${data.results[0].name.last}.com`;
    document.getElementById("web").href = `http://www.${data.results[0].name.first}${data.results[0].name.last}.com`;
    document.getElementById("location").innerHTML = `${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`;
    document.getElementById("profileText").innerHTML = profileText[data.results[0].gender]; //Se setea el texto segun el genero
}

/**
 * Funcion para setear el porcentaje de lenguajes random
 */
function setLanguagesBar() {
    document.getElementById("englishBar").style.width = `${randomizer(20,100,5)}%`;
    document.getElementById("spanishBar").style.width = `${randomizer(90,100,5)}%`;
    document.getElementById("portugueseBar").style.width = `${randomizer(20,100,5)}%`;
}

/**
 * Funcion para setear el porcentaje de las skills 
 */
function setSkills(){
    document.getElementById("htmlSkillBar").style.width = `${randomizer(20,100,5)}%`;
    document.getElementById("cssSkillBar").style.width = `${randomizer(20,100,5)}%`;
    document.getElementById("jsSkillBar").style.width = `${randomizer(20,100,5)}%`;
    document.getElementById("gitSkillBar").style.width = `${randomizer(20,100,5)}%`;
    document.getElementById("reactSkillBar").style.width = `${randomizer(20,100,5)}%`;
}

/**
 * Funcion para setear la lista de intereses random
 */
function setInterestList() {
    let list = document.getElementById("interestList");
    
    interestListArray.forEach((item, index) => {
        if(randomizer(0,5,1) == '1')
        {
            let li = document.createElement('li');
            li.appendChild(document.createElement('i')).setAttribute("class","fa-solid fa-thumbtack");
            li.appendChild(document.createTextNode(`${interestListArray[index]}`)); 
            list.appendChild(li);
        }    
    });
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
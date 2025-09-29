//botón login
const loginBtn = document.getElementById('login-btn');
function cambiarBoton() {
    if (loginBtn.innerText === "Login") {
        loginBtn.innerText = "Logout";
    } else {
        loginBtn.innerText = "Login";
    }
}
loginBtn.addEventListener('click', cambiarBoton);

//botón add definition
const addDefBtn = document.getElementById('add-def-btn');
function removerBoton() {
    addDefBtn.style.display = 'none';
}
addDefBtn.addEventListener('click', removerBoton);

// botones like
const likeBtn1 = document.getElementById('like-btn-1');
const likeBtn2 = document.getElementById('like-btn-2');

function manejarLike(event) {
    const botonClickeado = event.target;
    const textoActual = botonClickeado.innerText;
    let likes = parseInt(textoActual);
    likes++;

    botonClickeado.innerText = `${likes} likes`;
    alert('¡Te gusta esta publicación!');
}

likeBtn1.addEventListener('click', manejarLike);
likeBtn2.addEventListener('click', manejarLike);
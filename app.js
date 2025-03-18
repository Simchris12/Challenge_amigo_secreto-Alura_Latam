let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim(); // Capturar y limpiar el valor del input

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en pantalla
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Seleccionar un índice aleatorio
    let amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre del amigo secreto
    document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + amigoSecreto;
}

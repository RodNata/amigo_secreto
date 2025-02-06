let nombres = [];
let nombresSorteados = new Set();

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo == "") {
        alert("Por favor incluir un nombre valido");
    }else{
        if (nombres.includes(amigo)) {
            alert("Este nombre ya se encuentra incluido en esta lista");
        }else{
            nombres.push(amigo);
            document.getElementById("amigo").value = ""
            listarAmigos()
        }
    }
    console.log('❤❤', 'amigo: ', amigo);
    console.log('❤❤', 'nombres: ', nombres);
}

function listarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    // Filtramos los nombres que aún no han sido sorteados
    let nombresDisponibles = nombres.filter(nombre => !nombresSorteados.has(nombre));

    if (nombresDisponibles.length === 0) {
        alert("Todos los nombres ya han sido sorteados.");
        return;
    }

    // Elegimos un nombre al azar de los disponibles
    let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    let nombreSorteado = nombresDisponibles[indiceAleatorio];

    // Agregar a la lista de nombres sorteados
    nombresSorteados.add(nombreSorteado);

    // Mostrar el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 ${nombreSorteado} 🎉`;
}

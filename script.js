// Macaluso Alessandro 4^C INF.
//PROVA

class Contatto {
    constructor(nome, cognome, numero) {
        this.nome = nome;
        this.cognome = cognome;
        this.numero = numero;
    }
}

let listaContatti = [];

const inserireContatto = () => {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;

    listaContatti.push(new Contatto(nome, cognome, numero));

    resettaTutto();
}

const cancellaContatto = () => {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;

    for (let i = 0; i < listaContatti.length; i++) {
        if (listaContatti[i].nome == nome && listaContatti[i].cognome == cognome && listaContatti[i].numero == numero) {
            listaContatti.splice(i, 1);
        }
    }


    resettaTutto();
}

const visualizzaContatti = () => {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < listaContatti.length; i++) {
        lista.innerHTML += "<li>" + listaContatti[i].nome + " " + listaContatti[i].cognome + " " + listaContatti[i].numero + "</li>";
    }

    resettaTutto();
}

const resettaTutto = () => {
    let nome = document.getElementById("nome").value = "";
    let cognome = document.getElementById("cognome").value = "";
    let numero = document.getElementById("numero").value = "";
}
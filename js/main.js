// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// FUNZIONE 

// creo la funzione che disegna in pagina la griglia con massimo 10 celle per riga

function griglia10 (celle) {
    for (var i = 1; i <= celle; i++) {
        document.getElementById("campo").innerHTML += `<div class="cella">${i}</div>`;
    }
}

// PROGRAMMA PRINCIPALE 

// 1. chiedo all'utente di inserire un numero di celle compreso tra 1 e 100

let numeroCelle = parseInt(prompt(`Inserisci un numero di celle compreso tra 1 e 100`));

// 2. validazione: verifico se il numero inserito dall'utente è compreso tra 1 e 100, in caso negativo gli chiedo di reinserirlo fino a quando non è compreso

while (isNaN(numeroCelle) || numeroCelle < 1 || numeroCelle > 100) {
    alert("Errore!");
    numeroCelle = parseInt(prompt(`Inserisci un numero di celle compreso tra 1 e 100`)); 
}

// 3. chiamo(invoco) la funzione griglia10

griglia10(numeroCelle);

// 4. creo un evento click su una cella che mostra il contenuto della stessa e cambia il colore di background in rosso 
   
document.getElementById("campo").addEventListener(`click`,
    function(evento) {
        alert(evento.target.innerHTML);
        evento.target.classList.toggle("bg-red");
    }
);



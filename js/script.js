function criptografarDescriptografar() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let text = input.value.toLowerCase();
    let cripto = "";

    if (text.includes("enter") || text.includes("imes") || text.includes("ai") || text.includes("ober") || text.includes("ufat")) {
        cripto = text.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    } else {
        cripto = text.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    }

    output.value = cripto;
}

document.getElementById("input").addEventListener("input", function(event) {
    let text = event.target.value.toLowerCase();
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if ((c >= 'a' && c <= 'z') || c === ' ') {
            newText += c;
        }
    }
    event.target.value = newText;
});


let output = document.getElementById("output");
output.setAttribute("readonly", true);
output.addEventListener("click", () => {
  alert("Este campo está bloqueado. Digite seu texto no outro campo.");
});

function trocarETraduzir() {
    let inputTitle = document.getElementById("inputTitle");
    let outputTitle = document.getElementById("outputTitle");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let temp = input.value;
    input.value = output.value;
    output.value = temp;
    criptografarDescriptografar();
    
    let tempTitle = inputTitle.innerText;
    inputTitle.innerText = outputTitle.innerText;
    outputTitle.innerText = tempTitle;
  }

function editarESincronizar() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    output.addEventListener("input", function() {
        let text = output.value.toLowerCase();
        let descripto = "";

        if (text.includes("enter") || text.includes("imes") || text.includes("ai") || text.includes("ober") || text.includes("ufat")) {
            descripto = text.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        } else {
            descripto = text.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        }

        input.value = descripto;
    });
}

document.getElementById("input").addEventListener("input", function() {
    criptografarDescriptografar();
});

editarESincronizar();

document.getElementById("trocar").addEventListener("click", function() {
    trocarETraduzir();
});

function copiarTexto(id) {
    let elemento = document.getElementById(id);
    elemento.select();

    let tempInput = document.createElement("textarea");
    document.body.appendChild(tempInput);
    tempInput.value = elemento.value;
    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Texto copiado com sucesso!");
}

document.getElementById("copy-input").addEventListener("click", function() {
    copiarTexto("input");
});

document.getElementById("copy-output").addEventListener("click", function() {
    copiarTexto("output");
});

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const textarea = document.querySelector('textarea');

if (localStorage.getItem('darkModeEnabled') === 'true') {
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
}

if (localStorage.getItem('text') !== null) {
  textarea.value = localStorage.getItem('text');
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = 'Tema Claro';
    } else {
      darkModeToggle.textContent = 'Tema Escuro';
    }
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
  });

document.getElementById("input").addEventListener("input", function() {
    localStorage.setItem('text', this.value);
  });
 
  if (localStorage.getItem('text') !== null) {
    textarea.value = localStorage.getItem('text');
 }
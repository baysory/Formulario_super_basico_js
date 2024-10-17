const form = document.getElementById('form-number');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');

function validarNumeros() {
    return parseFloat(numberB.value) > parseFloat(numberA.value);
}

function converterParaRomanos(num) {
    const romanos = [
        { valor: 1000, simbolo: "M" },
        { valor: 900, simbolo: "CM" },
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" },
    ];

    let resultado = '';

    for (const { valor, simbolo } of romanos) {
        while (num >= valor) {
            resultado += simbolo;
            num -= valor;
        }
    }

    return resultado;
}

const mensagem = document.createElement('p');
mensagem.innerHTML = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const valorA = parseFloat(numberA.value);
    const valorB = parseFloat(numberB.value);
    
    if (validarNumeros()) {
        const romanoA = converterParaRomanos(valorA);
        const romanoB = converterParaRomanos(valorB);

        const quebraDeLinhaA = romanoB.length > 15 ? '<br>' : '';
        const quebraDeLinhaB = romanoB.length > 15 ? '<br>' : '';
        
        mensagem.innerHTML = `Tudo certo! Número A em romanos: ${romanoA},${quebraDeLinhaA},<br>Número B em romanos: ${romanoB},${quebraDeLinhaB}`;
        form.appendChild(mensagem);
        
        document.body.style.backgroundColor = 'green';
        
    } else {
        mensagem.textContent = 'Erro! O número B precisa ser maior que o número A';
        form.appendChild(mensagem);
        

        document.body.style.backgroundColor = 'red';
    }
    
    setTimeout(function() {
        document.body.style.backgroundColor = 'black';
    }, 500);
});

document.body.style.backgroundColor = 'black';

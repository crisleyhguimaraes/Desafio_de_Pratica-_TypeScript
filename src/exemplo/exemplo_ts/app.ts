let button = document.getElementById("button") as HTMLButtonElement;
let inputt = document.getElementById("inputt") as HTMLInputElement;
let input = document.getElementById("inputt") as HTMLInputElement;
let devePrintar = true;
let frase = "O valor é: ";

function adicionarNumero(
    numero1: number, numero2: number, 
    devePrintar: boolean, frase: string
) {
    let resultado = numero1 + numero2;

    if (devePrintar) {
        console.log(frase + resultado);
    }
    
    return numero1 + numero2;
}

button.addEventListener('click', () => {
    console.log(
        adicionarNumero(
            Number(input1.value), Number(input2.value), 
            devePrintar, frase
        )
    );
});
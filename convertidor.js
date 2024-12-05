function invertirPalabra() {
    const inputWord = document.getElementById("inputWord").value;
    const reversedWord = inputWord.split("").reverse().join("");
    document.getElementById("output").innerText = "Palabra invertida: " + reversedWord;
}

function dividirPorSilabas() {
    const inputWord = document.getElementById("inputWord").value;
    const syllabifiedWord = inputWord.replace(/([aeiouáéíóú])([^aeiouáéíóú])/gi, "$1-$2");
    document.getElementById("output").innerText = "Dividida en sílabas: " + syllabifiedWord;
}

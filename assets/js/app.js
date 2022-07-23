/* Funzionamento app */

// Devo identificare le zone che mi interessano
const fileInput = document.querySelector("input") // Ora prendo il mio input dell'url
downloadBtn = document.querySelector("button") // Prendo il mio button per il download
// e verificarle
console.log(fileInput);

// Devo scatenare un evento e una reazione al click del downloadBtn
downloadBtn.addEventListener("click", e => {
    e.preventDefault(); // button ha la proprietà intrinseca di submit quindi prevengo il refresh con preventDefault
    /* console.log("Sono il download button e stai premendo su di me"); */ // Verifico di aver cliccato il mio button (ma devo avere qualcosa nell'input)
    console.log(fileInput.value); // Verifico effettivamente il valore dell'input
})
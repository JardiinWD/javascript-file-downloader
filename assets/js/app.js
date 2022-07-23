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
    /* console.log(fileInput.value); */ // Verifico effettivamente il valore dell'input
    downloadBtn.innerText = "Download..." // Mentre scarica il value del testo dentro al button cambia
    fetchFile(fileInput.value) // Invoco la funzione
})

/**
 * Funzione per recupero del file e restituzione della risposta come BLOB
 * @param {object} url Il link dell'immagine/file
 */
function fetchFile(url) {
    // dà le proprietà di ciò che hai incollato nell'input
    fetch(url).then(response => response.blob()).then(file => {
        // URL.createObjectURL crea un URL dell'oggetto passato
        let tempUrl = URL.createObjectURL(file)
        console.log(tempUrl);
        let aTag = document.createElement("a") // Ancor tag aggiunto 
        /* Ora verifico se effettivamente il file non è un'immagine o un PDF  */
        aTag.href = tempUrl // al nostro ancor tag passo l'attributo href (come solito)
        aTag.download = url.replace(/^.*[\\\/]/, '') /* Questo dovrebbe funzionare ma dipende dal gestore del sito in cui scarichi se ti da la possibilità di farlo. E' il nome del file dinamico */
        /* aTag.download = "filename" */ // passo al mio ancor tag l'attributo download con il nome che ha in rete rimuovendo le estensioni 
        document.body.appendChild(aTag) // al corpo del documento viene appeso l'ancor Tag
        aTag.click(); // cliccando sull'Ancor tag scarico il mio documento
        aTag.remove(); // una volta scaricato il tag si rimuove dallo storico rimuovendo la possibilità di scaricare
        URL.revokeObjectURL(tempUrl) // Rimuove URL dell'oggetto passato
        downloadBtn.innerText = "Download File" // una volta finita la funzione si ripristina
    }).catch(() => {
        // l'errore catch si attiverà in caso di problemi con il download
        downloadBtn.innerText = "Download File" // lo stato del button non cambierà con "Downloading..."
        alert("Failed to download file!") // Uscirà un'alert
    })
}
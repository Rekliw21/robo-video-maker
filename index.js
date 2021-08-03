const readline = require('readline-sync')
function start(){
    const content = {}
    content.SearchTerm = askAndReturnSearchTerm()
    function askAndReturnSearchTerm() {
       // return 'TERM EXAMPLE'
       return readline.question('Try a Wikipedia search term: ') //Método do módulo pede input, como "string",
    }
    console.log(content)
}
start()
const readline = require('readline-sync')
function start(){
    const content = {}
    content.SearchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
       // return 'TERM EXAMPLE'
       return readline.question('Try a Wikipedia search term: ') //Método question do módulo pede input, como "string",
    }
    function askAndReturnPrefix() {
        const prefixes = ['(no prefix)', 'Who is', 'What is', 'The history of', 'Have you heard of', 'Do you know what is']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option:') //metodo kwyInSelect retorna chave como resultado array
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        //console.log(selectedPrefixIndex)
        //console.log(selectedPrefixText)
        return selectedPrefixText //retorna valor para ser útil e injeta em prefix
    }
    console.log(content)
}
start()


/* 

const Promise = require ('bluebird')
const readline = require ('readline-sync')
const textCreator = require ('/text-creator/index.js') //forming e tratamento de texto  
const imageCreator = require ('/image-creator/index.js') //Encontra imagens no Google Images e baixar
const videoCreator = require ('/video-creator/index.js') //Renderiza o vídeo final
const youtubeUploader = require ('/youtube-uploader/index.js') //upload do video e configuracao

const userInput = {}

Promise.resolve(userInput) //inputs solicitados ao usuário
.tap(askForSearchTerm)
.tap(askForPrefix)
.tap(startTextRobot) //passa para cada robo com contexto diferente
.tap(startImageRobot) //posso descomentar linhas para testar individualmente cada robo
.tap(startVideoRobot)
.tap(startYoutubeUploader) //acessa conta pessoal
.tap(finish)

function askForSearchTerm (userInput) {
    userInput.searchTerm = readline.question('Type a Wikipedia search term:') //Digite o termo a procurar na Wikipedia
}

function askForPrefix (userInput){
    const prefixes = ['(no prefix)', 'Who is', 'What is', 'The history of', 'Have you heard of', 'Do you know what is', 'CANCEL',]
    const prefixIndex = readline.keyInSelect(prefixes, 'Choose one option to prefix the Youtube title [1..6/0]:') // escolha qual o prefixo
    
    const prefix = prefixes[prefixIdex]

    if (prefixIndex !== 0){
        userInput.prefix = prefix
    }  
}

function startTextRobot (userInput) {
    return textCreator.start(userInput)
}

function askToContinue () {
    const shouldContinue = readline.keyInYNStrict('Is Everthing Ok?')

    if(!shouldContinue) {

    }
}

function startImageRobot (userInput) {
    return 
}

function startVideoRobot (userInput) {

} 

function startYoutubeUploader (userInput) {

} 

function finish (userInput) {

} 

/////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs')
const Promise = require('bluebird')
const algorithmia = require('algorithmia')
const sentenceBoundaryDetection =require('sbd')

const logHeader = '[text-robot] >'
const algorithmiaApiKey = require('./credentials.json').ApiKey
const { write } = require('node:fs')

function start (options) {
    const contentObject = {
        searchTerm:options.searchTerm,
        prefix:options.prefix,
        numberOfSentences:options.numberOfSentences || 7
    }

    console.log(`${logHeader}Creating content for "${ContentObject.userInput}"`)

    return Promise.resolve(contentObject)   //comparar a intensão x implementação (sei o que fazer mas não como fazer)
    .then(fetchContentFromWikipedia)    // pega conteudo do wikipedia
    .then(sanitizeContent)              // limpa conteudo
    .then(breakContentIntoSentences)    // quebra em sentenças
    .then(addSumary)                    // adiciona resumo
    .then(addTags)                      // adiciona tags
    .then(addYoutubeData)
    .then(writeJsToFile)
    .then(writeJSONToFile)
    .then(finish)

    function fetchContentFromWikipedia (contentObject) {
        console.log(`${logHeader} fetch content from Wikipedia`)

        return Promise.resolve(contentObject)
        .then(fetchFromAlgorithmia)
        .then(getResponse)
        .then(mapResponse)
    
        function fetchFromAlgorithmia (contentObject){
            return algorithmia.client(algorithmiaApiKey)
            .algo('algo://web/WikipediaParser/0.1.2')
            .pipe(contentObject.searchTerm)
        }
    }

} */
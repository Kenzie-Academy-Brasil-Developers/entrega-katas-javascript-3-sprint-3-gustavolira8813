const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const main = document.getElementsByTagName('main')[0]
const title = document.createElement('h1')
title.innerText = 'Katas JavaScript 03'
title.style.color ='darkred'
main.appendChild(title)



function showResults(x){
    let novo = document.createElement('div')
    novo.innerText = x
    main.appendChild(novo)
}

function kata1() {
    let result = ""
    for(let i = 1; i <=25; i++){
        result +=  i + ', '
        
    }
   showResults('katas 01: '+ result)
}
kata1()


function kata2() {
    let result = ''
    for(let i = 25; i >= 1; i--){
        result += i + ', '
    }
    showResults('Katas 02: ' + result)
}
kata2()

function kata3() {
    let result = ''
    for(let i = 1; i <= 25; i++){
        result += (i * -1) + ', '
    }
    showResults('Katas 03: ' + result)
}
kata3()

function kata4() {
    let result = ''
    for(let i = 25; i >= 1; i--){
        result += (i * -1) + ', '
    }
    showResults('Katas 04: ' + result)
}
kata4()

function kata5() {
    let result =''
    for(let i = -25; i <= 25; i++){
        if(i % 2 === -1 || i % 2 === 1){
            result += i + ', '
        }
    }
    showResults('Katas 05: ' + result)
}
kata5()

function kata6() {
    let result =''
    for(let i = 3; i <= 100; i+=3){
        result += i + ', '
    }
    showResults('Katas 06: ' + result)
}
kata6()

function kata7() {
    let result =''
    for(let i = 7; i <=100; i += 7){
        result += i + ', '
    }
    showResults('Katas 07: ' + result)
}
kata7()

function kata8() {
    let result = ''
    for(let i =100; i >=1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            result += i + ', '
        }
    }
    showResults('Katas 08: ' + result)
}
kata8()

function kata9() {
    let result = ''
    for(let i = 5; i <= 100; i = i + 10){
        result += i + ', '
    }
    showResults('Katas 09: ' + result)
}
kata9()

function kata10() {
    let result = ''
    for(let i = 0; i < sampleArray.length; i++){
        result +=  sampleArray[i] + ', '
    }
    showResults('Katas 10: ' + result)
}
kata10()

function kata11() {
    let result = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            result +=  sampleArray[i] + ', '
        }
    }
    showResults('Katas 11: ' + result)
}
kata11()

function kata12() {
    let result = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 1){
            result += sampleArray[i] + ', '
        }
    }
    showResults('Katas 12: ' + result)
}
kata12()

function kata13() {
    let result = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
        result += sampleArray[i] + ', '
        }
    }
    showResults('Katas 13: ' + result)
}
kata13()

function kata14() {
    let result = ''
    for(let i = 0; i < sampleArray.length; i++){
        result +=  sampleArray[i] * sampleArray[i] + ', '
    }
    
    showResults('Katas 14: ' + result)
}
kata14()

function kata15() {
    let soma = 0
    for(let i = 1; i <= 20; i++){
        soma += i
    }
    showResults('Katas 15: ' + soma)
}
kata15()

function kata16() {
    let soma = 0
    for(let i = 0; i < sampleArray.length; i++){
        soma += sampleArray[i]
    }
    showResults('katas 16: ' + soma)
}
kata16()
    
function kata17() {
    let menor = 1000
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < menor){
            menor = sampleArray[i]
        }
    }
    showResults('Katas 17: ' + menor)
}
kata17()

function kata18() {
    let maior = 0 
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > maior){
            maior =  sampleArray[i]
        }
    }
    showResults('Katas 18: ' + maior)
}
kata18()
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

    let newSec = document.createElement('section')
    main.appendChild(newSec)
    let sec = document.getElementsByTagName('section')[0]
    
 for(let i = 0; i < 5; i++){
     let divBlocos = document.createElement('div')
     divBlocos.className = 'blocos'
     
     sec.appendChild(divBlocos)
 }

 
function kataBonus1() {
        let titulo = document.createElement("h3")
        titulo.innerHTML = "Kata Bonus 01 : 20 retângulos cinzas"
        titulo.style.textAlign="center"
        titulo.style.background="linear-gradient(to right, grey, red)"
        titulo.style.color="white"
        document.getElementsByClassName('blocos')[0].appendChild(titulo)
    for(let i = 1; i <= 20; i++){
       let bloco = document.createElement('div')
       bloco.className = 'box-iten'
       bloco.style.width ='100px'
       bloco.style.height = '20px'
       bloco.style.background = 'grey'
       bloco.style.margin = '2px'
        let destino = document.getElementsByClassName('blocos')[0]
        destino.appendChild(bloco)
    }
    
}
kataBonus1()

function kataBonus2() {
//     let divBloco = document.createElement('div')
//     divBloco.className = 'box'
//     main.appendChild(divBloco)
//     divBloco.style.height ="105px"
//     divBloco.style.display = 'flex'
//     divBloco.style.flexFlow = "column wrap"
//     divBloco.style.justifyContent ="center"
//     divBloco.style.alignItems ="center"
let titulo = document.createElement("h3")
titulo.innerHTML = "Kata Bonus 02 : 20 retângulos cinzas com larguras gradualmente maior em 5px cada"
titulo.style.textAlign="center"
titulo.style.background="linear-gradient(to right, grey, red)"
titulo.style.color="white"
document.getElementsByClassName('blocos')[1].appendChild(titulo)
    for(let i = 1; i <= 20; i++){
       let bloco = document.createElement('div')
       bloco.className = 'box-iten'
       bloco.style.width = 100 + (i*5) + 'px'
       bloco.style.height = '20px'
       bloco.style.background = 'grey'
       bloco.style.margin = '2px'
        let destino = document.getElementsByClassName('blocos')[1]
        destino.appendChild(bloco)
    }

}
kataBonus2()

function kataBonus3() {
    let titulo = document.createElement("h3")
    titulo.innerHTML = "Kata Bonus 03 : 20 retângulos com largura em pixel iguais ao sampleArray"
    titulo.style.textAlign="center"
    titulo.style.background="linear-gradient(to right, grey, red)"
    titulo.style.color="white"
    document.getElementsByClassName('blocos')[2].appendChild(titulo)
    
    for(let i = 1; i <= 20; i++){
        let bloco = document.createElement('div')
        bloco.className = 'box-iten'
        bloco.style.width = sampleArray[i-1] + 'px'
        bloco.style.height = '20px'
        bloco.style.background = 'grey'
        bloco.style.margin = '2px'
         let destino = document.getElementsByClassName('blocos')[2]
         destino.appendChild(bloco)
     }
 
    // implemente o código do kata bonus 3 aqui
}
kataBonus3()

function kataBonus4() {
    let titulo = document.createElement("h3")
    titulo.innerHTML = "Kata Bonus 04 : 20 retângulos com cores alternadas vermelho/cinza"
    titulo.style.textAlign="center"
    titulo.style.background="linear-gradient(to right, grey, red)"
    titulo.style.color="white"
    document.getElementsByClassName('blocos')[3].appendChild(titulo)
    for(let i = 1; i <= 20; i++){
        let bloco = document.createElement('div')
        bloco.className = 'box-iten'
        bloco.style.width = sampleArray[i-1] + 'px'
        bloco.style.height = '20px'
        bloco.style.margin = '2px'
        if(i % 2 === 1){
            bloco.style.background = "red"
        }else{
        bloco.style.background = 'grey'
        }
         let destino = document.getElementsByClassName('blocos')[3]
         destino.appendChild(bloco)
     }
    

    // implemente o código do kata bonus 4 aqui
}
kataBonus4()

function kataBonus5() {
    let titulo = document.createElement("h3")
    titulo.innerHTML = "Kata Bonus 05 : 20 retângulos com larguras par agora são vermelhos"
    titulo.style.textAlign="center"
    titulo.style.background="linear-gradient(to right, grey, red)"
    titulo.style.color="white"
    document.getElementsByClassName('blocos')[4].appendChild(titulo)
    for(let i = 1; i <= 20; i++){
        let bloco = document.createElement('div')
        bloco.className = 'box-iten'
        bloco.style.width = sampleArray[i-1] + 'px'
        bloco.style.height = '20px'
        bloco.style.margin = '2px'
        if(sampleArray[i] % 2 === 0){
            bloco.style.background = "red"
        }else{
        bloco.style.background = 'grey'
        }
         let destino = document.getElementsByClassName('blocos')[4]
         destino.appendChild(bloco)
     }
    

}
kataBonus5()




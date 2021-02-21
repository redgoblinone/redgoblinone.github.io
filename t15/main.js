function sayHi(){
    alert('привіт')
}

function greeting(name){
    if( typeof name=='string'){
        alert(`привіт ${name}!`)
    }else{
        alert ('Невірне імя!')
    }
}

function showGreeting(name){
    const test = document.getElementById('test')

    if( typeof name=='string' && name.length > 2){
        test.innerText =`привіт ${name}!`
    } else{
        test.innerText =`невірне імя`
    }
}

showGreeting("Петро")

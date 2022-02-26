function trim(){
    let name = '  Srikant  ';
    console.log('trimmed name is:', name.trim())
}

function changeToLowerCase(){
    let name = 'SrikaNr KumaR'
    console.log('Name in lowercase is:', name.toLocaleLowerCase())
    }

    function changeToUpperCase(){
        let name = 'srikant Kumar'
        console.log('Name in uppercae is:', name.toLocaleUpperCase())

    }

    module.exports.trim = trim
    module.exports.changeToLowerCase = changeToLowerCase
    module.exports.changeToUpperCase = changeToUpperCase
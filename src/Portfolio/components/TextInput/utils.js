
export function validateText(value){
    if(value.length===0){
        return null;
    }
    let safeRegex = /[!$%^&*_+\-=\[\]{};\\|<>\/]+/
    let test= value.length > 0 && !safeRegex.test(value)
    return test
}

export function validatePhone(value){
    let phoneRegex =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return phoneRegex.test(value)
}
export function validateEmail(value){
    let textTest= validateText(value) ;
    if(!textTest){
        return textTest;
    }
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(value)
}
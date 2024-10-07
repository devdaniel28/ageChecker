function chekerAge() {
    const yearOfBirth = document.getElementById('yearofbirth')
    const monthOfBirth = document.getElementById('monthofbirth')
    const Result = document.getElementById('result')

    const Data = new Date()
    const currentYear = Data.getFullYear()
    const currentMonth = Data.getMonth()

    
    if (yearOfBirth.value <= 0 || monthOfBirth.value <= 0 || yearOfBirth.value > currentYear || monthOfBirth.value > 12) {
        Result.value = "Data invalida ou vazia"
    } else {

        let Age = currentYear - Number(yearOfBirth.value)
        let monthsOfLife = currentMonth - Number(monthOfBirth.value)
        
        
        if (monthOfBirth.value > currentMonth) {
            Age--
            monthsOfLife = currentMonth + 12 - Number(monthOfBirth.value)
        } 
        
        Result.value = `Você tem ${Age} anos é ${monthsOfLife} meses de idade!`
        
        if (yearOfBirth.value == currentYear && monthOfBirth.value > currentMonth) {
            Result.value = "Data invalida"
        }

    }
}
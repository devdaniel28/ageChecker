function chekerAge() {
    const dayOfBirth = document.getElementById('dayofbirth')
    const monthOfBirth = document.getElementById('monthofbirth')
    const yearOfBirth = document.getElementById('yearofbirth')
    const Result = document.getElementById('result')

    const Data = new Date()
    const currentYear = Data.getFullYear()
    const currentMonth = Data.getMonth()
    const currentDay = Data.getDate()

    if (yearOfBirth.value == 0 || monthOfBirth.value == 0 || dayOfBirth.value == 0) {
        Result.value = "Falta dados, por favor prencher tudo"
    } else {
        const Age = currentYear - Number(yearOfBirth.value)
        const daysWithLife = Age * 365 + currentDay // Corrijir essa variavel mais tarde
    }
}

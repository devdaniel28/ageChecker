function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();
    let dias = hoje.getDate() - nascimento.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return {
        anos: anos,
        meses: meses,
        dias: dias
    };
}

// Exemplo de uso
const dataNascimento = '2008-03-28';
const idade = calcularIdade(dataNascimento);
console.log(`Idade: ${idade.anos} anos, ${idade.meses} meses, ${idade.dias} dias`);


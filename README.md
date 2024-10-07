# Verificador de Idade

**Link** (Vazio) 

---

# Checador de Idade

Este projeto é uma função em JavaScript que calcula a idade de uma pessoa com base no ano e mês de nascimento inseridos em campos de formulário HTML. Ele considera o ano e mês atuais para calcular a idade em anos e meses. Se os dados de entrada forem inválidos, o usuário será notificado com uma mensagem de erro.

## Funcionalidades

- Calcula a idade em anos e meses com base no ano e mês de nascimento fornecidos.
- Verifica se a data fornecida é válida (não aceita anos futuros ou meses maiores que dezembro).
- Exibe uma mensagem de erro caso os campos de ano ou mês de nascimento sejam inválidos.

## Estrutura do Código

A função `chekerAge` é responsável por:

1. Obter os valores inseridos nos campos `yearOfBirth` (ano de nascimento) e `monthOfBirth` (mês de nascimento).
2. Obter o ano e o mês atuais usando o objeto `Date` do JavaScript.
3. Verificar se o ano ou mês de nascimento é inválido (ano maior que o atual, mês maior que 12, etc.).
4. Calcular a idade em anos e meses. Se o mês de nascimento for maior que o mês atual, ajusta a idade diminuindo um ano e recalcula os meses.
5. Exibir o resultado no campo `Result`.

## Como Usar

1. Insira o ano de nascimento no campo `yearOfBirth` e o mês de nascimento no campo `monthOfBirth`.
2. A função será executada e calculará sua idade.
3. O resultado será exibido no campo de saída `Result`.

### Exemplo de Uso:

```html
<input type="number" id="yearofbirth">
<input type="number" id="monthofbirth">
<textarea id="result" ></textarea>
```


### Código JavaScript:

```javascript
function chekerAge() {
    const yearOfBirth = document.getElementById('yearofbirth');
    const monthOfBirth = document.getElementById('monthofbirth');
    const Result = document.getElementById('result');

    const Data = new Date();
    const currentYear = Data.getFullYear();
    const currentMonth = Data.getMonth();

    if (yearOfBirth.value <= 0 || monthOfBirth.value <= 0 || yearOfBirth.value > currentYear || monthOfBirth.value > 12) {
        Result.value = "Data invalida ou vazia";
    } else {
        let Age = currentYear - Number(yearOfBirth.value);
        let monthsOfLife = currentMonth - Number(monthOfBirth.value);

        if (monthOfBirth.value > currentMonth) {
            Age--;
            monthsOfLife = currentMonth + 12 - Number(monthOfBirth.value);
        }

        Result.value = `Você tem ${Age} anos e ${monthsOfLife} meses de idade!`;

        if (yearOfBirth.value == currentYear && monthOfBirth.value > currentMonth) {
            Result.value = "Data invalida";
        }
    }
}
```

## Considerações

- O campo `Result` está configurado para ser somente leitura, pois ele exibe a idade calculada.
- A função verifica se o ano de nascimento é maior que o ano atual ou se o mês de nascimento é maior que 12(dezembro) para evitar erros de entrada.

## Requisitos

- Um navegador moderno com suporte a JavaScript.

---


## Licença

Este projeto está licenciado sob a **GNU General Public License (GPL) v3.0**. Isso significa que você tem a liberdade de:

- **Usar**: Você pode usar o software para qualquer finalidade.
- **Estudar e modificar**: Você pode estudar como o software funciona e adaptá-lo às suas necessidades.
- **Distribuir**: Você pode redistribuir cópias do software, desde que mantenha a mesma licença.
- **Distribuir modificações**: Se modificar e distribuir o software, você deve disponibilizar o código-fonte das suas modificações sob a mesma licença GPL.

### Restrições da Licença

A GPL é uma licença copyleft, o que significa que:

1. Se você modificar o código e redistribuir, precisa manter a mesma licença GPL.
2. Você deve garantir que os destinatários também tenham acesso ao código-fonte.
3. O código licenciado sob GPL não pode ser incorporado em software proprietário sem liberar o código sob GPL.

### Resumo

Ao usar este software, você concorda com os termos da **GNU General Public License v3.0**. Isso assegura que o software e todas as suas modificações permaneçam livres e abertos para todos os usuários. Para mais detalhes, consulte o texto completo da licença no arquivo [LICENSSE](LICENSE) ou visite [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---



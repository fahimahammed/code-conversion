function codeConversion(){
    const inputValue = document.getElementById('input-value').value;
    const inputValueNumber = parseInt (inputValue);

// Code conversion
dec_to_bho = function (n, base) {

    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }
    switch (base) {
        case 'B':
            return parseInt(n, 10).toString(2);
            break;
        case 'H':
            return parseInt(n, 10).toString(16);
            break;
        case 'O':
            return parseInt(n, 10).toString(8);
            break;
        default:
            return ("Wrong input.........");
    }
}

document.getElementById('show-result').innerHTML = `
    <h4>Binary: ( ${dec_to_bho(inputValueNumber, 'B')} ) <sub>2</sub> </h4>
    <h4>Octal : ( ${dec_to_bho(inputValueNumber, 'O')} ) <sub>8</sub> </h4>
    <h4>Hexadicimal: ( ${dec_to_bho(inputValueNumber, 'H')} ) <sub>16</sub> </h4>
`;

}
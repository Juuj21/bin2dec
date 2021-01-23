function convert() {
    var binary = document.querySelector('#binary').value
    var decimal = document.querySelector('#decimal')

    for (let num = 0; num < binary.length; num++) {
        if (parseInt(binary[num]) != 0 && parseInt(binary[num]) != 1) {
            alert('Please input only binary digits');
            return false;
        }
    }

    decimal.innerHTML = parseInt(binary, 2)
}

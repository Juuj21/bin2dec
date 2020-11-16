function convert()
{
    let text = document.forms['form']['binary'].value;
    if (text == "")
    {
        alert('Please input a value');
        return false;
    }
    
    for (let i = 0; i < text.length; i++)
    {
        if (parseInt(text[i]) != 0 && parseInt(text[i]) != 1)
        {
            alert('Please input only binary digits');
            return false;
        }
    }

    if (text.length > 8)
    {
        alert('Your limit is 8 digits')
        return false;
    }

    let decimal = parseInt(text, 2);

    document.querySelector('#decText').innerHTML = decimal;
}

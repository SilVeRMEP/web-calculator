function clearDisplay()
{
    document.getElementById("display").value = "";
}

function appendValue(value)
{
    document.getElementById("display").value += value;
}

function calculate()
{
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = 'Error';
    }
}

function calculateFunction(func) {
    try {
        const value = parseFloat(document.getElementById("display").value);
        let result;

        switch (func) {
            case 'ln':
                result = Math.log(value);
                break;
            case 'exp':
                result = Math.exp(value);
                break;
            case 'sin':
                result = Math.sin(value);
                break;
            case 'cos':
                result = Math.cos(value);
                break;
            case 'tan':
                result = Math.tan(value);
                break;
            default:
                throw new Error('Function not supported');
        }

        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = 'Error';
    }
}


function calcDecimal() {

    let decimalNumber = parseInt(document.getElementById("number1").value);

    let binaryNumber = decimalNumber.toString(2);
    document.getElementById("binaryResult1").innerHTML = "Binary Number: " + binaryNumber;

    let octoNumber = decimalNumber.toString(8);
    document.getElementById("octoResult1").innerHTML = "Octal Number: " + octoNumber;

    let hexNumber = decimalNumber.toString(16);
    document.getElementById("hexResult1").innerHTML = "Hexademical Number: " + hexNumber;

}

function calcBinary() {

    let binaryNumber = parseInt(document.getElementById("number2").value);

    let decimalNumber = parseInt(binaryNumber, 2);
    document.getElementById("decimalResult").innerHTML = "Decimal Number: " + decimalNumber;

    let octoNumber = parseInt(binaryNumber, 2).toString(8);
    document.getElementById("octoResult2").innerHTML = "Octal Number: " + octoNumber;

    let hexNumber = parseInt(binaryNumber, 2).toString(16);
    document.getElementById("hexResult2").innerHTML = "Hexademical Number: " + hexNumber;
}

function calcOctal() {

    let octalNumber = parseInt(document.getElementById("number3").value);

    let binaryNumber = parseInt(octalNumber, 8).toString(2);
    document.getElementById("binaryResult2").innerHTML = "Binary Number: " + binaryNumber;

    let decimalNumber = parseInt(octalNumber, 8).toString(10);
    document.getElementById("decimalResult2").innerHTML = "Decimal Number: " + decimalNumber;

    let hexNumber = parseInt(octalNumber, 8).toString(16);
    document.getElementById("hexResult3").innerHTML = "Hexademical Number: " + hexNumber;
}

function calcHex() {

    let hexNumber = parseInt(document.getElementById("number4").value);

    let binaryNumber = parseInt(hexNumber, 16).toString(2);
    document.getElementById("binaryResult3").innerHTML = "Binary Number: " + binaryNumber;

    let octalNumber = parseInt(hexNumber, 16).toString(8);
    document.getElementById("octoResult3").innerHTML = " Octal Number: " + octalNumber ;

    let decimalNumber = parseInt(hexNumber, 16).toString(10);
    document.getElementById("decimalResult3").innerHTML = "Decimal Number: " + decimalNumber;


}
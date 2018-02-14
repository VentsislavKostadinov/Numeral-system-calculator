
$(document).ready(function () {



function calcDecimal() {


        let decimalNumber = parseInt($("#number1").value);

        let binaryNumber = decimalNumber.toString(2);
        $("#binaryResult1").html(" Binary Number: " + binaryNumber);

        let octoNumber = decimalNumber.toString(8);
        $("#octoResult1").html("Octal Number: " + octoNumber);

        let hexNumber = decimalNumber.toString(16);
        $("#hexResult1").html("Hexademical Number" + hexNumber);

}


});
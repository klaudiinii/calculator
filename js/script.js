
const oblicz = (dzialanie) => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if (a == "" || b == "") {
        document.getElementById("wynik").innerHTML = "Proszę wypełnić oba pola";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (dzialanie) {
            case 1:
                document.getElementById("wynik").innerHTML = "wynik działania wynosi: " + (a + b);
                break;

            case 2:
                document.getElementById("wynik").innerHTML = "wynik działania wynosi: " + (a - b);
                break;

            case 3:
                document.getElementById("wynik").innerHTML = "wynik działania wynosi: " + (a * b);
                break;

            case 4:

                if (a == "" || b == "") {
                    document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero";
                } 
                else 
                {
                    document.getElementById("wynik").innerHTML = "wynik działania wynosi: " + (a / b);
                    break;
                }
        }
    }
};
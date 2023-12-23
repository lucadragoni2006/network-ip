function addToCookies(ip) {
    document.cookie = "ip" + document.cookie.split("; ").length + "=" + ip + "; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/"
}

/* Nella seguente funzione viene effettuato un controllo su ciascun ottetto delle subnet e degli IP */

function errorCheck(arrayIp, arraySubnet) {
    if(arraySubnet[0] < 255)
        return true;
    if(arraySubnet[3] === 255)
        return true;
    for(let i = 0; i < arrayIp.length; i++) {
        if(isNaN(arrayIp[i]) || isNaN(arraySubnet[i]) || arrayIp[i] < 0 || arrayIp[i] > 255 || arraySubnet < 0 || arraySubnet[i] > 255) {
            return true;
        }
        if((i !== 0) && (arraySubnet[i] !== 0 && arraySubnet[i - 1] < 255)) {
            return true;
        }
    }
    return false;    
}

/* la funzione esegue la messa in end bit a bit, calcolando l'indirizzo di rete */

function setValues(networkIp, arrayIp, arraySubnet) {
    for(let i = 0; i < arrayIp.length; i++)
        networkIp[i] = arrayIp[i] & arraySubnet[i];
}

$(document).ready(function() {
    /* Il seguente codice controlla, una volta caricata l'intera pagina, se tra i cookies è presente il cookie contenente l'username, e di conseguenza reindirizza opportunamente l'utente alla pagina di login  */

    let cookies = document.cookie.split("; ");
    let flag = true;
    for (let i = 0; i < cookies.length; i++) {
        if(cookies[i] == "username=luca")
            flag = false;
    }
    if(flag)
        window.location.href = "login.html"

    /* Il seguente codice permette di calcolare l'indirizzo di rete. Prima salva i valori dentro due array, poi se i valori inseriti sono accettabili, effettua di conseguenza il calcolo. */

    $("#btn").click(function() {
        $("h4").remove(); // vengono rimossi eventuali messaggi di errore precedenti
        $("#network-id").remove(); // vengono rimossi eventuali ip calcolati precedentemente
        let arrayIp = $("#ip").children();
        let arraySubnet = $("#subnet").children();
        let networkIp = [];
        for(let i = 0; i < arrayIp.length; i++) {
            arrayIp[i] = parseInt(arrayIp[i].value);
            arraySubnet[i] = parseInt(arraySubnet[i].value);
        }
        if(!errorCheck(arrayIp, arraySubnet)) {
            setValues(networkIp, arrayIp, arraySubnet);
            let networkH3 = $("<h3></h3>");
            networkH3.attr("id", "network-id");
            networkH3.css("padding", "10px 20px");
            $("#btn").before(networkH3);
            networkH3.html(networkIp.join("."));
            addToCookies(networkH3.html());
        } else {
            let errorMessage = $("<h4>Invalid IP or Subnet. Retry.</h4>");
            errorMessage.css("color", "red");
            errorMessage.css("margin-bottom", "20px");
            $("#btn").before(errorMessage);
        }
    })

    /* La funzione reindirizza all'utente alla pagina principale, se si clicca sul pulsante della barra di navigazione */

    $("#history").click(function() {
        window.location.href = "history.html";
    })

    /* La funzione seguente permette di effettuare il logout ed elimina il cookie contenente l'username */

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });
})
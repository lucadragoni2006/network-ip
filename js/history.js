/* la funzione permette di "spostare" indietro i cookie rimasti dopo l'eliminazione, in modo che nessun cookie potrà essere sovrascritto in futuro, quando si aggiunge un altro elemento alla cronologia */

function shiftCookies() {
    let cookies = document.cookie.split("; ");
    let cookieIndex = 1;
    for(let i = 0; i < cookies.length; i++) {
        if(cookies[i] !== "username=luca") {
            document.cookie = cookies[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            let value = cookies[i].split("=")[1];
            document.cookie = "ip" + cookieIndex + "=" + value + "; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";
            cookieIndex++;
        }
    }
}

$(document).ready(function() {
    let cookies = document.cookie.split("; ");
    let flag = true;
    for (let i = 0; i < cookies.length; i++) {
        if(cookies[i] == "username=luca")
            flag = false;
    }
    if(flag)
        window.location.href = "login.html"

    for(let i = 0; i < cookies.length; i++) {
        if(cookies[i] != "username=luca") {
            let h3 = $("<h3></h3>");
            h3.html(cookies[i].replace("=", ": "));
            h3.css("padding", "10px 20px");
            $("#container").append(h3);
        }
    }

    /* La funzione reindirizza all'utente alla pagina principale, se si clicca sul pulsante della barra appplicazioni */

    $("#ip").click(function() { 
        window.location.href = "netid.html";
    });

    /* La funzione permette di cancellare i cookies contenenti degli ip, impostando la data di scadenza su una data precedente */
    
    $("#clear").click(function() { 
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            if(cookies[i] != "username=luca")
                document.cookie = cookies[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        location.reload();
    })
    
    /* La funzione seguente permette di effettuare il logout ed elimina il cookie contenente l'username */

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });

    /* la funzione seguente permette di stilizzare in modo opportuno ciascun elemento della cronologia ed aggiunge una classe "remove" ad ogni elemento selezionato. Permette anche di deselezionare ciascun elemento. */

    $("h3").click(function() {
        if(!$(this).hasClass("remove")) {
            $(this).addClass("remove");
            $(this).css("padding", "10px 10px");
            $(this).css("outline", "4px solid #0093E9");
        } else {
            $(this).removeClass("remove");
            $(this).css("padding", "10px 20px");
            $(this).css("outline", "none");
        }
    });

    /* la funzione seguente permette di eliminare i cookies contenenti gli indirizzi IP, eliminando di conseguenza anche gli elementi contenenti gli IP */

    $("#delete").click(function() {
        $(".remove").each(function(index, element) {
            let cookie = $(element).html();
            document.cookie = cookie.replace(": ", "=") + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        });
        shiftCookies();
        location.reload();
    });
});
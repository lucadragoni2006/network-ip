$(document).ready(function() {
    /* Il seguente codice controlla, una volta caricata l'intera pagina, se tra i cookies è presente il cookie contenente l'username, e di conseguenza reindirizza opportunamente l'utente alla pagina per calcolare l'indirizzo di rete  */
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        if(cookies[i] == "username=luca")
            window.location.href = "netid.html";
    }

    /* Dopo aver cliccato sul pulsante di login, viene effettuato un controllo delle credenziali. Se sono corrette l'utente viene reindirizzato, altrimenti viene mostrato il messaggio di errore */

    $("#button").click(function() {
        let username = $("#username");
        let password = $("#password");
        if(username.val() === "luca" && password.val() === "1234") {
            document.cookie = "username=luca; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"
            window.location.href = "netid.html";
        }
        else {
            $("p").remove();
            const paragraph = $($("<p>Invalid username or password. Retry.</p>"));
            username.after(paragraph);
        }
    });

    /* al click sul campo di testo relativo alla password o all'username, viene eliminato il messaggio di errore */

    $(".input").click(function() {
        $("p").remove();
    });

    /* La funzione permette di rendere visibile o meno la password, cambiando opportunamente immagine */

    $("#eye").click(function() {
        let passwordField = $("#password");
        if(passwordField.attr("type") === "password") {
            passwordField.attr("type", "username");
            $("img").attr("src", "../images/eye-opened.png");
        }
        else {
            passwordField.attr("type", "password");
            $("img").attr("src", "../images/eye-closed.png");
        }
    });
});
$(document).ready(function() {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        if(cookies[i] == "username=luca")
            window.location.href = "netid.html";
    }

    $("#button").click(function() {
        let username = $("#username").val();
        let password = $("#password").val();
        if(username === "luca" && password === "1234") {
            document.cookie = "username=luca; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"
            window.location.href = "netid.html";
        }
    });
});
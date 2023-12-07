if(document.cookie)
    window.location.href = "netid.html"

$(document).ready(function() {
    $("#button").click(function() {
        let username = $("#username").val();
        let password = $("#password").val();
        if(username === "luca" && password === "1234") {
            document.cookie = "username=luca; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"
            window.location.href = "netid.html";
        }
    });
});
$(document).ready(function() {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        if(cookies[i] == "username=luca")
            window.location.href = "netid.html";
    }

    $("#button").click(function() {
        let username = $("#username");
        let password = $("#password");
        if(username.val() === "luca" && password.val() === "1234") {
            document.cookie = "username=luca; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"
            window.location.href = "netid.html";
        }
        else {
            $("p").remove();
            const paragraph1 = $($("<p>Invalid username or password. Retry.</p>"));
            const paragraph2 = $($("<p>Invalid username or password. Retry.</p>"));
            username.after(paragraph1);
            password.after(paragraph2);
        }
    });
});
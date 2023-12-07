$(document).ready(function() {
    let cookies = document.cookie.split("; ");
    for(let i = 0; i < cookies.length; i++) {
        console.log(cookies[i]);
        if(cookies[i] != "username=luca") {
            let h3 = $("<h3></h3>");
            let ip = cookies[i].split('=');
            h3.html("ip: " + ip[1]);
            h3.css("padding", "10px 20px");
            $("#container").append(h3);
        }
    }

    $("#ip").click(function() { 
        window.location.href = "netid.html";
    });

    $("#clear").click(function() { 
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            if(cookies[i] != "username=luca")
                document.cookie = cookies[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        let elementsToRemove = $("#container").children().slice(1);
        elementsToRemove.remove();
        location.reload();
    });

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });
});
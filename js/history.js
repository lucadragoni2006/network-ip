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

    $("#ip").click(function() { 
        window.location.href = "netid.html";
    });

    $("#clear").click(function() { 
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            if(cookies[i] != "username=luca")
                document.cookie = cookies[i] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        location.reload();
    });

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });

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

    $("#delete").click(function() {
        $(".remove").each(function(index, element) {
            let cookie = $(element).html();
            document.cookie = cookie.replace(": ", "=") + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        });
        location.reload();
    });
});
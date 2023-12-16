function deleteElement(index) {
    let elementsToRemove = $("#container").children();
    console.log(elementsToRemove[index]);
    if(!$(elementsToRemove[index]).hasClass("btn"))
        elementsToRemove[index].remove();
    location.reload();
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
        let elementsToRemove = $("#container").children().slice(3);
        elementsToRemove.remove();
        location.reload();
    });

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });

    $("#del-first").click(function() {
        let cookies = document.cookie.split("; ");
        if(cookies[0] != "username=luca")
            document.cookie = cookies[0] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        else
            document.cookie = cookies[1] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        deleteElement(3);
    });

    $("#del-last").click(function() {
        let cookies = document.cookie.split("; ");
        let length = cookies.length;
        if(cookies[length - 1] != "username=luca")
            document.cookie = cookies[length - 1] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        else
            document.cookie = cookies[length - 2] + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        length = $("#container").children().length;
        deleteElement(length - 1);
    });
});
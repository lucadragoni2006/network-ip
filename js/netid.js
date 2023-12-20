function addToCookies(ip) {
    document.cookie = "ip" + document.cookie.split("; ").length + "=" + ip + "; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/"
}

function errorCheck(arrayIp, arraySubnet) {
    if(arraySubnet[0] < 255)
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

function setValues(networkIp, arrayIp, arraySubnet) {
    for(let i = 0; i < arrayIp.length; i++)
        networkIp[i] = arrayIp[i] & arraySubnet[i];
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

    $("#btn").click(function() {
        $("h4").remove();
        $("#network-id").remove();
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
    
    $("#history").click(function() {
        window.location.href = "history.html";
    })

    $("#logout").click(function() { 
        document.cookie = "username=luca; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });
})
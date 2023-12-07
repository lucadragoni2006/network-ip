function addToCookies(ip) {
    document.cookie = "ip" + document.cookie.split("; ").length + "=" + ip + "; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/"
    console.log(document.cookie);
}

$(document).ready(function() {

    $("#btn").click(function() {
        $("#network-id").remove();
        let arrayIp = $("#ip").children();
        let arraySubnet = $("#subnet").children();
        let networkIp = [];
        let flag = true;
        for(let i = 0; i < arrayIp.length; i++) {
            arrayIp[i] = arrayIp[i].value;
            arraySubnet[i] = arraySubnet[i].value;
        }
        for(let i = 0; i < arrayIp.length; i++) {
            if(arrayIp[i] != "" && arraySubnet[i] != "")
                networkIp[i] = arrayIp[i] & arraySubnet[i];
            else {
                flag = false;
                break;
            }
        }
        if(flag) {
            let networkH3 = $("<h3></h3>");
            networkH3.attr("id", "network-id");
            networkH3.css("padding", "10px 20px");
            $("#btn").before(networkH3);
            networkH3.html(networkIp.join("."));
            addToCookies(networkH3.html());
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
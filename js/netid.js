$(document).ready(function() {
    $("#btn").click(function() {
        let arrayIp = $("#ip").children();
        let arraySubnet = $("#subnet").children();
        let networkIp = [];
        let flag = true;
        for(let i = 0; i < arrayIp.length; i++) {
            arrayIp[i] = arrayIp[i].value;
            arraySubnet[i] = arraySubnet[i].value;
        }
        for(let i = 0; i < arrayIp.length; i++) {
            if(arrayIp[i] != null && arraySubnet[i] != null)
                networkIp[i] = arrayIp[i] & arraySubnet[i];
            else {
                flag = false;
                break;
            }
        }
        if(flag) {
            let network = $("#network-ip");
            network.html(networkIp.join("."));
            network.css("padding", "10px 20px");
        }
    })
})
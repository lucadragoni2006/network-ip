if(document.cookie)
            window.location.href = "netid.html"

        $(document).ready(function() {
            $("#button").click(function() {
                let username = $("#username").val();
                let password = $("#password").val();
                if(username === "luca" && password === "1234") {
                    document.cookie = "username=luca; path:/;"
                    window.location.href = "netid.html";
                }
            });
        });
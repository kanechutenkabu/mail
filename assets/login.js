let sendok = false;
function loginfunc() {
        let namein = document.getElementById("loginname").value;
        let passin = document.getElementById("loginpass").value;

        let nameisok = noslashusername.indexOf(namein);

        if (nameisok >= 0) {
                if (passin == noslashuserpass[nameisok]) {
                        user = namein;
                        document.cookie = 'usernamelogined=' + user + "; max-age=31536000";
                        
                        
                        document.getElementById("loginwho").innerText = "ログイン中：" + user;
                        document.getElementById("loginname").value = "";
                        document.getElementById("loginpass").value = "";
                        document.getElementById("msgtable").innerHTML = "";
                        reloadok = false;
                        loaddata();

                } else {
                        document.getElementById("loginwho").innerText = "ログイン失敗";
                        
                };
        } else {
                document.getElementById("loginwho").innerText = "ログイン失敗";
                
        };
};

document.getElementById("logininput").addEventListener("click", () => {
        loginfunc();
});


document.getElementById("logoutinput").addEventListener("click", () => {
        user = "";
        document.cookie = 'usernamelogined='
        document.getElementById("loginwho").innerText = "未ログイン";
        
        document.getElementById("loginname").value = "";
        document.getElementById("loginpass").value = "";
        document.getElementById("msgtable").innerHTML = "";
        loaddata();
});

document.getElementById("loginname").addEventListener("keydown", function(event) {
        
        if (event.key === "Enter" && sendok) {
                loginfunc();
        };
});

document.getElementById("loginpass").addEventListener("keydown", function(event) {
        if (event.key === "Enter" && sendok) {
                loginfunc();
        };
});

document.getElementById("loginbutton").addEventListener("click", function(e) {
        e.stopPropagation();
        sendok = true;
        document.getElementById("loginmenu").style.display = "inline-block";
});
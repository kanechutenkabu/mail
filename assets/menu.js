let visible = false;
document.getElementById("hammenu").addEventListener("click", () => {
        viewtoggle();
});
document.getElementById("menuback").addEventListener("click", () => {
        viewclose();
});
document.getElementById("menuframe").addEventListener("click", function(e) {
        e.stopPropagation();
});

function viewtoggle(){
        if (visible){
                viewclose();
        } else {
                document.getElementById("menuback").style.display = "inline-block";
                
                visible = true;
        };
};
function viewclose(){
        document.getElementById("menuback").style.display = "none";
        document.getElementById("loginmenu").style.display = "none";
        
        visible = false;
        sendok = false;
};
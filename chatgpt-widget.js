(function() {
    var chatIcon = document.createElement("div");
    chatIcon.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/5968/5968946.png" style="width: 60px; height: 60px; position: fixed; bottom: 20px; right: 20px; cursor: pointer; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);" />';
    chatIcon.style.position = "fixed";
    chatIcon.style.bottom = "20px";
    chatIcon.style.right = "20px";
    chatIcon.style.cursor = "pointer";
    chatIcon.style.zIndex = "1000";
    chatIcon.onclick = function() {
        window.open("https://chatgpt.com/g/g-67d81cb0a1c0819181895ffd04b29cee-ensino-medio-grupo-aprova-nexus", "_blank");
    };
    document.body.appendChild(chatIcon);
})();

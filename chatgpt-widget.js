(function() {
    // Criar container principal
    var chatContainer = document.createElement("div");
    chatContainer.id = "chatgpt-container";
    chatContainer.innerHTML = `
        <div id="chatgpt-widget">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968946.png" alt="ChatGPT" id="chatgpt-icon">
        </div>
        <div id="chatgpt-box">
            <div id="chat-header">
                <span>ChatGPT Nexus</span>
                <button id="close-chat">×</button>
            </div>
            <iframe id="chat-iframe" src="https://chatgpt.com/g/g-67d81cb0a1c0819181895ffd04b29cee-ensino-medio-grupo-aprova-nexus" frameborder="0"></iframe>
        </div>
    `;

    // Adicionar ao corpo da página
    document.body.appendChild(chatContainer);

    // Estilos CSS
    var style = document.createElement("style");
    style.innerHTML = `
        #chatgpt-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            cursor: pointer;
            z-index: 1000;
        }
        #chatgpt-icon {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s;
        }
        #chatgpt-icon:hover {
            transform: scale(1.1);
        }
        #chatgpt-box {
            display: none;
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 350px;
            height: 500px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            z-index: 1000;
        }
        #chat-header {
            background: #0D47A1;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
        }
        #close-chat {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }
        #chat-iframe {
            width: 100%;
            height: 450px;
            border: none;
        }
    `;
    document.head.appendChild(style);

    // Funções para abrir e fechar o chat
    document.getElementById("chatgpt-widget").addEventListener("click", function() {
        document.getElementById("chatgpt-box").style.display = "block";
    });

    document.getElementById("close-chat").addEventListener("click", function() {
        document.getElementById("chatgpt-box").style.display = "none";
    });

})();

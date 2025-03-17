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
            <div id="chat-body">
                <p class="chat-message bot">Olá! Como posso ajudar?</p>
            </div>
            <div id="chat-footer">
                <input type="text" id="chat-input" placeholder="Digite sua mensagem...">
                <button id="send-message">Enviar</button>
            </div>
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
            height: 450px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            z-index: 1000;
            display: flex;
            flex-direction: column;
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
        #chat-body {
            flex-grow: 1;
            padding: 10px;
            overflow-y: auto;
            background: #f1f1f1;
        }
        .chat-message {
            background: #388E3C;
            color: white;
            padding: 8px;
            border-radius: 5px;
            margin-bottom: 5px;
            max-width: 80%;
        }
        .bot {
            align-self: flex-start;
            background: #0D47A1;
        }
        #chat-footer {
            display: flex;
            padding: 5px;
            background: #e0e0e0;
        }
        #chat-input {
            flex-grow: 1;
            padding: 5px;
            border: none;
            border-radius: 5px;
        }
        #send-message {
            background: #388E3C;
            color: white;
            border: none;
            padding: 5px 10px;
            margin-left: 5px;
            cursor: pointer;
            border-radius: 5px;
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

    // Função para abrir o ChatGPT com a mensagem digitada
    document.getElementById("send-message").addEventListener("click", function() {
        var inputField = document.getElementById("chat-input");
        var messageText = inputField.value.trim();
        if (messageText !== "") {
            var chatBody = document.getElementById("chat-body");

            // Adicionar a mensagem do usuário na interface do chat
            var userMessage = document.createElement("p");
            userMessage.classList.add("chat-message");
            userMessage.textContent = messageText;
            chatBody.appendChild(userMessage);

            // Abrir ChatGPT com a mensagem já preenchida
            var chatgptUrl = `https://chatgpt.com/g/g-67d81cb0a1c0819181895ffd04b29cee-ensino-medio-grupo-aprova-nexus?q=${encodeURIComponent(messageText)}`;
            window.open(chatgptUrl, "_blank");

            // Limpar campo de entrada
            inputField.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

})();

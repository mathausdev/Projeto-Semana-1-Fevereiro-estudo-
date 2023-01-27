
    var whatsappButton = document.getElementById("whatsapp-button");
    var phoneNumber = "31992326226"; // Número de telefone com DDD
    var message = "Olá, gostaria de mais informações?" // Mensagem padrão

    // Criar o botão
    var button = document.createElement("a");
    button.href = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
    button.target = "_blank";
    button.style.backgroundColor = "#25D366"; // Cor de fundo do botão
    button.style.color = "#FFF"; // Cor do texto
    button.style.padding = "15px"; // Espaçamento interno
    button.style.borderRadius = "50%"; // Arredondar as bordas
    button.style.position = "fixed"; // Posição flutuante
    button.style.bottom = "40px"; // Distância do rodapé
    button.style.right = "40px"; // Distância da margem direita
    button.innerHTML = "WhatsApp"; // Texto do botão

    // Adicionar o botão ao HTML
    whatsappButton.appendChild(button);
async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>Tú:</b> ${userInput}</p>`;

    try {
        const response = await fetch("https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fus-south.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-cf30be71-6821-4f50-a845-684b26e34253%3A%3A9f1a2f7a-a393-4337-957f-9f39eb4f2140&integrationID=8bda4a63-ba07-4458-bbd1-f47961f7426c&region=us-south&serviceInstanceID=cf30be71-6821-4f50-a845-684b26e34253", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        chatBox.innerHTML += `<p><b>Bot:</b> ${data.response}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p><b>Bot:</b> Error al conectar con el servidor.</p>`;
    }

    document.getElementById("user-input").value = "";
}

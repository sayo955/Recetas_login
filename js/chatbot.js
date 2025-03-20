async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>Tú:</b> ${userInput}</p>`;

    try {
        const response = await fetch("https://api.us-south.assistant.watson.cloud.ibm.com/instances/cf30be71-6821-4f50-a845-684b26e34253", {
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

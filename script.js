document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
document.getElementById('send-arrow').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('message-input').value.trim();
    if (input) {
        addMessage('Пользователь', input);
        document.getElementById('message-input').value = '';
        setTimeout(() => addMessage('Метроша', 'Спасибо! Я думаю...'), 500);
    }
}

function addMessage(sender, text) {
    const chat = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.className = message ${sender === 'Метроша' ? 'bot-message' : 'user-message'};
    messageDiv.innerHTML = `
        <div class="message-header">
            <img src="${sender === 'Метроша' ? 'logo-metrhosha.png' : 'user-avatar.png'}" alt="${sender}" class="avatar">
            <span class="sender">${sender}</span>
        </div>
        <div class="message-text">${text}</div>
    `;
    chat.insertBefore(messageDiv, chat.querySelector('.input-container'));
    chat.scrollTop = chat.scrollHeight;
}
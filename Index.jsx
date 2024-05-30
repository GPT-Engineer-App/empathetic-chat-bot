<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotional Support AI Chatbot</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800">
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a href="#" class="text-xl font-bold text-blue-600">SupportBot</a>
            <div>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">Home</a>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">About</a>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">Contact</a>
            </div>
        </div>
    </nav>
    <header class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to SupportBot</h1>
            <p class="text-xl mb-8">Your AI companion for emotional support and well-being.</p>
            <a href="#chat" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Start Chatting</a>
        </div>
    </header>
    <main id="chat" class="container mx-auto px-4 py-10">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Chat with SupportBot</h2>
            <div id="chatbox" class="border border-gray-300 p-4 h-64 overflow-y-scroll mb-4"></div>
            <div class="flex">
                <input id="userInput" type="text" class="flex-grow border border-gray-300 p-2 rounded-l-lg" placeholder="Type your message...">
                <button id="sendButton" class="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Send</button>
            </div>
        </div>
    </main>
    <script>
        const chatbox = document.getElementById('chatbox');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('sendButton');

        sendButton.addEventListener('click', () => {
            const userMessage = userInput.value.trim();
            if (userMessage) {
                appendMessage('You', userMessage);
                userInput.value = '';
                // Simulate bot response
                setTimeout(() => {
                    appendMessage('SupportBot', 'I am here to support you.');
                }, 1000);
            }
        });

        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('mb-2');
            messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatbox.appendChild(messageElement);
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotional Support AI Chatbot</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-900">
    <!-- Navigation Bar -->
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a href="#" class="text-xl font-bold text-blue-600">SupportBot</a>
            <div>
                <a href="#" class="text-gray-700 hover:text-blue-600 mx-2">Home</a>
                <a href="#" class="text-gray-700 hover:text-blue-600 mx-2">About</a>
                <a href="#" class="text-gray-700 hover:text-blue-600 mx-2">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to SupportBot</h1>
            <p class="text-lg mb-8">Your AI companion for emotional support and well-being.</p>
            <a href="#chat" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Start Chatting</a>
        </div>
    </section>

    <!-- Chat Interface -->
    <section id="chat" class="container mx-auto px-4 py-20">
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Chat with SupportBot</h2>
            <div id="chat-box" class="border border-gray-300 rounded-lg p-4 h-64 overflow-y-scroll mb-4">
                <!-- Chat messages will appear here -->
            </div>
            <div class="flex">
                <input id="user-input" type="text" class="flex-grow border border-gray-300 rounded-l-lg p-2" placeholder="Type your message...">
                <button id="send-button" class="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Send</button>
            </div>
        </div>
    </section>

    <script>
        document.getElementById('send-button').addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value;
            if (userInput.trim() !== '') {
                const chatBox = document.getElementById('chat-box');
                const userMessage = document.createElement('div');
                userMessage.className = 'text-right mb-2';
                userMessage.innerHTML = '<span class="bg-blue-600 text-white rounded-lg px-4 py-2 inline-block">' + userInput + '</span>';
                chatBox.appendChild(userMessage);
                document.getElementById('user-input').value = '';
                chatBox.scrollTop = chatBox.scrollHeight;

                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'text-left mb-2';
                    botMessage.innerHTML = '<span class="bg-gray-200 rounded-lg px-4 py-2 inline-block">I am here to support you.</span>';
                    chatBox.appendChild(botMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 1000);
            }
        });
    </script>
</body>
</html>
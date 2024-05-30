<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotional Support AI Chatbot</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800">
    <!-- Navigation Bar -->
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-blue-600">SupportBot</a>
            <div>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">Home</a>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">About</a>
                <a href="#" class="text-gray-600 hover:text-blue-600 mx-2">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to SupportBot</h1>
            <p class="text-xl mb-8">Your AI companion for emotional support and well-being.</p>
            <button class="bg-white text-blue-600 font-semibold py-2 px-4 rounded">Get Started</button>
        </div>
    </section>

    <!-- Chat Interface -->
    <section class="container mx-auto px-4 py-10">
        <div class="bg-white shadow-md rounded-lg p-6">
            <div class="flex flex-col h-96">
                <div class="flex-1 overflow-y-auto p-4" id="chat-window">
                    <!-- Chat messages will appear here -->
                </div>
                <div class="mt-4 flex">
                    <input type="text" id="user-input" class="flex-1 border border-gray-300 rounded-l-lg p-2" placeholder="Type your message...">
                    <button id="send-button" class="bg-blue-600 text-white p-2 rounded-r-lg">Send</button>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.getElementById('send-button').addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value;
            if (userInput.trim() !== '') {
                const chatWindow = document.getElementById('chat-window');
                const userMessage = document.createElement('div');
                userMessage.className = 'bg-blue-100 p-2 rounded-lg mb-2 self-end';
                userMessage.textContent = userInput;
                chatWindow.appendChild(userMessage);
                document.getElementById('user-input').value = '';
                chatWindow.scrollTop = chatWindow.scrollHeight;

                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'bg-gray-100 p-2 rounded-lg mb-2 self-start';
                    botMessage.textContent = 'I am here to support you.';
                    chatWindow.appendChild(botMessage);
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                }, 1000);
            }
        });
    </script>
</body>
</html>
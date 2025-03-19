const greetings = (manager) => {
    // English Greetings
    manager.addDocument('en', 'hello', 'greeting.hello');
    manager.addDocument('en', 'hi', 'greeting.hello');
    manager.addDocument('en', 'hey', 'greeting.hello');
    manager.addDocument('en', 'yo', 'greeting.hello');
    manager.addDocument('en', 'yow', 'greeting.hello');
    manager.addDocument('en', 'good morning', 'greeting.morning');
    manager.addDocument('en', 'good afternoon', 'greeting.afternoon');
    manager.addDocument('en', 'good evening', 'greeting.evening');

    manager.addAnswer('en', 'greeting.hello', 'Hello! 👋 How can I help you today?');
    manager.addAnswer('en', 'greeting.hello', "Hello! 👋 I'm your chatbot assistant, built by Nhoriel. How can I help you today?");
    manager.addAnswer('en', 'greeting.morning', 'Good morning! ☀️ Hope you have a great day!');
    manager.addAnswer('en', 'greeting.afternoon', 'Good afternoon! 🌤️ How can I assist you?');
    manager.addAnswer('en', 'greeting.evening', 'Good evening! 🌙 Relax and feel free to ask me anything.');

    // Tagalog Greetings
    manager.addDocument('tl', 'kamusta', 'greeting.hello');
    manager.addDocument('tl', 'magandang umaga', 'greeting.morning');
    manager.addDocument('tl', 'magandang hapon', 'greeting.afternoon');
    manager.addDocument('tl', 'magandang gabi', 'greeting.evening');

    manager.addAnswer('tl', 'greeting.hello', 'Kamusta! 😊 Ano maitutulong ko sayo?');
    manager.addAnswer('tl', 'greeting.morning', 'Magandang umaga! ☀️ Ingat ka ngayong araw!');
    manager.addAnswer('tl', 'greeting.afternoon', 'Magandang hapon! 🌤️ Ano po ang maitutulong ko?');
    manager.addAnswer('tl', 'greeting.evening', 'Magandang gabi! 🌙 Ano pong gusto mong malaman?');
}


export default greetings;
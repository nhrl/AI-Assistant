const built = (manager) => {
    // How I Built This Bot
    const botQuestions = [
        'How did you build this bot?',
        'What technologies did you use?',
        'Tell me about the process of creating this bot.'
    ];

    botQuestions.forEach((question) => {
        manager.addDocument('en', question, 'bot.built');
    });

    // Bot Building Process
    const botDetails = `
**I built this chatbot using:**  

- **Node.js** with **Express** for the server.  
- **NLP.js** for natural language processing.  
- Custom-trained data about my **skills**, **projects**, and **experience**.  
- The frontend is built with **React** and styled using **Tailwind CSS** for a clean design.  

If you'd like to know more about the development process, let me know!
`;

    manager.addAnswer('en', 'bot.built', botDetails);
};

export default built;

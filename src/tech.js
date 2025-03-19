const tech = (manager) => {
    // Tech Skills Inquiries
    manager.addDocument('en', 'What technologies do you know?', 'skills.tech');
    manager.addDocument('en', 'What are your technical skills?', 'skills.tech');
    manager.addDocument('en', 'What frameworks are you familiar with?', 'skills.frameworks');
    manager.addDocument('en', 'What is your tech stack?', 'skills.frameworks');
    manager.addDocument('en', 'What tools do you use for development?', 'skills.tools');

    // Responses for Tech Skills
    manager.addAnswer('en', 'skills.tech', 
        "I know React for building user interfaces, Node.js for handling backend logic, and TypeScript for writing safer and more organized code."
    );

    // Frameworks
    manager.addAnswer('en', 'skills.frameworks',
        "I'm familiar with React for creating web and mobile apps, and I use Node.js for server-side development."
    );

    // Development Tools
    manager.addAnswer('en', 'skills.tools',
        "I use VSCode for writing code, Postman for testing APIs, and Git for tracking changes in my projects."
    );
}

export default tech;
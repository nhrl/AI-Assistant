const tech = (manager) => {
    // Tech Skills Inquiries
    manager.addDocument('en', 'What technologies do you know?', 'skills.tech');
    manager.addDocument('en', 'What are your technical skills?', 'skills.tech');
    manager.addDocument('en', 'What frameworks are you familiar with?', 'skills.frameworks');
    manager.addDocument('en', 'What is your tech stack?', 'skills.frameworks');
    manager.addDocument('en', 'What tools do you use for development?', 'skills.tools');

    // Responses for Tech Skills
    manager.addAnswer('en', 'skills.tech', 
        "I'm skilled in React, Next.js, Node.js, and TypeScript. I also have experience with Angular, Laravel, and MySQL for building full-stack applications."
    );

    manager.addAnswer('en', 'skills.tech', 
        "I build web applications using React, Next.js, Node.js, and Tailwind CSS. I also work with APIs, MySQL, PostgreSQL, and deploy projects using Vercel and Supabase."
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
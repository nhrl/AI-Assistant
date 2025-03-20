const aboutMe = (manager) => {
    // About Me
    manager.addDocument('en', 'Tell me about yourself', 'about');
    manager.addDocument('en', 'Who are you?', 'about');
    manager.addDocument('en', 'Can you introduce yourself?', 'about');

    // Job Position Goals
    manager.addDocument('en', 'What job are you aiming for?', 'job');
    manager.addDocument('en', 'What position do you want?', 'job');
    manager.addDocument('en', 'What career are you pursuing?', 'job');

    // Responses
manager.addAnswer('en', 'about', 
    `**I'm Nhoriel** 

A graduating **Information Technology student** from **Silliman University**. 

I specialize in **building web and mobile applications** with a focus on user experience and functionality.`
);

manager.addAnswer('en', 'job', 
    `**I'm working towards becoming a Software Engineer or Web Developer.**  
    
My focus is on creating **web** and **mobile applications** that deliver smooth performance and engaging designs.`
);
        
};

export default aboutMe;

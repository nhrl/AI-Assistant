const school = (manager) => {
    // Educational Background
    manager.addDocument('en', 'Where did you study?', 'education');
    manager.addDocument('en', 'What’s your educational background?', 'education');
    manager.addDocument('en', 'Can you tell me about your education?', 'education');
    manager.addDocument('en', 'What degree did you take?', 'education.degree');
    manager.addDocument('en', 'What course did you finish?', 'education.finish');

    // Responses for Education
    manager.addAnswer('en', 'education',
        "I studied Information Technology at Silliman University. Feel free to ask about my projects, skills, or experiences!"
    );
    manager.addAnswer('en', 'education', 
        "I graduated with a degree in Information Technology from Silliman University. Would you like to know about my projects or skills?"
    );

    // Responses for Degree
    manager.addAnswer('en', 'education.degree', 
        "I earned a Bachelor of Science in Information Technology from Silliman University."
    );
    manager.addAnswer('en', 'education.degree', 
        "I took up Information Technology as my major at Silliman University. Let me know if you'd like to hear about my projects!"

    );

    // Responses for Course Completion
    manager.addAnswer('en', 'education.finish', 
        "I completed my studies in Information Technology at Silliman University. If you’d like to know how I applied my skills in projects, feel free to ask!"
    );
    manager.addAnswer('en', 'education.finish', 
        "I finished my course in Information Technology at Silliman University. Interested in what I learned or the projects I worked on?"
    );

}

export default school;
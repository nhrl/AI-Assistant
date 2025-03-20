const project = (manager) => {
    // Project-Related Questions
    const projectQuestions = [
        'Tell me about your projects',
        'What projects have you built?',
        'Describe your projects'
    ];

    projectQuestions.forEach((question) => {
        manager.addDocument('en', question, 'project.info');
    });

    // Project Details
    const projectDetails = `
**Here are some of my projects:**  

- **ICB-GYM Assistant App**  
Built with **Next.js**, **Node.js**, and **Supabase**. This app provides personalized workout and diet plans while assisting gym managers with customer progress tracking.  

- **FundFlow**  
Developed using **React** and **Node.js**, this budget and event management system helps SK members manage expenses, ensuring financial transparency for barangay events.  

- **PGC E-commerce Platform**  
Created with **Angular**, **Laravel**, and **MySQL**, this platform sells gaming consoles, games, and accessories. It features product listings, user authentication, and a checkout system.  

Let me know if you'd like to hear more about any specific project or its features!
`;

    manager.addAnswer('en', 'project.info', projectDetails);

    manager.addDocument('en', 'Tell me more about the ICB-GYM app', 'project.icbgym');
    manager.addDocument('en', 'What is FundFlow about?', 'project.fundflow');
    manager.addDocument('en', 'Can you describe the PGC E-commerce platform?', 'project.pgc');


     // Follow-up Answers
const icb_gym = `
**ICB-GYM Assistant App Details:**  

- Offers customized workout and diet plans based on users' fitness goals.  
- Gym managers can track members' progress, assign training schedules, and manage customer records efficiently.  
- The system also supports data visualization for progress tracking.
`;

    manager.addAnswer('en', 'project.icbgym', icb_gym);
        
manager.addAnswer('en', 'project.fundflow', `
**FundFlow Details:**  

FundFlow helps SK members plan events by managing budgets, tracking expenses, and ensuring financial transparency. It allows users to break down costs, categorize spending, and generate financial reports for improved accountability.
`);
        
manager.addAnswer('en', 'project.pgc', `
**PGC E-commerce Platform Details:** 
 
This platform offers a smooth shopping experience with product filtering, checkout integration, and secure payment processing. Customers can easily browse gaming consoles, games, and accessories with user-friendly navigation.
`);
};
export default project;

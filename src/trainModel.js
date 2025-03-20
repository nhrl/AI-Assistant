import { NlpManager } from 'node-nlp';
import greetings from './greetings.js';
import school from './school.js';
import tech from './tech.js';
import built from './built.js';
import aboutMe from './aboutMe.js';
import experience from './experience.js';
import project from './project.js';

console.log('🚀 Starting training script...');

const manager = new NlpManager({ 
    languages: ['en','tl'],
    modelFileName: './src/model.nlp'
});


// Add Training Data
greetings(manager);
school(manager);
tech(manager);
built(manager);
aboutMe(manager);
experience(manager);
project(manager);


trainAndSaveModel();

async function trainAndSaveModel() {
    console.log('🧠 Training model...');
    await manager.train();

    console.log('✅ Training complete!');

    // Save Model
    await manager.save('./src/model.nlp');

    console.log('✅ Model trained and saved successfully! 🚀');
}

export default manager;

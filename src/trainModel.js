import { NlpManager } from 'node-nlp';
import greetings from './greetings.js';
import school from './school.js';
import tech from './tech.js';

console.log('🚀 Starting training script...');

const manager = new NlpManager({ 
    languages: ['en','tl'],
    modelFileName: './src/model.nlp'
});


// Add Training Data
greetings(manager);
school(manager);
tech(manager);


//Work Experience
//About Me
//Projects
//How I build this bot

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

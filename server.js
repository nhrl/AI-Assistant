import express from 'express';
import cors from 'cors';
import { NlpManager } from 'node-nlp';
import { eld } from 'eld';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(cors());

const manager = new NlpManager({ languages: ['en', 'tl'] });

// Load Model
async function loadModelOnce() {
    const modelData = fs.readFileSync('./src/model.nlp', 'utf8');
    manager.import(modelData);
}

await loadModelOnce();

// Limit language detection to English and Tagalog
eld.dynamicLangSubset(['en', 'tl']);

// Manual keyword detection for common greetings
function detectLanguage(message) {
    const keywordsEN = ['hello', 'hi', 'how are you'];
    const keywordsTL = ['kamusta', 'kamusta ka'];

    const lowerMessage = message.toLowerCase();

    if (keywordsEN.some(word => lowerMessage.includes(word))) return 'en';
    if (keywordsTL.some(word => lowerMessage.includes(word))) return 'tl';

    // Fallback to eld detection
    const detectedLanguage = eld.detect(message).language;
    return ['en', 'tl'].includes(detectedLanguage) ? detectedLanguage : 'en';
}

function detectBlockWords(message) {
    const blockKeywords = ['password','birthday'];
    const lowerMessage = message.toLowerCase();

    if(blockKeywords.some(word => lowerMessage.includes(word))) return true;
}

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ answer: 'Please provide a message.' });
    }

    const block = detectBlockWords(message);

    if(block) {
        res.json({
            message : "Sorry, Nhoriel doesn't provide this information due to personal privacy."
        })
    } else {
        const language = detectLanguage(message);
        const response = await manager.process(language, message);
    
        res.json({
            language,
            answer: response.answer || 
                (language === 'tl'
                    ? "Hmm... Hindi ko sigurado 'yan. Subukan mong magtanong tungkol sa aking mga hilig, kasanayan, o proyekto!"
                    : "Hmm... I'm not sure about that. Try asking about my hobbies, skills, or projects!")
        });
    }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`AI API running on port ${PORT} 🚀`));

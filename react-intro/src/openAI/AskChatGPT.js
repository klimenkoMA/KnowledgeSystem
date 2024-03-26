import React, { useState } from 'react';
import axios from 'axios';

const ChatGPTComponent = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: inputText,
                max_tokens: 100,
                temperature: 0.7,
            }, {
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                }
            });

            setOutputText(response.data.choices[0].text);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>

            <div>
                {outputText}
            </div>
        </div>
    );
};

export default ChatGPTComponent;

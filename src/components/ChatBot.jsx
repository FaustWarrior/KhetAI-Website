import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style';
import "./Button.css"

function ChatBot() {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = 'https://api.openai.com/v1/chat/completions';
            const apiKey = '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';
            const requestBody = {
                model: 'gpt-3.5-turbo', // Specify the model you want to use
                messages: [
                    {
                        role: 'user',
                        content: inputText,
                    },
                ],
            };

            const response = await axios.post(apiUrl, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            });

            setResponse(response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='mt-6 flex flex-row'>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading2}>Ask your queries regarding Crops here with AI Assistant</h2>
                    <input type="text" className='w-5/12 py-2 px-4 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-100' value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button class="button-29">Send</button>
                </form>
                <p className={`${styles.paragraph} w-full font-semibold text-green-200 hover:text-green-400 mt-5 `}>{response}</p>
            </div>

        </div>
    );
}



export default ChatBot





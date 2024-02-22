import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style';
import { IconButton } from '@chakra-ui/react';
import { MdMic } from 'react-icons/md';

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
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 ml-10 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                </form>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{response}</p>
            </div>
            <div>
                
            </div>

        </div>
    );
}



export default ChatBot
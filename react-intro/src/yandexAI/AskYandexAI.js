import React, { useEffect, useState } from 'react';
import { Alice } from 'yandex-dialogs-sdk';

const YandexAIClient = () => {

    const [response, setResponse] = useState('');
    useEffect(() => {

        const dialogManager = new Alice();
        dialogManager.init((session: any) => {
            const text = 'Привет, Яндекс!';

            session.reply(text, { continue: true }).then((reply: any) => {
                setResponse(reply.text);
            });
        });
    }, []);

    return <div>{response}</div>;
};

export default YandexAIClient;

import React, {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';

const MachineLearning = () => {

    const [predictionResult, setPredictionResult] = useState(null);

    useEffect(() => {
        // Создание модели
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        // Получение данных для обучения
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Обучение модели
        model.fit(xs, ys, {epochs: 500}).then(() => {
            // Предсказание
            const prediction = model.predict(tf.tensor2d([5], [1, 1]));
            setPredictionResult(prediction.dataSync()[0]);
        });
    }, []);

    return (
        <div style={{color: `white`,}}>
            <h1>TensorFlow в React</h1>
            <h2>Результат предсказания: {predictionResult}</h2>
        </div>
    );
};

export default MachineLearning;
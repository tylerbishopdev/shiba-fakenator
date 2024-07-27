import fetch from 'node-fetch';

const API_URL = 'https://tavusapi.com/v2/replicas';

export async function createReplica(trainVideoUrl) {
    try {
        console.log('Sending request to Tavus API with URL:', trainVideoUrl);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.TAVUS_API_KEY
            },
            body: JSON.stringify({ train_video_url: trainVideoUrl })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received response from Tavus API:', data);
        return data;
    } catch (error) {
        console.error('Error in createReplica:', error);
        throw new Error(`Error creating replica: ${error.message}`);
    }
}
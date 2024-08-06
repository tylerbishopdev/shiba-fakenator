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

export async function getReplicas() {
    try {
        console.log('Sending request to Tavus API');
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.TAVUS_API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received response from Tavus API:', data);

        // Check if data is an array
        if (!Array.isArray(data)) {
            throw new Error('Expected an array of replicas');
        }

        // Extract and return the list of replica IDs
        const replicaIds = data.map(replica => replica.id);
        return replicaIds;
    } catch (error) {
        console.error('Error in getReplicas:', error);
        throw new Error(`Error getting replicas: ${error.message}`);
    }
}

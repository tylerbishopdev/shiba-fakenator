import { initializeUI } from './ui.js';
import { createReplica } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
});

export async function handleFormSubmit(trainVideoUrl) {
    try {
        const result = await createReplica(trainVideoUrl);
        return result;
    } catch (error) {
        console.error('Error creating replica:', error);
        return { error: error.message };
    }
}
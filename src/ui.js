import { handleFormSubmit } from './main.js';

export function initializeUI() {
    const form = document.getElementById('replicaForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const trainVideoUrl = document.getElementById('trainVideoUrl').value;
        
        resultDiv.textContent = 'Creating replica...';
        
        const result = await handleFormSubmit(trainVideoUrl);
        
        if (result.error) {
            resultDiv.textContent = `Error: ${result.error}`;
        } else {
            resultDiv.textContent = `Replica created successfully! Replica ID: ${result.replica_id}, Status: ${result.status}`;
        }
    });
}
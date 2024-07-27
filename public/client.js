document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('replicaForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const trainVideoUrl = document.getElementById('trainVideoUrl').value;
        
        resultDiv.textContent = 'Creating replica...';
        
        try {
            const response = await fetch('/create-replica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trainVideoUrl }),
            });
            
            const result = await response.json();
            
            if (response.ok) {
                resultDiv.textContent = `Replica created successfully! Replica ID: ${result.replica_id}, Status: ${result.status}`;
            } else {
                resultDiv.textContent = `Error: ${result.error}`;
            }
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('replicaForm');
    const resultDiv = document.getElementById('result');
    const replicaSelect = document.getElementById('replicaSelect');

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
                await fetchAndDisplayReplicas(); // Refresh the replica list after creating a new one
            } else {
                resultDiv.textContent = `Error: ${result.error}`;
            }
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        }
    });

    async function fetchReplicas() {
        try {
            const response = await fetch('/get-replicas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const replicaIds = await response.json();
            return replicaIds;
        } catch (error) {
            console.error('Error fetching replicas:', error);
            throw new Error(`Error fetching replicas: ${error.message}`);
        }
    }

    function populateReplicaSelect(replicas) {
        replicaSelect.innerHTML = '<option value="">--Select a Replica--</option>'; // Clear existing options

        replicas.forEach(replicaId => {
            const option = document.createElement('option');
            option.value = replicaId;
            option.textContent = replicaId;
            replicaSelect.appendChild(option);
        });
    }

    async function fetchAndDisplayReplicas() {
        try {
            const replicas = await fetchReplicas();
            populateReplicaSelect(replicas);
        } catch (error) {
            console.error('Error initializing replicas:', error);
        }
    }

    fetchAndDisplayReplicas(); // Fetch and display replicas when the page loads
});

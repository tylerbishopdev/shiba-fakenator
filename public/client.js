document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('replicaForm');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const progressDiv = document.getElementById('progress');
    const downloadLinkDiv = document.getElementById('downloadLink');
    const modelStatusDiv = document.getElementById('modelStatus');
    const trainStatusDiv = document.getElementById('trainStatus');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const trainVideoUrl = document.getElementById('trainVideoUrl').value;
        
        resultDiv.textContent = 'Creating replica...';
        errorDiv.textContent = ''; // Clear previous errors
        progressDiv.textContent = ''; // Clear previous progress
        downloadLinkDiv.style.display = 'none';
        modelStatusDiv.style.display = 'none';
        trainStatusDiv.style.display = 'none';

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
                // Handle other result data as needed
            } else {
                throw new Error(result.error || 'An unknown error occurred');
            }
        } catch (error) {
            errorDiv.textContent = `Error: ${error.message}`;
        }
    });

    const videoForm = document.getElementById('videoForm');
    const scriptInput = document.getElementById('scriptInput');
    const replicaSelect = document.getElementById('replicaSelect');
    const videoResultDiv = document.getElementById('videoResult');
    const videoErrorDiv = document.getElementById('videoError');
    const videosListDiv = document.getElementById('videosList');
    const videosErrorDiv = document.getElementById('videosError');

    // Fetch available replicas on page load
    async function fetchReplicas() {
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'fb5cf5475a2443a3b80b6f614d6bcba5' // Replace with your actual API key
            }
        };

        try {
            const response = await fetch('https://tavusapi.com/v2/replicas', options);
            const data = await response.json();
            data.data.forEach(replica => {
                const option = document.createElement('option');
                option.value = replica.replica_id;
                option.textContent = replica.replica_name;
                replicaSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching replicas:', error);
        }
    }

    fetchReplicas();

    videoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const script = scriptInput.value;
        const replicaId = replicaSelect.value;

        videoResultDiv.textContent = 'Generating video...';
        videoErrorDiv.textContent = ''; // Clear previous errors

        try {
            const response = await fetch('/generate-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ script, replicaId }),
            });

            const result = await response.json();

            if (response.ok) {
                videoResultDiv.textContent = `Video generated successfully! Video ID: ${result.video_id}, Status: ${result.status}`;
                // Handle other result data as needed
            } else {
                throw new Error(result.error || 'An unknown error occurred');
            }
        } catch (error) {
            videoErrorDiv.textContent = `Error: ${error.message}`;
        }
    });


    // Fetch created and in-progress videos on page load
    async function fetchVideos() {
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'fb5cf5475a2443a3b80b6f614d6bcba5' // Replace with your actual API key
            }
        };

        try {
            const response = await fetch('https://tavusapi.com/v2/videos', options);
            const data = await response.json();
            data.data.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.classList.add('p-4', 'border-2', 'border-gray-500', 'rounded-xl', 'my-4', 'space-y-4', 'bg-gray-100');
                videoItem.innerHTML = `
                    <h3 class="font-bold">${video.video_name}</h3>
                    <p>Progress: ${video.generation_progress}</p>
                    <p>Status: ${video.status}</p>
                    <div class="py-2 m-4">
                    <a href="${video.download_url}" class="text-indigo-600 text-lg rounded-lg border border-indigo-600 text-right  px-3 py-2" target="_blank">Download Video</a>
                    </div>
                `;
                videosListDiv.appendChild(videoItem);
            });
        } catch (error) {
            videosErrorDiv.textContent = `Error: ${error.message}`;
        }
    }

    fetchVideos();
});

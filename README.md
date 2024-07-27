# Shiba Fakenator

Shiba Fakenator is a simple Node.js application that serves a static website and provides an API endpoint to create replicas using the Tavus API.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/shiba-fakenator.git
cd shiba-fakenator
```

## 2. Install Dependencies

```bash
npm install

```

## 3 Set Up Environment Variables

Create a .env file in the root directory of the project and add the following environment variables.

```sh
    PORT=3000
    TAVUS_API_KEY=your_key-from-tyler
```

Replace with key provided by Tyler with quotations on each end.

## Run the Server

```sh
npm start
```

The server will start on port 3000. You can change this by modifying the PORT environment variable in the.env file.
The server should now be running on the port specified in your .env file (default is 3000). You can access the application by navigating to localhost:3000 [http://localhost:3000] in your web browser.

## Recording and uploading

Record a video with really good quality and a good microphone; ensuring you speak clearly, don't have anything covering your face and are properly lit. Ensure quality audio and no echoes etc. Then, record the video with the script I provided Jack, upload the video to Vercel blob or anywhere on the web (Google Drive, Dropbox, etc). The linkyou upload must be them one you uploaded to the web and should auto-download the video when you throw it iun a web browser. In Vercel, go to storage > blob > tylertest.mp4 for an example. there'll be a copy url button that provides the right url if you use vercel blog for your upload. When you have that url, thats what you will paste into the file upload ionpout on the application once it's running and the ai will begin training a deepfake of you that you can use to make videos with.

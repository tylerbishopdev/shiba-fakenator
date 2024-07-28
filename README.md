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

The recording you upload MUST include this exact recording of you directly consenting to the cloning before you read the script. The script is as follows:

```markdown
I, 'name', am currently speaking and consent Tavus to create an AI clone of me by using the audio and video samples I provide. I understand that this AI clone can be used to create videos that look and sound like me.
```

Record a video with really good quality and a good microphone; ensuring you speak clearly, don't have anything covering your face and are properly lit. Ensure quality audio and no echoes etc. Then, record the video with the script I provided Jack, upload the video to Vercel blob or anywhere on the web (Google Drive, Dropbox, etc). The link you upload must be them one you uploaded to the web and should auto-download the video when you throw it iun a web browser. In Vercel, go to storage > blob > tylertest.mp4 for an example. there'll be a copy url button that provides the right url if you use vercel blog for your upload. When you have that url, thats what you will paste into the file upload ionpout on the application once it's running and the ai will begin training a deepfake of you that you can use to make videos with.

## Script for recording

```markdown
  In a bustling city where the echoes of courtrooms and whispers of justice
      intertwined, prosecutors had opened a massive investigation into
      allegations of fixing games and illegal betting. The legal system, like
      different telescope designs, aimed to expose the truth, each method
      possessing unique strengths and weaknesses. As the investigation unfolded,
      the need to strengthen the education of good lawyers became evident.
      Feedback from seasoned professionals became crucial; it had to be timely
      and accurate throughout the project. Just like humans judging distance by
      the relative sizes of objects, the legal team sought clarity amid the
      complex web of allegations. Yet, in the grand scheme of things, this
      information seemed insignificant. Churches, however, insisted on
      addressing the issue, emphasizing that they should not encourage such
      activities or make them look harmless. It was a moral stance against the
      backdrop of legal intricacies. Amidst the legal turmoil, individuals found
      solace in unrelated pursuits, such as learning about setting up wireless
      network configurations. The city's residents, like the varied ways to
      consume food, could choose to eat their worries fresh, cooked, or
      fermented. Rumors circulated that those who tended to think creatively
      were somehow different, and if true, they could be the key to unlocking
      the mystery behind the alleged game-fixing. A creative perspective could
      be the honeymoon of clarity in this legal fog. In the courtroom, as the
      trial progressed, the atmosphere was heated. The sugar syrup of evidence
      dripped slowly, creating very fine strands of truth that draped over the
      handles of justice. The accused wiped their brows with their forearms,
      grappling with the pressure. The legal system, however, had its quirks.
      Instead of fixing the issue at hand, they gave it a nickname, a moniker
      that belied the gravity of the charges. But amid the legal intricacies,
      about half the people who were infected with the allegations also lost
      weight, shedding the burden of deceit. The second half of the legal saga
      focused on argument and essay writing, a meticulous process of presenting
      facts and weaving narratives. Funding became an issue after the fact,
      leaving the legal team to reflect on the odd fashion choice of addressing
      problems only when they surfaced. Yet, despite the challenges, there was a
      prevailing sentiment of encouragement. "Let us encourage each other,"
      became the rallying cry. In the end, as the legal battle continued,
      individuals found strength in unity, understanding that they had the means
      to help themselves in the pursuit of truth and justice.
      ```

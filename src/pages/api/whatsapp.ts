import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        sendAisensyTemplate(req.body)
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    } else {
        // Handle any other HTTP method
        res.send('Hello');
    }
}

const AISENSY_TOKEN ='';

export async function sendAisensyTemplate(payload: {
    phone: string;
    templateName: string;
    userName: string;
    parameters: string[];
    attributes: any;
    mediaUrl: any;
}) {
    try {
        const data = JSON.stringify({
            apiKey: AISENSY_TOKEN,
            campaignName: payload.templateName,
            destination: payload.phone,
            userName: payload.userName,
            templateParams: payload.parameters,
            attributes: payload.attributes,
            media: payload.mediaUrl,
        });
        const response = await fetch('https://backend.aisensy.com/campaign/t1/api/v2', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.text();
    } catch (error) {
        console.log('aisensy error', error);
    }
}

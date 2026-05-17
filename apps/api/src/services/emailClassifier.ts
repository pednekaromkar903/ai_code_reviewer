import axios from 'axios';

export interface ClassificationResult {
  category: 'PRODUCT_QUALITY' | 'DELIVERY' | 'INSTALLATION' | 'BILLING' | 'WARRANTY' | 'NOISE_MOTOR' | 'SMART_FEATURES' | 'PACKAGING' | 'OTHER';
  sentiment: 'ANGRY' | 'FRUSTRATED' | 'NEUTRAL' | 'SATISFIED';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  isComplaint: boolean;
}

export async function classifyEmail(subject: string, body: string): Promise<ClassificationResult> {
  const model = process.env.OLLAMA_MODEL || 'gemma3';
  const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434/api/generate';

  const prompt = `Analyze this customer email for Atomberg (BLDC fan company). Classify into exactly one category: PRODUCT_QUALITY, DELIVERY, INSTALLATION, BILLING, WARRANTY, NOISE_MOTOR, SMART_FEATURES, PACKAGING, OTHER. Detect sentiment: ANGRY, FRUSTRATED, NEUTRAL, SATISFIED. Determine priority: HIGH (urgent/escalation), MEDIUM, LOW. Is this a complaint? true/false. Return ONLY JSON: { "category": "...", "sentiment": "...", "priority": "...", "isComplaint": ... }

Email: Subject: ${subject}, Body: ${body}`;

  try {
    const response = await axios.post(ollamaUrl, {
      model: model,
      prompt: prompt,
      stream: false,
      format: 'json'
    });

    const result = JSON.parse(response.data.response);
    return result as ClassificationResult;
  } catch (error) {
    console.error('Email Classification Error:', error);
    // Fallback to neutral classification
    return {
      category: 'OTHER',
      sentiment: 'NEUTRAL',
      priority: 'MEDIUM',
      isComplaint: false
    };
  }
}

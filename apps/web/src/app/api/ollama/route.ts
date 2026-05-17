import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, model } = await req.json();

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model || 'gemma3',
        prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Ollama connection failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Ollama Proxy Error:', error);
    return NextResponse.json(
      { error: 'Ollama is not running' },
      { status: 503 }
    );
  }
}

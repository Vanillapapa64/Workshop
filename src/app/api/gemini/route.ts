import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Google Generative AI client with the API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set.");
}
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request:NextRequest) {
  try {
    console.log("hi")
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      This is JavaScript centric Workshop on backend using javascript and nodejs, But you can answer any other general questions too.
      Remember to use leyman language as this workshop is for juniors
      
      Question: "${question}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ answer: text });
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI." },
      { status: 500 }
    );
  }
}
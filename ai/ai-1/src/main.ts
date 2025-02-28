import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import dotenv from "dotenv";

dotenv.config();

const model = anthropic('claude-3-5-haiku-latest');

const answerMyPrompt = async (
    prompt: string,
) => {
    const { text } = await generateText({
        model, 
        prompt
    });

    return text;
};

const promptQuery = "What is the meaning of life?";

async function main() {
    const generatedResponse = await answerMyPrompt(
        promptQuery
    );

    console.log(promptQuery);
    console.log(generatedResponse);
}

main().catch(console.error);
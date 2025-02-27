import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const model = openai("gpt-4");

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
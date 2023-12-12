import OpenAI from "openai";

const openai = new OpenAI();

const SYSTEM_PROMPT = "You are a helpful assistant.";

async function chat(message: string) {
	const completion = await openai.chat.completions.create({
		messages: [
			{ role: "system", content: SYSTEM_PROMPT },
			{ role: "user", content: message },
		],
		model: "gpt-3.5-turbo",
	});

	return completion.choices[0].message.content;
}

const response = await chat("Hi there");

console.log(response);

const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

async function explainCode(code){

const completion = await groq.chat.completions.create({
messages:[
{
role:"user",
content:`Explain this code step by step in plain text. Do not use **bold** or markdown:\n${code}`
// content: `
// Explain this code in JSON format with:
// 1. summary
// 2. steps
// 3. time_complexity

// Code:
// ${code}
// `
}
],
model:"llama-3.1-8b-instant"
})

return completion.choices[0].message.content

}

module.exports = explainCode
import { Configuration, OpenAIApi } from "openai";

const lkjdhf = "c2stcHNubHBNWW1CYzFldGx2alFJQ29UM0JsYmtGSnlMWWJQSjFMQ3RvRGI1eWNrZkJs";

var buf = Buffer.from(lkjdhf, 'base64');
const configuration = new Configuration({
  apiKey: buf
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.question),
    temperature: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
//
function generatePrompt(question) {
  return question;
}

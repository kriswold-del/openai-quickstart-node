import { Configuration, OpenAIApi } from "openai";

const lkjdhf = "c2stcHNubHBNWW1CYzFldGx2alFJQ29UM0JsYmtGSnlMWWJQSjFMQ3RvRGI1eWNrZkJs";

var buf = Buffer.from(lkjdhf, 'base64');
const configuration = new Configuration({
  apiKey: buf
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  // const completion = await openai.createCompletion({
  //   model: "text-davinci-002",
  //   prompt: generatePrompt(req.body.question),
  //   temperature: 1,
  // });

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.question,
    temperature: 0.87,
    max_tokens: 4000,
  });
  res.send(JSON.parse(response));
  //res.status(200).json({response);
}
//
function generatePrompt(question) {
  return question;
}

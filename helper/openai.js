const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    organization :  "org-b3hYMUUFQugmpniLVV9DbYnE", // here you have to add your openai organization id
    apiKey : "sk-aLLgziJBtutUq2sTjmmyT3BlbkFJqr0ub630mJvN318CKu"  // here secret key
});

const openai = new OpenAIApi(config);

module.exports = openai;

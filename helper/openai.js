const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    organization :  "org-b3hYMUUFQugmpniLVV9DbYnE", // for demonstration purpose given this key will delete after some time
    apiKey : "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"  // for demonstration purpose given this key will delete after some time 
});

const openai = new OpenAIApi(config);

module.exports = openai;

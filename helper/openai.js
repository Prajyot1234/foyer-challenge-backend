const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    organization :  "org-b3hYMUUFQugmpniLVV9DbYnE",
    apiKey : "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"
});

const openai = new OpenAIApi(config);

module.exports = openai;
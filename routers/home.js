const express = require('express');
const router = express.Router();

const openai = require("../helper/openai");

//Handling get and post resquest.
router.post('/query',async (req,res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            temperature : 0.3,
            top_p : 1,
            max_tokens : 2000,
            frequency_penalty : 0,
            presence_penalty : 0,
        })
        .then( resp => {
            res.status(200).json({
                status : 200,
                message : "successfully got response",
                response :  resp.data.choices[0].text
            });
        })
        .catch( err => {
            res.status(401).json({
                status : 401,
                message : "error",
                response :  "error fetching data from Chat-GPT"
            })    
            }
        )
})

module.exports = router;
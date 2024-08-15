export const Data = {
heading:"API Pricing",
description:"Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:",

table:{
    thead:["API", "MODEL", "PRICE PER 1 TOKEN"],
    trows:[
    {
        id:1,
        apiName:"OpenAI	",
        model:"GPT-3.5",
        price:"$0.002"
    },
    {
        id:2,
        apiName:"OpenAI	",
        model:"GPT-4",
        price:"$0.03"
    },
    {
        id:3,
        apiName:"Together AI",
        model:"Llama-2-70b",
        price:"$0.0008"
    },
    {
        id:4,
        apiName:"OpenAI	",
        model:"Llama-2-13b",
        price:"$0.0006"
    },
],
others:[{
    id:1,
    title:"Token Estimation",
    description:"On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.",
},
{
    id:1,
    title:"Billing",
    description:"You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.",
}]
}
}
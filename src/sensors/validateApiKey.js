const MAIN_API_KEY = 'ef8aa74e-c643-4a3f-8f5c-2587ca2a177d';

const validateApiKey = (req,res, next) => {

    let apiKey = req.headers['api-key'];    

    if(!apiKey)
    {
        res.status(403);
        return res.send({"Error" : "Header with api-key doesn't exist!"});
    }
    if(apiKey == MAIN_API_KEY)
    {
        return next();
    }
    res.status(403);
    return res.send({"Error" : "Invalid api key!"});

    //TODO: add logic for checking api keys from db
}

module.exports = {
    validateApiKey,
}
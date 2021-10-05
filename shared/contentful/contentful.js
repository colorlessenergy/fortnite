const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN 
});

export default client;
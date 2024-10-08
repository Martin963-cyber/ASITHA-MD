const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=rjh3WSKL#RRBbufpDxb_B-zwSO3XQS2lNygsFHWjsKCJE3KgDj9Y",
MONGODB: process.env.MONGODB || "mongodb://mongo:ypiPXBRszwKoMcXtwNJKRFSRVEIHKAUS@junction.proxy.rlwy.net:39391",//enter mongo db url
};

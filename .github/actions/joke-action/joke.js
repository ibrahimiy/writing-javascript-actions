const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com",
    Headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing JavaScript action GitHub Learning Lav course. Visit lab.github.com or to contact us."
    },
    json: true
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;
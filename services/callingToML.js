const axios = require("axios");

const MLReportProduct = async (sort) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const url = `${process.env.URL_ML}&offset=${sort}`;
    return await axios
        .get(url, { headers })
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e;
        });
}

module.exports = { MLReportProduct };
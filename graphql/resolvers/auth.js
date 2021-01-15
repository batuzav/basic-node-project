const jwt = require("jsonwebtoken");


module.exports = { 
    login: async ({ email, password }) => {
        if(email === "pedro" && password === "holamundo"){ 
            const token = jwt.sign(
                { userId: 123234234, email: "batuza.belmont@gmail.com" },
                `${process.env.tokencrypt}`,
                { expiresIn: "365d" }
            );
            return { userId: 123234234, token, tokenExpiration: 365};
        } else throw new Error("Usuario no existe");
    },
}
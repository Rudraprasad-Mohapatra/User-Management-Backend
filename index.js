const app = require("./app.js");
const PORT = process.env.PORT;
app.listen(PORT, (req, res)=>{
    console.log(`Server started at PORT=${PORT}`);
})
import express from 'express';

const app = express();

app.get("/about", (req, res) =>{
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("Server is listning on port 5000");
});

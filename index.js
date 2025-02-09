import express from "express";
import bodyparser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const data = {
    name: "Your name",
    entertainment: 200,
    entertainmentPercentage: 15,
    utilities: 50,
    utilitiesPercentage: 5,
    healthcare: 100,
    healthcarePercentage: 7,
    transport: 300,
    transportPercentage: 22,
    food: 100,
    foodPercentage: 7,
    rent: 500,
    rentPercentage: 37,
    misc: 100,
    miscPercentage: 7,
    total: 1350,
    savings: 180
};

function updateSprite(savings) {
    if (savings < 150) {
        //low savings must return sad sprite
        return "260px -90px";
    } else if (savings < 300) {
        //must return neutral sprite
        return "-88px -90px";
    }else{
        //must return happy sprite
        return "530px -450px";
    }
}

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    const spritePosition = updateSprite(data.savings);
    console.log(spritePosition);
    res.render("index.ejs", {data: data, spritePosition: spritePosition});
});

app.listen(port, () => {
    console.log(`Woohoo, port ${port} up and running!`)
});
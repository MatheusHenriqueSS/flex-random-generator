
import express from "express";
import { FullTeamController } from "./src/controllers/get-full-team";


async function main() {
    const fullTeamController = new FullTeamController();
    const app = express();

    app.get("/get-full-team", fullTeamController.getFullTeam);

    app.listen(3000, () => {    
        console.log("Server started at port 3000");
    })
}

main().catch((err) => {
    console.log(err);
})
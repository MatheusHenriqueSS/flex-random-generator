import { Request, Response } from "express";
import { getFullTeam } from "../useCases/get-full-team";

export class FullTeamController {
    async getFullTeam(req: Request, res: Response) {
        try {
            const {difficult} = req.query;

            if(!difficult) throw new Error("Failed to get difficult");

            if(![0, 1, 2].includes(Number(difficult))) throw new Error("Invalid format of difficult");

            //valid region and tags

            const fullTeam = await getFullTeam(Number(difficult));

            if(fullTeam.length !== 5) throw new Error("Failed to get team");


            res.status(200).json({team: fullTeam});
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}
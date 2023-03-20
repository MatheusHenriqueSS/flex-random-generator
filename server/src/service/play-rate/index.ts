import axios from "axios";
import { PlayRate } from "../../entities/play-rate";

export async function getPlayRateByChampionId(): Promise<PlayRate>{
    try {
        const playRates = (await axios.get<{data: PlayRate}>("https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/championrates.json")).data;
    
        if(!playRates.data) {
            throw new Error("Could not get champions play rates.")
        }
        return playRates.data;
    } catch(err) {
        console.log(err);
        return {};
    }
}
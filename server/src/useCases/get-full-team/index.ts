import { getAllChampions } from "../../service/data-dragon";
import { getPlayRateByRole } from "../get-playrate-by-role";
import { getRandomChampions } from "../get-random-champion-ids";

export async function getFullTeam(difficult: number, options?: {
    region?: string,
    tag?: string,
}) {
    const champions = await getAllChampions();
    const playRateByRole = await getPlayRateByRole();

    const randomChampionIds = getRandomChampions(difficult, playRateByRole);

    return Object.values(randomChampionIds).map(champId => champions.find(champ => champ.key === champId)?.name);

}
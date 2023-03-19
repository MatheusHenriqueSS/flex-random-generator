import { ChampionPlayRate } from "../../entities/champion-play-rate";
import { PlayRate, Roles } from "../../entities/play-rate";
import { getPlayRateByChampionId } from "../../service/playRate";

type ChampionsByRoles = {
    [key in Roles]: ChampionPlayRate[]
}

function sortRolesPlayRates(roles: ChampionsByRoles) {
    Object.values(roles).forEach((arr) => {
        arr.sort((p1, p2) => (p1.playRate > p2.playRate) ? -1 : (p1.playRate < p2.playRate) ? 1 : 0);
    });
}

function parsePlayRates(playRates: PlayRate) {

    const roles:ChampionsByRoles = {
        "TOP": new Array<ChampionPlayRate>(),
        "JUNGLE": new Array<ChampionPlayRate>(),
        "MIDDLE": new Array<ChampionPlayRate>(),
        "BOTTOM": new Array<ChampionPlayRate>(),
        "UTILITY": new Array<ChampionPlayRate>(),
    }

    Object.entries(playRates).forEach(([championId, value]) => {
        Object.keys(roles).forEach((role) => {
            const roleArr = roles[role as keyof typeof roles];
            const playRate = value[role as keyof typeof value].playRate || 0;

            roleArr.push({championId, playRate});
        })
    });

    return roles;
}

export async function getPlayRateByRole() {
    const playRatesByChampionId = await getPlayRateByChampionId();
    const playRatesByRole = parsePlayRates(playRatesByChampionId);

    sortRolesPlayRates(playRatesByRole);

    return playRatesByRole;
}
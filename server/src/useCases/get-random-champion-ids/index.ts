import { Roles } from "../../entities/play-rate";
import { ChampionsByRoles } from "../get-playrate-by-role";

function setRangeByIndexes(championsByRoles: ChampionsByRoles): {
    [key in Roles]: {mid: number, hard: number}
} {

    const result = {
        TOP: {mid: 0, hard: 0},
        JUNGLE: {mid: 0, hard: 0},
        MIDDLE: {mid: 0, hard: 0},
        BOTTOM: {mid: 0, hard: 0},
        UTILITY: {mid: 0, hard: 0}
    }

    Object.entries(championsByRoles).forEach(([role, arr]) => {
        const validPlayRates = arr.filter(item => item.playRate > 0).length;
        //for each role, there will be three difficults: 
        //first 1/2 of validPlayRates
        //second 1/2 of validPlayrates
        //all champions with null Playrates
        const mid = Math.floor(validPlayRates/2);
        result[role as keyof typeof result] = {mid, hard: validPlayRates}
    })

    return result;
}

function getRandomNumberInRange(begin: number, end: number) {
    return begin + Math.floor(Math.random() * (end - begin));   
}


export function getRandomChampions(difficult: number, championsByRoles: ChampionsByRoles) {
    const difficultIndexes = setRangeByIndexes(championsByRoles);
    const championsIds = {
        TOP: '0',
        JUNGLE: '0',
        MIDDLE: '0',
        BOTTOM: '0',
        UTILITY: '0',    
    }

    const championLen = championsByRoles.TOP.length;

    if(difficult === 0) {
        for(const key in Roles) {
            let index = getRandomNumberInRange(0, difficultIndexes[key as keyof typeof difficultIndexes].mid);
            let champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId
            while(Object.values(championsIds).includes(String(champIndex))) {
                index = getRandomNumberInRange(0, difficultIndexes[key as keyof typeof difficultIndexes].mid);
                champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId;
            }
            championsIds[key as keyof typeof championsIds] = String(champIndex);
        }
    }
    else if(difficult === 1) {
        for(const key in Roles) {
            let index = getRandomNumberInRange(difficultIndexes[key as keyof typeof difficultIndexes].mid, difficultIndexes[key as keyof typeof difficultIndexes].hard);
            let champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId;
            while(Object.values(championsIds).includes(String(index))){
                index = getRandomNumberInRange(difficultIndexes[key as keyof typeof difficultIndexes].mid, difficultIndexes[key as keyof typeof difficultIndexes].hard);
                champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId;
            }    
            championsIds[key as keyof typeof championsIds] = String(champIndex);
        }

    }
    else {
        for(const key in Roles) {
            let index = getRandomNumberInRange(difficultIndexes[key as keyof typeof difficultIndexes].hard, championLen);
            let champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId;
            while(Object.values(championsIds).includes(String(index))){
                index = getRandomNumberInRange(difficultIndexes[key as keyof typeof difficultIndexes].hard, championLen);
                champIndex = championsByRoles[key as keyof typeof championsByRoles][index].championId;
            }
            championsIds[key as keyof typeof championsIds] = String(champIndex);
        }
    }

    return championsIds;


}
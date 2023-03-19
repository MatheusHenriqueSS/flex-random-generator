import { DataDragon } from "data-dragon";

async function getAllChampions() {
    try {
        const dragon = await DataDragon.latest();
        await dragon.champions.fetch();

        if(!dragon.champions) throw new Error("Faild to fecth champions");

        return dragon.champions;

    } catch(err) {
        console.log(err);
        return [];
    }

}

export default getAllChampions;
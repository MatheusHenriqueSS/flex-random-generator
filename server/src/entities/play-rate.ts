export enum Roles {
    top = 'TOP',
    middle = 'MIDDLE',
    jungle = 'JUNGLE',
    bottom = 'BOTTOM',
    utility = 'UTILITY'
  }
  
export type PlayRate = {
    [championId: string]: {
        [role in Roles]: { playRate: number }
    }
  }
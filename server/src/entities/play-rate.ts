export enum Roles {
    TOP = 'TOP',
    JUNGLE = 'JUNGLE',
    MIDDLE = 'MIDDLE',
    BOTTOM = 'BOTTOM',
    UTILITY = 'UTILITY'
  }
  
export type PlayRate = {
    [championId: string]: {
        [role in Roles]: { playRate: number }
    }
  }
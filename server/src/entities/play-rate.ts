export enum Roles {
    top = 'TOP',
    mid = 'MID',
    jungle = 'JUNGLE',
    bottom = 'BOTTOM',
    utility = 'UTILITY'
  }
  
  export type PlayRate = {
    [championId: string]: {
        [role in Roles]: { playRate: number }
    }
  }
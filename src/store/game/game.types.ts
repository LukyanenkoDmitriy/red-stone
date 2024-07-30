import type {ICard} from "@/types/card.types.ts";

export interface IHero {
    deck: ICard[]
    health: number
    mana: number
}

export interface IGameStore {
    player: IHero
    opponent: IHero
}
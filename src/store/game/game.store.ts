import { create } from 'zustand'
import { endTurn as endTurnAction } from './actions/endTurn'
import { createDeck } from './create-deck'
import type { IGameStore, IHero } from './game.types'

const initialPlayerDate: IHero = {
	deck: createDeck(),
	health: 25,
	mana: 1,
}
const initialGameData = {
	player: initialPlayerDate,
	opponent: initialPlayerDate,
	currentTurn: 'player',
	isGameOver: false,
}

const useGameStore = create<IGameStore>((set, get) => ({
	...initialGameData,
	startGame: () => set(initialGameData),
	endTurn: () => set(endTurnAction(get)),
}))

export { useGameStore }

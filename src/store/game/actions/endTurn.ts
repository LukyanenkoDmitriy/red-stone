import type { IGameCard, IGameStore, TPlayer } from '../game.types'

const resetAttack = (deck: IGameCard[]) =>
	deck.map(card => ({
		...card,
		isCanAttack: card.isOnBoard,
	}))
export const endTurn = (get: () => IGameStore): Partial<IGameStore> => {
	const state = get()
	const newTurn: TPlayer =
		state.currentTurn === 'player' ? 'opponent' : 'player'

	const newPlayerMana =
		newTurn === 'player'
			? Math.min(state.player.mana + 1, 6)
			: state.player.mana

	const newOpponentMana =
		newTurn === 'opponent'
			? Math.min(state.opponent.mana + 1, 6)
			: state.opponent.mana

	return {
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: resetAttack(state.player.deck),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: resetAttack(state.opponent.deck),
		},
	}
}

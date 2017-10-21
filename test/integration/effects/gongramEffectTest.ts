import { from, state, to } from '../../../../../src'
import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { standardTileIsColors } from '../../../../../test/integration/helpers/standardTileIsColors'
import { gongramEffect } from '../../../effects/gongramEffect'

describe('gongram coloration', () => {
	it('arranges the 5 MTG colors by rows in the cycle of allies, and by columns in the cycle of enemies', () => {
		const tileSize = to.Unit(50)
		const sufficientGridSizeToDemonstratePattern = 10
		state.selectedHoundstoothEffects = [ gongramEffect ]
		const houndstoothOverrides = {
			basePattern: {
				gridSettings: {
					gridSize: sufficientGridSizeToDemonstratePattern,
				},
				tileSettings: {
					tileSizeSetting: tileSize,
				},
				viewSettings: {
					canvasSize: to.Dimension(sufficientGridSizeToDemonstratePattern * from.Unit(tileSize)),
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		let baseId = -8
		const rowOneTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 0 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLUE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 0 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, WHITE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 0 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, GREEN ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 0 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, RED ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 0 ]),
				tileSize,
			},
		]
		const rowTwoTiles = [
			{
				baseId: baseId += 8,
				colors: [ WHITE, BLACK ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 1 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, BLUE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 1 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, WHITE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 1 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, GREEN ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 1 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, RED ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 1 ]),
				tileSize,
			},
		]
		const rowThreeTiles = [
			{
				baseId: baseId += 8,
				colors: [ RED, BLACK ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 2 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, BLUE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 2 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, WHITE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 2 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, GREEN ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 2 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, RED ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 2 ]),
				tileSize,
			},
		]
		const rowFourTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLUE, BLACK ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 3 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, BLUE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 3 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, WHITE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 3 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, GREEN ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 3 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, RED ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 3 ]),
				tileSize,
			},
		]
		const rowFiveTiles = [
			{
				baseId: baseId += 8,
				colors: [ GREEN, BLACK ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 4 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, BLUE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 4 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, WHITE ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 4 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, GREEN ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 4 ]),
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, RED ],
				tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 4 ]),
				tileSize,
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})

import { type Drink } from '@/interfaces/drink-category'
import DrinkItem from './drink-item'

export default function DrinkList ({ drinks }: { drinks: Drink[] }): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {
        drinks.map(drink => (
          <DrinkItem key={drink.idDrink} drink={drink} />
        ))
      }
    </div>
  )
}

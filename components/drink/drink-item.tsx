import { type Drink } from '@/interfaces/drink-category'
import { Wine } from 'lucide-react'

export default function DrinkItem ({ drink }: { drink: Drink }): JSX.Element {
  return (
    <div key={drink.idDrink} className="relative overflow-hidden rounded-lg group active:scale-95 transition-all duration-300 cursor-pointer shadow-xl">
      <img className="max-w-full group-hover:scale-110 rounded-lg transition-all duration-300" src={drink.strDrinkThumb} alt=""/>
      <div className="absolute h-1/4 flex items-center border-t-[1px] border-white justify-center backdrop-blur-lg bottom-0 w-full bg-white/20 text-gray-800 gap-1">
        <Wine size={25} />
        <p className="text-xl font-bold">{ drink.strDrink }</p>
      </div>
    </div>
  )
}

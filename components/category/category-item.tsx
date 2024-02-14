import { CarouselItem } from '../ui/carousel'

import { type Drink } from '@/interfaces/category'
import { Wine } from 'lucide-react'

export const CategoryItem = ({ drink }: { drink: Drink }): JSX.Element => {
  return (
    <CarouselItem key={drink.strCategory} className="basis-1/5">
      <div
        // className='flex items-center justify-center bg-slate-100 rounded-md py-5 p-1 gap-2 animate-background-shine border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
        className={`${drink.strCategory === 'Ordinary Drink' && 'text-purple-500'} flex items-center justify-center h-full bg-slate-200 rounded-md py-5 p-1 gap-2`}
      >
        <Wine size={25} className="opacity-75" />
        <h2 className="text-xl font-bold opacity-75">{ drink.strCategory }</h2>
      </div>
    </CarouselItem>
  )
}

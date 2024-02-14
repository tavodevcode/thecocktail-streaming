import { getCategories } from '@/services/category'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { CategoryItem } from './category-item'

export default async function CategoryList (): Promise<JSX.Element> {
  const categories = await getCategories()

  return (
    <Carousel className='w-full mt-10'>
      <CarouselContent className=''>
        {
          categories.drinks.map((drink) => (
            <CategoryItem key={drink.strCategory} drink={drink} />
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

import { getDrinkCategories } from '@/services/drink-category'
import DrinkList from '@/components/drink/drink-list'

export default async function DrinkCategoryList (): Promise<JSX.Element> {
  const drinkCategories = await getDrinkCategories()

  return (
    <DrinkList drinks={drinkCategories.drinks} />
  )
}

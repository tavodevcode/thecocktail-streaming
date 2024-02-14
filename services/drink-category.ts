import { type DrinkCategoryResult } from '@/interfaces/drink-category'
import { BASE_URL } from '@/lib/constants'

export async function getDrinkCategories (): Promise<DrinkCategoryResult> {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  const response = await fetch(`${BASE_URL}/filter.php?c=Ordinary_Drink`, { cache: 'no-store' })

  const drinkCategories = await response.json()

  return drinkCategories
}

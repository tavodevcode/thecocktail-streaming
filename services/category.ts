import { type CategoryResult } from '@/interfaces/category'
import { BASE_URL } from '@/lib/constants'

export async function getCategories (): Promise<CategoryResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(`${BASE_URL}/list.php?c=list`, { cache: 'no-store' })
  const categories = await response.json()

  return categories
}

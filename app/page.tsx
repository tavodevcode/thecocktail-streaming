import CategoryList from '@/components/category/category-list'
import CategoryListSkeletons from '@/components/category/skeletons'
import DrinkCategoryList from '@/components/drink-category/drink-category-list'
import DrinkListSkeleton from '@/components/drink/skeleton'
import { Suspense } from 'react'

export default async function Home (): Promise<JSX.Element> {
  return (
    <main className="flex min-h-screen flex-col items-center container">
      <Suspense fallback={<CategoryListSkeletons />}>
        <CategoryList />
      </Suspense>

      <Suspense fallback={<DrinkListSkeleton />}>
        <DrinkCategoryList />
      </Suspense>
    </main>
  )
}

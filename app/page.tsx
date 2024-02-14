import CategoryList from '@/components/category/category-list'
import CategoryListSkeletons from '@/components/category/skeletons'
import DrinkCategoryList from '@/components/drink-category/drink-category-list'
import DrinkListSkeleton from '@/components/drink/skeleton'
import { Search } from 'lucide-react'
import { Suspense } from 'react'

export default async function Home (): Promise<JSX.Element> {
  return (
    <main className="flex min-h-screen flex-col items-center container">
      <div className="w-full h-auto mt-10">
        <div className="w-3/5 flex justify-center items-center bg-slate-50 border-2 rounded-3xl m-auto px-10 active:scale-95 transition-all duration-500 ease-out">
          <input className="w-4/5 bg-slate-50 border-1 border-solid border-transparent outline-none py-4" />
          <button className="w-1/5 flex justify-end text-slate-400 peer-active">
            <Search />
          </button>
        </div>
      </div>

      <Suspense fallback={<CategoryListSkeletons />}>
        <CategoryList />
      </Suspense>

      <Suspense fallback={<DrinkListSkeleton />}>
        <DrinkCategoryList />
      </Suspense>
    </main>
  )
}

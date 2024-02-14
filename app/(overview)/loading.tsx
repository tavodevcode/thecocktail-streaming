import CategoryListSkeletons from '@/components/category/skeletons'
import DrinkListSkeleton from '@/components/drink/skeleton'

export default function Loading (): JSX.Element {
  return (
    <section className="w-full h-full" >
      <CategoryListSkeletons />
      <DrinkListSkeleton />
    </section>
  )
}

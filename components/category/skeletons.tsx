import { Skeleton } from '../ui/skeleton'

export default function CategoryListSkeletons (): JSX.Element {
  return (
    <div className="w-full mt-10 grid grid-cols-5 gap-2">
      {
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-[68px] py-5 p-1" />
        ))
      }
    </div>
  )
}

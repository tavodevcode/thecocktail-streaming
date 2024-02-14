import { Skeleton } from '../ui/skeleton'

export default function DrinkListSkeleton (): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {
        Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className='w-[322px] h-[322px] rounded-lg'/>
        ))
      }
    </div>
  )
}

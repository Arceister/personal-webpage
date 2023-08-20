import { FC } from "react";

type CardItemProps = {
  data: {
    link: string
    title: string
    description: string
  }
}

const CardItem: FC<CardItemProps> = ({data}: CardItemProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-[#383838] mx-[10%] cursor-pointer h-[14rem] sm:h-[10rem]" 
         onClick={() => {window.open(data.link, '_blank')}}
         >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-left">{data.title}</div>
        <p className="light:text-gray-700 text-base text-left">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default CardItem
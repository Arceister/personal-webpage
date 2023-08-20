import { FC } from "react";
import CardItem from "./card-item";

type CardLayoutProps = {
  data: {
    thumbnail: string
    title: string
    description: string
  }[]
}

const CardLayout: FC<CardLayoutProps> = ({data}: CardLayoutProps) => {
  return (  
    <div className="mt-[2%] grid sm:grid-cols-2 content mx-auto">
      {data.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </div>
  )
}

export default CardLayout
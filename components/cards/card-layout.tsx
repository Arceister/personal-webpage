import { FC } from "react";
import CardItem from "./card-item";
import { CardLayoutProps } from "./types";

const CardLayout: FC<CardLayoutProps> = ({data}: CardLayoutProps) => {
  return (  
    <div className="mt-[2%] grid sm:grid-cols-2 content mx-auto gap-6 pb-[35%] sm:pb-[20%]">
      {data.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </div>
  )
}

export default CardLayout
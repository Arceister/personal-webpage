import { FC } from "react";
import CardItem from "./card-item";

const CardLayout: FC = () => {
  return (  
    <div className="mt-[2%] grid sm:grid-cols-2 content mx-auto">
      {sampleCardItems.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </div>
  )
}

const sampleCardItems = [
  {
    title: "Title 1",
    description: "Description"
  },
  {
    title: "Title 2",
    description: "Description 2"
  },
]

export default CardLayout
import { NextPage } from "next";
import Seo from "../../components/seo";
import UnderConstruction from "../../components/pages/underConstruction";
import CardLayout from "../../components/cards/card-layout";

const Projects: NextPage = () => {
  return (
    <div>
      <Seo />
      <UnderConstruction />
      <CardLayout />
    </div>
  )
}

export default Projects;
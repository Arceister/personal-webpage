import { NextPage } from "next";
import Seo from "../../components/seo";
import UnderConstruction from "../../components/pages/underConstruction";
import CardLayout from "../../components/cards/card-layout";
import { projectsList } from "../../utils/projectsList";

const Projects: NextPage = () => {
  return (
    <div>
      <Seo />
      <UnderConstruction />
      <CardLayout data={projectsList} />
    </div>
  )
}

export default Projects;
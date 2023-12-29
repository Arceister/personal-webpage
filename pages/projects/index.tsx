import { NextPage } from "next";
import Seo from "../../components/seo";
import UnderConstruction from "../../components/pages/project-page";
import CardLayout from "../../components/cards/card-layout";
import { projectsList } from "../../utils/projectsList";
import ProjectPage from "../../components/pages/project-page";

const Projects: NextPage = () => {
  return (
    <div>
      <Seo />
      <ProjectPage />
      <CardLayout data={projectsList} />
    </div>
  )
}

export default Projects;
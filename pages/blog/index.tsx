import { NextPage } from "next";
import Seo from "../../components/seo";
import BlogPlaceholder from "../../components/pages/blogPlaceholder";

const Blog: NextPage = () => {
  return (
    <div>
      <Seo />
      <BlogPlaceholder />
    </div>
  )
}

export default Blog;
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import fs from 'fs'

const Post = ({slug}: any) => {
  return <div>Hello: {slug}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {

  const filesToRead = fs.readdirSync('posts')
  const paths = filesToRead.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params: {slug}}: any) => {
  return {
    props: {
      slug
    }
  }
}

export default Post
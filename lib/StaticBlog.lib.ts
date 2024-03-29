import * as fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import { IBlogPost, IBlogPostPreview } from '~/constants/blogPost'
import { DATE_FORMAT_COMMON } from '~/constants'

const postsDirectory = path.resolve(process.cwd(), 'posts')

export const getPostData = async (slug: string): Promise<IBlogPost> => {
  const fileContents = fs.readFileSync(path.resolve(postsDirectory, `${slug}.md`))
  const fileData = matter(fileContents)

  return {
    id: slug,
    title: fileData.data.title,
    publishDate: dayjs(fileData.data.date).format(DATE_FORMAT_COMMON),
    content: fileData.content,
    tags: fileData.data.tags?.split(',') ?? [],
  }
}

export const getPostsSlugs = (): { params: { slug: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
}

export const getSortedPostsData = (amount?: number): IBlogPostPreview[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const blogPostPreviews = fileNames.map((fileName) => {
    const fileContents = fs.readFileSync(path.resolve(postsDirectory, fileName), 'utf8')
    const fileData = matter(fileContents)

    return {
      id: fileName.replace('.md', ''),
      title: fileData.data.title,
      publishDate: dayjs(fileData.data.date).toDate(),
      tags: fileData.data.tags?.split(',') ?? [],
    }
  }).sort(({ publishDate: a }, { publishDate: b }) => {
    if (a < b) {
      return 1
    } if (a > b) {
      return -1
    }
    return 0
  }).map((post) => ({ ...post, publishDate: dayjs(post.publishDate).format(DATE_FORMAT_COMMON) }))

  return amount ? blogPostPreviews.slice(0, amount) : blogPostPreviews
}

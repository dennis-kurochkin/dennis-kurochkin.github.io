import * as fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IBlogPost, IBlogPostPreview } from '../domain/blogPost'
import dayjs from 'dayjs'
import { remark } from 'remark'
import html from 'remark-html'
import { DateFormats } from '../domain'

const postsDirectory = path.resolve(process.cwd(), 'posts')

export const getPostData = async (slug: string): Promise<IBlogPost> => {
  const fileContents = fs.readFileSync(path.resolve(postsDirectory, `${slug}.md`))
  const fileData = matter(fileContents)
  const contentFile = await remark().use(html).process(fileData.content)

  return {
    id: slug,
    title: fileData.data.title,
    publishDate: dayjs(fileData.data.date).format(DateFormats.COMMON),
    content: contentFile.toString(),
  }
}

export const getPostsSlugs = (): { params: { slug: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
}

export const getSortedPostsData = (amount?: number): IBlogPostPreview[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const blogPostPreviews = fileNames.map(fileName => {
    const fileContents = fs.readFileSync(path.resolve(postsDirectory, fileName), 'utf8')
    const fileData = matter(fileContents)

    return {
      id: fileName.replace('.md', ''),
      title: fileData.data.title,
      publishDate: dayjs(fileData.data.date).toDate(),
    }
  }).sort(({ publishDate: a }, { publishDate: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  }).map(post => ({ ...post, publishDate:  dayjs(post.publishDate).format(DateFormats.COMMON) }))

  return amount ? blogPostPreviews.slice(0, amount) : blogPostPreviews
}

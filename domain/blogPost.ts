export interface IBlogPostPreview {
  id: string
  title: string
  publishDate: string
  tags: string[]
}

export interface IBlogPost extends IBlogPostPreview {
  content: string
}

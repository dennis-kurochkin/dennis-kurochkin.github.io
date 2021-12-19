export interface IBlogPostPreview {
  id: string
  title: string
  publishDate: string
}

export interface IBlogPost extends IBlogPostPreview{
  content: string
}
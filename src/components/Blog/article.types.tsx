export type ArticleDataType = {
  blogId: string
  data: {
    title: string
    image: string
    desc: string
    markdown: string
    createdAt: string
    topic: string[]
    readingTime: number
    reactions: {
      likes: number
      comments: [
        {
          comment: string
          likes: number
          replies: string[]
        },
      ]
    }
    author: {
      name: string
      designation: string
      dp: string
    }
  }
}

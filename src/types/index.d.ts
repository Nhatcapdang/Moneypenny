type IDataPost = {
  body: string
  id: number
  title: string
  userId: string
}
type IDataComment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

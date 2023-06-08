import { Axios } from '@/utils'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('BlogStore', () => {
  const dataPost = ref<IDataPost[]>([])
  const getDataPost = async () => {
    const response = await Axios.get<IDataPost[]>('/posts')
    if (response.data) {
      dataPost.value = response.data
    }
  }
  const onDelete = async (id: number) => {
    Axios.delete(`/posts/${id}`).then(response => {
      if (response.status == 200) {
        const newdataPost = dataPost.value.filter(item => {
          return item.id != id
        })
        dataPost.value = newdataPost
      }
    })
  }
  const onAdd = async (data: Pick<IDataPost, 'body' | 'title'>) => {
    return Axios.post('/posts', data).then(res => {
      dataPost.value = [res.data, ...dataPost.value]
      return res.data
    })
  }
  return { getDataPost, onDelete, onAdd, dataPost }
})

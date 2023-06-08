import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

type IToast = {
  title: string
  message: string
  isShow: boolean
}
export const useToastStore = defineStore('ToastPlacement', () => {
  const initialToast: IToast = {
    title: 'Update',
    message: 'Update success',
    isShow: false
  }
  const toast = ref<IToast>(initialToast)
  function onShowToast(params: IToast) {
    toast.value = params
    const myTimeout = setTimeout(() => {
      toast.value = initialToast
      clearTimeout(myTimeout)
    }, 2500)
  }
  function onHiddenToast() {
    toast.value = initialToast
  }
  return { onShowToast, onHiddenToast, toast }
})

export const useCounterStore2 = defineStore('counter', {
  state: () => ({ count: 1, name: 'Eduardo' }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

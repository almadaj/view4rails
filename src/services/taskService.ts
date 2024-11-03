import { Task } from '../entities/Task'
import api from './api'

const taskService = {
  list: async (): Promise<Task[]> => {
    try {
      const res = await api.get<Task[]>('/tasks')
      return res.data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }
}

export default taskService

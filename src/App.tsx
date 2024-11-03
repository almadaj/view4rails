import { useEffect, useState } from 'react'
import { Container, Title } from './styles'
import { Task } from './entities/Task'
import taskService from './services/taskService'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await taskService.list()
        console.log('Tasks:', res)
        setTasks(res)
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Title>Hello World!</Title>
      <ul style={{ backgroundColor: 'red' }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default App

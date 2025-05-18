import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './reset.css'
import IndexTodoListPage from './modules/todo_list/presentation/pages/todo_list'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexTodoListPage />} />
      </Routes>
    </Router>
  )
}

export default App

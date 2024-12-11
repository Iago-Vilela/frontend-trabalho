import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Gerenciador de Tarefas</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/tasks">Tarefas</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Bem-vindo ao Gerenciador de Tarefas</h2>
    <p>Use o menu acima para navegar pelo sistema.</p>
  </div>
);

const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);
  const [form, setForm] = React.useState({ title: '', description: '', dueDate: '', status: 'pendente' });
  const [editingTask, setEditingTask] = React.useState(null);

  // Aqui você pode reutilizar os componentes existentes
  const handleSubmit = () => {}; // Adicione sua lógica
  const handleEdit = () => {}; // Adicione sua lógica
  const handleDelete = () => {}; // Adicione sua lógica

  return (
    <div>
      <TaskForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;

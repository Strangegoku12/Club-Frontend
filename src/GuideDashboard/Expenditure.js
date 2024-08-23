import React, { useEffect, useState } from 'react';
import Sidebar from '../GuideDashboard/GuideSidebar';
import '../All-css/expenditure.css';
import axios from 'axios';

const Expenditure = () => {
  const [todos, setTodos] = useState([]);
  const [appliances, setAppliances] = useState('');
  const [amount, setAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0); // New state for total amount

  const handleAddTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/todolist', { appliances, amount });
      console.log(response.data);
      alert('Added Todo Successfully');

      // Update the todos state with the new todo item
      setTodos([...todos, response.data]); // assuming response.data returns the new todo with id
      
      // Update the total amount
      setTotalAmount(prevTotal => prevTotal + parseFloat(amount));
      
      // Clear the input fields
      setAppliances('');
      setAmount('');
    } catch (err) {
      console.log('Failed to add todo');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/showtodolist');
        setTodos(res.data.todos);
        setTotalAmount(res.data.totalAmount); // Set the total amount from the response

        console.log(todos); // Log the data to see what was fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteTodo = async (id, amount) => {
    try {
      await axios.delete(`http://localhost:3000/deletetodo/${id}`);
      
      // Update the state after deletion
      setTodos(todos.filter(todo => todo.id !== id));

      // Subtract the deleted amount from totalAmount
      setTotalAmount(prevTotal => prevTotal - parseFloat(amount));
      
      alert('Todo deleted successfully');
    } catch (err) {
      console.error('Failed to delete todo', err);
    }
  };

  return (
    <>
      <div className='main-container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-dashboard'>
          <div className="todo-app">
            <h2>Todo Application</h2>
            <h3>Total Amount: ${totalAmount}</h3> {/* Displaying total amount */}
            <div className="input-group">
              <input
                type="text"
                placeholder="Name of the thing"
                value={appliances}
                onChange={(e) => setAppliances(e.target.value)}
              />

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.appliances} - ${todo.amount}</span>
                  <button onClick={() => handleDeleteTodo(todo.id, todo.amount)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenditure;

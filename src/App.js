import './App.css';
import MyHeader from './components/header';
import AddInput from './components/addInput';
import {useState, useCallback, useEffect} from 'react'
import TodoItem from './components/todoItem'

function App() {

  const [isInputShow, setIsInputShow] = useState(true),
        [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]')
    setTodoList(todoData)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList))
  }, [todoList])

  const addItem = useCallback((value) => {
    const dataItem = {
      id:new Date().getTime(),
      content:value,
      completed:false
    }
    setTodoList((todoList) => [...todoList, dataItem])
    setIsInputShow(false)
  },[])

  return (
    <div className="App">
      <MyHeader openInput={() => setIsInputShow(!isInputShow)}></MyHeader>
      <AddInput 
        isInputShow={isInputShow} 
        addItem={addItem}>
        </AddInput>
        <ul className='todoList'>
          {
            todoList.map((item, index) => {
              return (
                <TodoItem data={item} key={index}/>
              )
            })
          }
        </ul>
    </div>
  );
}

export default App;

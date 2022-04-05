import './App.css';
import MyHeader from './components/header';
import AddInput from './components/addInput';
import {useState, useCallback, useEffect} from 'react'
import TodoItem from './components/todoItem'
import CheckModal from './components/modal/checkModal';
import EditModal from './components/modal/editModal';
import NoDataTip from './components/noDataTip';

function App() {

  const [isInputShow, setIsInputShow] = useState(true),
        [todoList, setTodoList] = useState([]),
        [isShowCheckModal, setShowCheckModal] = useState(false),
        [isShowEditModal, setShowEditModal] = useState(false),
        [currentData, setCurrentData] = useState({})

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
  }, [])

  const completeItem = useCallback((id) => {
    setTodoList((todoList) => todoList.map((item) => {
      if(item.id === id)
        item.completed = !item.completed
      return item
    }))
  }, [])

  const openCheckModal = useCallback(
    (id) => {
      setCurrentData(todoList.filter((item) => item.id===id)[0])
      setShowCheckModal(true)
    }
  , [todoList])

  const openEditModal = useCallback(
    (id) => {
      setCurrentData(todoList.filter((item) => item.id===id)[0])
      setShowEditModal(true)
    }
  , [todoList])

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) => 
      todoList.map((item) => {
        if(item.id===id) {
          item = newData
        }
        return item
      })
    )
    setShowEditModal(false)
  },[])

  const removeItem = useCallback((id) => {
    setTodoList(todoList => todoList.filter((item) => item.id!==id))
  }, [])

  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setShowCheckModal(false)}
        data={currentData}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <MyHeader openInput={() => setIsInputShow(!isInputShow)}></MyHeader>
      <AddInput 
        isInputShow={isInputShow} 
        addItem={addItem}>
        </AddInput>
        {
          !todoList || todoList.length === 0
          ?
          <NoDataTip/>
          :
          <ul className='todoList'>
          {
            todoList.map((item, index) => {
              return (
                <TodoItem 
                  data={item} 
                  key={index} 
                  openCheckModal={openCheckModal}
                  openEditModal={openEditModal}
                  completeItem={completeItem}
                  removeItem={removeItem}
                />
              )
            })
          }
        </ul>
        }
        
    </div>
  );
}

export default App;

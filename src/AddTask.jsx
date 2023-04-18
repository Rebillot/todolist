import { useState } from "react";
import './App.css';

const AddTask = () =>{
  const [task, setTask] = useState('');
  const [list, setList] = useState ([]);
  const [hoverIndex, setHoverIndex] = useState(null)
  const [display, setDisplay] = useState('notdisplayed');
 

const handleInputChange = (event) => {
  setTask(event.target.value);
}

const handleAddTask = () => { 
  setList([...list,task]);
  setTask('');
}

const handleDeleteTask =(index)=>{
  setList(previousList => {
    const auxList = [...previousList];
    auxList.splice(index, 1);
    return auxList;
  });
}

const TaskItem = ({ name, deleteItem, index }) => {
  return (
    <div>  
      <table className="table text-white">
  <tbody>
    <tr  onMouseEnter={() => {
          setHoverIndex(index);
          setDisplay('displayed');
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
          setDisplay('notdisplayed');
        }}>
      <td>{name}
        <button
          className={`delete-button btn btn-outline-secondary mr-2 float-end btn-sm ${hoverIndex === index ? display : 'notdisplayed'}`}
          type="button"
          id="button-addon2"
          onClick={deleteItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg> 
          </button>
      </td>     
    </tr>
  </tbody>
</table>
    </div>
  );
};


return (
        <div className="col-5 position-absolute top-0 start-50 translate-middle-x ">
          <div className="text-center "><h1>Taskmaister 9000</h1></div>
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder={`${list.length} tasks, add a task`}
                aria-label="Add here"
                aria-describedby="button-addon2"
                value={task}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleAddTask}
              >
                AddTask
              </button>
            </div>




          <table className="table-dark " id="lista">
            { list.map((item, index) => (
                      <TaskItem
                      key={index}
                          index ={index}
                          name={item}
                          deleteItem={() => {handleDeleteTask(index)}}
                      />
                  ))}
          </table>

          </div>
          
    
       
       );
}

export default AddTask;
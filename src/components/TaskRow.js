export const TaskRow = ({task, ToggleTask})=> {
    return(
        <tr key={task.name}>
        <td className="d-flex justify-content-between ">
        {task.name}
        <input type="checkbox"
         checked={task.done}
         onChange={()=> ToggleTask(task)}
        />
        </td> 
      </tr>
    )
}
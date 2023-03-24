import { useState, useContext } from "react";

import {Draggable} from 'react-beautiful-dnd'

import { BoardContext} from "../contexts/Board";
import { ListContext } from "../contexts/List";
import { TaskContext } from "../contexts/Task";

import { icons } from "../assets";

import AddItemForm from "./AddItemForm";

const TaskCard = ({task, index}) => {
    const [taskTitle, setTaskTitle] = useState(task.title);
    const [editMode, setEditMode] = useState(false);
    const {dispatchBoardAction} = useContext(BoardContext);
    const {dispatchListAction} = useContext(ListContext);
    const {dispatchTaskAction} = useContext(TaskContext);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatchTaskAction({
            type: "UPDATE_TASK",
            payload: {
                id: task.id,
                title: taskTitle
            }
        })

        setEditMode(false)
    }

    const removeHandler = () => {
        dispatchTaskAction({
            type: 'REMOVE_TASK',
            payload: task.id
        });

        dispatchListAction({
            type: "REMOVE_TASK_ID_FROM_LIST",
            payload: {
                id: task.listId,
                taskId: task.id
            }
        })

        dispatchBoardAction({
            type: "REMOVE_TASK_ID_FROM_BOARD",
            payload: {
                id: task.boardId,
                taskId: task.id
            }
        })
    }

    return (
       <Draggable draggableId={task.id} index={index}>
             {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {!editMode ? (
                            <div onClick={() => setEditMode(true)} className="task-card">
                                <p>{task.title}</p>
                                <img src={icons.crossIcon} alt="" className="add-item-icon" onClick={removeHandler} />
                            </div>   
                        ) : (
                            <AddItemForm 
                                title={taskTitle}
                                onChangeHandler={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                setEditMode={setEditMode}
                                submitHandler={submitHandler}
                            />
                        )}
                    </div>
                )
             }}
       </Draggable>
    )
}

export default TaskCard
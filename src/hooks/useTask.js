import { useCallback, useState, useContext } from "react";
import { deleteTask, createTask, updateTask, getTasks } from "../services/tasks";
import Context from "../context/UserContext";

export default function useTask() {

    const { jwt } = useContext(Context)
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(({ body, category }) => {
        createTask({ body, category, token: jwt }).then(null)
    }, [jwt])

    const obtainTasks = useCallback(() => {
        getTasks({ token: jwt })
            .then(tasks => setTasks(tasks))
    }, [setTasks, jwt])

    const dropTask = useCallback((id) => {
        deleteTask({ id, token: jwt })
            .then(_ => obtainTasks())
    }, [jwt, obtainTasks])

    const upTask = useCallback(({ id, newBody, category }) => {
        updateTask({ id, newBody, category, token: jwt })
            .then(_ => {

            })
            .catch(_ => {

            })
    }, [jwt])

    return {
        addTask,
        dropTask,
        upTask,
        obtainTasks,
        tasks
    }
}
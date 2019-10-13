import axios from "axios";
import todoListUrl from "./dynamicUrl";



export const toDoList = () => {
    let instance = axios.create({
        baseURL: `${todoListUrl.ToDoListServiceUrl}`
    });
    return instance;
}

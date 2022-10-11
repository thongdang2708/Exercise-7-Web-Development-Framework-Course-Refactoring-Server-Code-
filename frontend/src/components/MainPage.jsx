import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

const URL = "http://localhost:8000/";

function MainPage() {

    let [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {

        try {

            let response = await axios.get(URL);
            let data = response.data;

            setTasks(data);

        } catch (err) {
            alert(err.response.data.error);
        }
        
    }

    useEffect(() => {
        fetchTasks();
    },[]);


  return (
    <div>
        <h1> My Tasks </h1>
        {tasks.map((task) => (
            <div> {task.id}. {task.description} </div>
        ))}
    </div>
  )
}

export default MainPage
'use client'

import Board from "../components/Board";
import CreateTask from "../components/CreateTask";

const dashboard = () =>{
    return (
        <div>
            <Board/>
            <CreateTask />
        </div>
    )
}

export default dashboard;



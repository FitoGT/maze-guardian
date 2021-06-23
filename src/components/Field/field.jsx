import Cell from '../Cell/cell'
import React, { useState,useEffect } from 'react'
import './field.css'
import { config } from './configField'

const Field = () => {
    const [board,setBoard] = useState([])
    useEffect(() => {
        const cellArr = []

        config.map((conf, key) => {
            cellArr.push(conf)
        })
        setBoard(cellArr)
      }, [])

    const moveElement = (key) => {
        let newBoard = [...board]
        if(newBoard[key].className === 'cell-space'){
            newBoard[key].className = 'cell-active'
            setBoard(newBoard)
            findPreviousSpace(key)

        }
        
    }
    const findPreviousSpace = (key) => {
        let newBoard = [...board]
        let filtered = newBoard.filter((b,bKey)=> bKey!=key && b.className=='cell-active')
        filtered.map(f=>f.className='cell-space')

    }

    const findSpaceWithoutWall = () =>{

    }
    return (
        <div className="container">
            {board.map((b,key)=><Cell key={key} tabIndex={key} {...b} onClick={() => moveElement(key)}/>)}
        </div>
    )
}

export default Field
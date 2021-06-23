import Cell from '../Cell/cell'
import React, { useState, useEffect } from 'react'
import './field.css'
import { config } from './configField'
import { connect } from 'react-redux'
import { setCount } from '../../redux/count/count.actions'

const Field = ({ setCount }) => {
    const [board, setBoard] = useState([])
    const [move, setMove] = useState(0)
    useEffect(() => {
        const cellArr = []

        config.map((conf, key) => {
            cellArr.push(conf)
        })
        setBoard(cellArr)
        setCount(move)
    }, [])

    const moveElement = (key) => {
        let newBoard = [...board]
        if (newBoard[key].className === 'cell-space') {
            newBoard[key].className = 'cell-active'
            setBoard(newBoard)
            findPreviousSpace(key)
            setMove(move + 1)
            setCount(move)
        }

    }
    const findPreviousSpace = (key) => {
        let newBoard = [...board]
        let filtered = newBoard.filter((b, bKey) => bKey != key && b.className == 'cell-active')
        filtered.map(f => f.className = 'cell-space')

    }

   
    return (
        <div className="container">
            {board.map((b, key) => <Cell key={key} tabIndex={key} {...b} onClick={() => moveElement(key)} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCount: count => dispatch(setCount(count))
})
export default connect(null, mapDispatchToProps)(Field);
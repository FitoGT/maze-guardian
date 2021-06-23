import React from 'react'
import './avatar.css'
import { connect } from 'react-redux'
const Avatar = ({ count }) => {
    return (
        <div className="avatar">
            <div className="dialog-1">
                <div className="left-point"></div>
                {count.count == 0 ?
                `Solve the Galaxy Maze by clicking your way out!
                \n use the mouse to guide our Gundam to the exit`
                : `Good Job! you've done ${count.count} moves!`}
            </div>
        </div>
    )
}


const mapStateToProps = ({ count }) => ({
    count: count
})

export default connect(mapStateToProps)(Avatar)
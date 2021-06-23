import React from 'react'
import './avatar.css'
import { connect } from 'react-redux'
const Avatar = ({ count, complete }) => {
    return (
        <div className="avatar">
            <div className="dialog-1">
                <div className="left-point"></div>
                {complete.complete ?
                    'Good Job!! you found our way out!'
                    :
                    count.count == 0 ?
                        `Solve the Galaxy Maze by clicking your way out!
                    \n use the mouse to guide our Gundam to the exit`
                        : `Good Job! you've done ${count.count} moves!`
                }
            </div>
        </div>
    )
}


const mapStateToProps = ({ count, complete }) => ({
    count: count,
    complete: complete
})

export default connect(mapStateToProps)(Avatar)
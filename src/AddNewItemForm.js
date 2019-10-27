import React from "react"
import "./App.css"
import styles from "./AddNewItemForm.module.css"

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        taskValue: "",
    }
    onAddItem = () => {
        let newText = this.state.taskValue
        if (!newText) {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
            this.props.addItem(newText)
        }
    }

    onItemChange = (e) => {
        let newValue = e.currentTarget.value

        this.setState({
            error: false,
            taskValue: newValue
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.addItem()
        }
    }

    render = () => {
        let classForError = this.state.error ? "error" : ""

        return (
            <div className={styles.todoListNewTaskForm}>
                <input onKeyPress={this.onKeyPress} className={classForError} value={this.state.taskValue}
                       onChange={this.onItemChange} type="text" placeholder="Add new Item"/>
                <button onClick={this.onAddItem}>Add</button>
            </div>
        )
    }
}

export default AddNewItemForm
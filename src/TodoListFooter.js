import React from "react"
import "./App.css"
import styles from "./Footer.module.css"

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    }

    onFilterChange = (newFilterValue) => {
        this.props.changeFilter(newFilterValue)
    }

    onHidden = () => {
        this.setState({
            isHidden: true
        })
    }
    onShow = () => {
        this.setState({
            isHidden: false
        })
    }

    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filterActive" : ""
        let classForCompleted = this.props.filterValue === "Completed" ? "filterActive" : ""
        let classForActive = this.props.filterValue === "Active" ? "filterActive" : ""

        return (
            <div className={styles.todoListFooter}>
                {!this.state.isHidden && <div>
                    <button onClick={() => {
                        this.onFilterChange("All")
                    }} className={`${classForAll} ${styles.allButton}`}>All
                    </button>
                    <button onClick={() => {
                        this.onFilterChange("Completed")
                    }} className={`${classForCompleted} ${styles.completedButton}`}>Completed
                    </button>
                    <button onClick={() => {
                        this.onFilterChange("Active")
                    }} className={`${classForActive} ${styles.activeButton}`}>Active
                    </button>
                </div>}
                {!this.state.isHidden ? <span onClick={this.onHidden}>Hide</span>
                    : <span onClick={this.onShow}>Show</span>}
            </div>

        )
    }
}

export default TodoListFooter
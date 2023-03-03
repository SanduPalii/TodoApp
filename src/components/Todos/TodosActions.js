import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../Ui/Button.js'
import styles from './TodosActions.module.css'

function TodosActions({
    resetTodos,
    deleteCompletedTodos,
    completedTodosExists,
}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Delete completed Todos"
                onClick={deleteCompletedTodos}
                disabled={!completedTodosExists}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions

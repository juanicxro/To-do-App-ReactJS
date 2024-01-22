import React from "react";
import { Navbar } from "./components/Navbar/navbar";
import { InsertBar } from "./components/TaskInsertBar/InsertBar";
import styles from "./app.module.css";
import { TodoContainer } from "./components/TodoList/todoContainer";

function App() {
  const [todoContent, setTodoContent] = React.useState<string[]>([]);
  const [newTodoContent, setNewTodoContent] = React.useState<string[]>([]);

  const handleNewTodoItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoContent([...todoContent, ...newTodoContent]);
    setNewTodoContent([""]);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoContent([event.target.value]);
  };

  const handleDeleteTodoItem = (index: number) => {
    const todoContentWithoutDeletedOne = [...todoContent];
    if (index !== -1) {
      todoContentWithoutDeletedOne.splice(index, 1);
    }
    console.log(todoContentWithoutDeletedOne);
    setTodoContent(todoContentWithoutDeletedOne);
  };

  return (
    <div className={styles.Container}>
      <Navbar />
      <InsertBar
        name="todoContent"
        value={newTodoContent}
        handleChange={handleOnChange}
        handleNewTodoItem={handleNewTodoItem}
      />
      <TodoContainer
        handleDeleteComment={handleDeleteTodoItem}
        todoContent={todoContent}
      />
    </div>
  );
}

export default App;

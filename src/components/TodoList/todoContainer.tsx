import styles from "./todoContainer.module.css";
import Clipboard from "../../icons/Clipboard.svg";
import layer from "../../icons/layer.svg";
import layerCheck from "../../icons/layerCheck.svg";
import trash from "../../icons/trash.svg";
import { useState } from "react";

const TodoListEmpty = () => {
  return (
    <div className={styles.ContainerSemItem}>
      <img src={Clipboard}></img>
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};

const TodoListWithItem = ({ content, onClick }) => {
  const [checked, setChecked] = useState(layer);
  const handleClickCheck = () => {
    checked === layer ? setChecked(layerCheck) : setChecked(layer);
  };
  return (
    <div className={styles.ContainerComItem}>
      <img onClick={handleClickCheck} src={checked}></img>
      <p
        className={
          checked === layerCheck ? styles.ConteudoChecked : styles.Conteudo
        }
      >
        {content}
      </p>
      <img onClick={onClick} src={trash}></img>
    </div>
  );
};

export const TodoContainer = ({ todoContent, handleDeleteComment }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.taskInfo}>
        <div className={styles.taskTodo}>
          <p>
            Tarefas criadas <span className={styles.taskNumber}>0</span>
          </p>
        </div>
        <div className={styles.taskDone}>
          <p>
            Concluidas <span className={styles.taskNumber}>0</span>
          </p>
        </div>
      </div>
      {todoContent.length > 0 ? (
        todoContent.map((content) => {
          return (
            <TodoListWithItem onClick={handleDeleteComment} content={content} />
          );
        })
      ) : (
        <TodoListEmpty />
      )}
    </div>
  );
};

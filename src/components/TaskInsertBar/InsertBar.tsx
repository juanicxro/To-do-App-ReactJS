import React from "react";
import styles from "./InsertBar.module.css";
import buttonLogo from "../../icons/buttonIcon.svg";

interface Props {
  name: string;
  value: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewTodoItem: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const InsertBar: React.FC<Props> = ({
  handleChange,
  handleNewTodoItem,
  name,
  value,
}) => {
  return (
    <form onSubmit={handleNewTodoItem} className={styles.Container}>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="Adicione uma nova tarefa"
      />

      <button className={styles.button}>
        Criar
        <img src={buttonLogo} />
      </button>
    </form>
  );
};

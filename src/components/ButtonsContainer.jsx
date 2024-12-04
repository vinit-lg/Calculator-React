import styles from "./ButtonsContainer.module.css";

const ButtonsConatiner = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button onClick={() => onButtonClick(buttonName)}  className={styles.buttons}>{buttonName}</button>
      ))}
      ;
    </div>
  );
};

export default ButtonsConatiner;

import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import "./CreateCard.css";

const CreateCard = ({ cardsList, handleAddCard }) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [unit, setUnit] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [error, setError] = useState("");

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageSrc(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleNewUnitChange = (event) => {
    setNewUnit(event.target.value);
  };

  const cleanInputs = () => {
    setWord("");
    setTranslation("");
    setImageSrc("");
    setNewUnit("");
    setUnit("");
    setError("");
  }

  const selectedUnit = unit === "new" ? newUnit : unit;

  const handleCardValue = () => {
    const unitExists = selectedUnit in cardsList;
    if (unitExists) {
      const currentState = cardsList;
      currentState[selectedUnit].push({word: word, translation: translation, imageSrc: imageSrc})
      handleAddCard(currentState);
      cleanInputs();
    } else if (newUnit === "") {
      setError("Заполните все поля");
    } else {
      const currentState = cardsList;
      currentState[selectedUnit] = [{word: word, translation: translation, imageSrc: imageSrc}]
      handleAddCard(currentState);
      cleanInputs();
    }
  }

  const handleCreateCard = () => {
    if (word.trim() === "" || translation.trim() === "" || imageSrc.trim() === "" || unit.trim() === "") {
      setError("Заполните все поля");
    } else {
      handleCardValue ();
    }
  };

  return (
    <div className="createCard">
      <BurgerMenu />
      <h1 className="createCard-title">Новая карточка</h1>
      <div className="createCard_image-container">
        {imageSrc ? (
          <img src={imageSrc} alt="изображение" />
        ) : (
          <p>Изображение не добавлено</p>
        )}
      </div>
      <input
        type="text"
        placeholder="Слово"
        value={word}
        onChange={handleWordChange}
      />
      <input
        type="text"
        placeholder="Перевод"
        value={translation}
        onChange={handleTranslationChange}
      />
      <input
        type="text"
        placeholder="Ссылка на изображение"
        value={imageSrc}
        onChange={handleImageChange}
      />
      {unit === 'new' ? <input
                            type="text"
                            placeholder="Введите название темы"
                            value={newUnit}
                            onChange={handleNewUnitChange}
                            /> : ''
      }
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="" disabled>Выберите Unit</option>
        <option value="new" onChange={handleUnitChange}>Создать новую тему</option>
        {Object.keys(cardsList).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <p className="createCard_error">{error}</p>
      <button onClick={handleCreateCard}>Создать</button>
    </div>
  );
};

export default CreateCard;

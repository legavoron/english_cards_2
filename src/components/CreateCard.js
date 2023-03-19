import React from 'react';
import './CreateCard.css';

const CreateCard = () => {
  return (
    <div className="create-card">
      <h2>Create Card</h2>
      <form>
        <label htmlFor="front">Front:</label>
        <input type="text" id="front" name="front" required />

        <label htmlFor="back">Back:</label>
        <input type="text" id="back" name="back" required />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCard;

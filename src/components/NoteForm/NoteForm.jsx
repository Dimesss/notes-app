import React, { useState } from "react";
import "./NoteForm.style.css";

const INITIAL_STATES = {
  formData: {
    title: "",
    body: "",
    color: "white",
  },
};

function NoteForm() {
  // const [getter <any>, setter <function>]
  const [formData, setFormData] = useState({ ...INITIAL_STATES.formData });

  /**
   * @description - Changing title
   * @param {string} value
   */
  const onTitleChange = (value = "") => {
    setFormData({
      ...formData,
      title: value,
    });
  };

  /**
   * @description - Change body
   * @param {string} value
   */
  const onBodyChange = (value = "") => {
    setFormData({
      ...formData,
      body: value,
    });
  };

  /**
   * @description - Sets color of note if the color item is clicked
   * @param {string} selectedColor - color of the selected item color
   */
  const onColorItemClick = (selectedColor = "") => {
    setFormData({ ...formData, color: selectedColor });
  };
  /**
   * @description - on form submit, create new note
   * @param {Event} evt
   */

  const onSubmit = (evt) => {
    evt.preventDefault();

    //Validation
    const isTitleValid = !!formData.title;
    if (!isTitleValid) {
      alert("Setidaknya tulis title dek!");
      return;
    }

    //Saving
    const existingData = localStorage.getItem("notes");
    if (!existingData) {
      const payload = [{ ...formData }];
      localStorage.setItem("notes", JSON.stringify(payload));
    } else {
      const currentData = JSON.parse(existingData);
      const payload = [{...formData},  ...currentData];
      localStorage.setItem("notes", JSON.stringify(payload));
    }

    //Clean form
    setFormData({ ...INITIAL_STATES.formData });
  };

  return (
    <div className="c-note-form" style={{ backgroundColor: formData.color }}>
      <form name="note-form" autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          name="note-title"
          id="note-title"
          placeholder="title"
          className="note-title-input"
          defaultValue={formData.title}
          onChange={(evt) => onTitleChange(evt.target.value)}
        />

        <textarea
          name="note-body"
          id="note-body"
          cols="30"
          rows="10"
          placeholder="write..."
          className="note-body-input"
          defaultValue={formData.body}
          onChange={(evt) => onBodyChange(evt.target.value)}
        ></textarea>

        <div className="c-color-selector">
          <div
            className={`c-color-selector__item c-color-selector__item--white ${
              formData.color === "white"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("white")}
          ></div>
          <div
            className={`c-color-selector__item c-color-selector__item--pink ${
              formData.color === "pink"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("pink")}
          ></div>
          <div
            className={`c-color-selector__item c-color-selector__item--grey ${
              formData.color === "grey"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("grey")}
          ></div>
        </div>

        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default NoteForm;

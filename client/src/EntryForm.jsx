import React, { useState } from 'react';
import placeholder from './images/placeholder-image-square.jpg';

export default function EntryForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');

  const handleImageChange = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      title: title,
      photoUrl: photoUrl,
      notes: notes,
    };
    onSave(formValues);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setPhotoUrl('');
    setNotes('');
  };

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entry-form" onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={photoUrl || placeholder}
              alt="placeholder"
            />
          </div>
          <div className="column-half">
            <label className="margin-bottom-1 d-block" for="title">
              Title
            </label>
            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formTitle"
              name="formTitle"
              onChange={(event) => setTitle(event.target.value)}
            />
            <label className="margin-bottom-1 d-block" for="photoUrk">
              Photo URL
            </label>
            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <label className="margin-bottom-1 d-block" for="formNotes">
              Notes
            </label>
            <textarea
              required
              className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
              name="formNotes"
              id="formNotes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              cols="30"
              rows="10"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <button
              className="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <button className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

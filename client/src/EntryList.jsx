import React from 'react';

export default function EntryList(visible) {
  return (
    <div class="container" data-view="entries">
      <div class="row">
        <div class="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <button id="formLink" class="white-text form-link" href="#">
              NEW
            </button>
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="column-full">
          <ul class="entry-ul" id="entryUl"></ul>
        </div>
      </div>
    </div>
  );
}

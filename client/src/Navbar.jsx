export default function Navbar() {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <a id="entriesLink" class="entries-link white-text">
                Entries
              </a>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

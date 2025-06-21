function Welcome({ name, setName, handleCreateAccount }) {
  return (
    <section id="welcome">
      <h3 className="text-large special-shadow">
        365 Days. <br />
        365 Words.
      </h3>

      <h6>
        Build your dictionary
        <br />
        start Challenge today!
      </h6>
      <div id="input">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="wirte your name..."
        />
        <button
          disabled={!name}
          onClick={() => {
            handleCreateAccount(name);
          }}
        >
          <h6>start &rarr;</h6>
        </button>
      </div>
    </section>
  );
}

export default Welcome;

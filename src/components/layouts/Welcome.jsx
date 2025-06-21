function Welcome() {
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
        <input type="text" placeholder="wirte your name..." />
        <button>
          <h6>start &rarr;</h6>
        </button>
      </div>
    </section>
  );
}

export default Welcome;

function Layout(prop) {
  console.log(prop);
  const { children } = prop;
  return (
    <>
      <header className="wordigo-logo-header">
        <h1 className="wordigo-logo">Wordigo</h1>
      </header>

      <main>{children}</main>
      <footer>
        <small>created by</small>
        <a target="_blank" href="https://github.com/sakir-shaikh">
          <img
            src="https://avatars.githubusercontent.com/u/150510411?v=4&size=64"
            alt="pft" //pft stands for the profile picture.
          />
          <p>@sakir-shaikh</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}

export default Layout;

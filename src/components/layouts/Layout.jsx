function Layout(prop) {
  console.log(prop);
  const { children } = prop;
  return (
    <>
      <header>
        <h1 className="text-gradient">Wordigo</h1>
      </header>
      {children}
      <footer>
        <small>created by</small>
        <a target="_blank" href="https://github.com/sakir-shaikh">
          <p>@sakir-shaikh</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}

export default Layout;

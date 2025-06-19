
function Layout(prop) {
    console.log(prop);
    const { children } = prop;
  return (
      <>
          <header>header</header>
          {children}
          <footer>footer</footer>
    </>
  )
}

export default Layout
export default (attrs) => {
  return (
    <>
      <header>header</header>
      <main {...attrs}>main with attrs</main>
      <footer>footer</footer>
    </>
  )
}

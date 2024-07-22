export default function Afterlogin() {
  return (
    <>
      <section>
        <div role='navigation'>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a to="#"><li>Home</li></a>
              <a to="#"><li>About</li></a>
              <a to="#"><li>Info</li></a>
              <a to="#"><li>Contact</li></a>
              <a to="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
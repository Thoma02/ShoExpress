export default function Nav() {
    return(
        <nav>
        <div id="menu-and-title">
          <img src="./assets/nav/burger.svg" alt="Menu"/>
          <h1>SHO<span class="blue-text">E</span>XPRESS</h1>
        </div>
        <div id="nav-links">
          <a class="blue-text" href="">Home</a>
          <a href="">Shop</a>
          <a href="">Order</a>
          <a href="">Contact</a>
          <a href="">Log in</a>
        </div>
        <img id="search" src="./assets/nav/search.svg" alt="Search"/>
      </nav>
    )
}
import ThemeButton from "./themeButton";

function Header() {
  return (
    <header>
      <div className="logo">Theme Switch</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

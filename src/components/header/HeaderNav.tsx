import "./HeaderNav.scss";

function HeaderNav() {
  const navLinks = [
    { label: "Board", path: "/" },
    { label: "Account", path: "/account" },
  ];

  return (
    <header className="header-nav">
      <nav>
        {navLinks.map((link) => (
          <a href={link.path}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}

export default HeaderNav;

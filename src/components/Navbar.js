import { NavLink } from "./NavLink.js";

function Navbar({ links }) {
  const navItems = [
    { label: "Hjem", url: "/" },
    { label: "Om oss", url: "/" },
  ];
  return (
    <nav>
      <ul className="flex flex-row w-full justify-center gap-16 my-5">
        {navItems.map((navItem) => (
          <NavLink key={navItem.label} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

import { NavLink } from "./NavLink.js";

function Navbar({ links }) {
  const navItems = [
    // { label: "Hjem", url: "/" },
    // { label: "Om oss", url: "/" },
  ];
  return (
    <nav>
      <h1 className="text-6xl font-serif text-orange-500 text-left">
        GreekingOut
      </h1>
      <ul className="flex flex-row w-full justify-center gap-16 my-5">
        {navItems.map((navItem) => (
          <NavLink key={navItem.label} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

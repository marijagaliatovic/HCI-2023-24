import Link from "@/node_modules/next/link";

const pages = {
  Home: "/",
  Accomodation: "/accomodation",
  Information: "/information",
  Services: "/services",
  Contact: "/contact",
};

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-center">
      <ul className="flex space-x-10 items-center">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link href={path} className=" text-black font-bold hover:underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

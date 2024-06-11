import Link from "next/link";

const NavSections = () => {
  const navLinks = [
    "marketing-digital",
    "diseno-web",
    "desarrollo-software",
    "branding",
    "desarrollo-movil",
  ];

  return (
    <div className="w-full">
      <Link
        href={"/blog"}
        className="text-3xl text-[#3D3D3D] font-medium uppercase"
      >
        Secciones
      </Link>
      <ul className="flex lg:flex-col gap-4 overflow-x-auto mt-4">
        {navLinks.map((navLink, index) => (
          <li className=" capitalize font-semibold hover:underline hover:font-bold transition-all duration-500 whitespace-nowrap ">
            <Link href={"/blog/[slug]"} as={`/blog/${navLink}`}>
              {navLink === "diseno-web"
                ? "Diseño Web"
                : navLink.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSections;

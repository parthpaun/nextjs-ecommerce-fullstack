import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  const show = false;
  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all"
      }
    >
      <nav className="bg-slate-800 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
        <div className="flex">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link href="/">E-Com</Link>
          </h1>
          <div className="flex mx-5">
            <Link
              href="/products"
              className="text-white grid place-content-center m-2 md:mb-0"
            >
              Products
            </Link>
            <Link
              href="/catagories"
              className="text-white grid place-content-center m-2 md:mb-0"
            >
              Catagories
            </Link>
          </div>
        </div>
        {/* <Search /> */}
      </nav>
    </aside>
  );
}

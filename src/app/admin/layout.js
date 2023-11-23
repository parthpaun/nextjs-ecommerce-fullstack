import SideBarUserDetails from "./components/SideBarUserDetails";
import Drawer from "./components/Drawer";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div>
      <Drawer>
        {/* side bar content */}
        <div className="menu p-10 w-60 min-h-full bg-base-200 text-base-content">
          <div>
            
          </div>
          <SideBarUserDetails />
          <ul>
            <li>
              <Link
                href="/admin/products"
                className="text-white grid place-content-center m-2 md:mb-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/admin/categories"
                className="text-white grid place-content-center m-2 md:mb-0"
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>
        {/* main content */}
        <div>{children}</div>
      </Drawer>
    </div>
  );
};

export default Layout;

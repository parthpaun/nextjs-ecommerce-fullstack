import Drawer from "./../components/Drawer";

const Layout = ({ children }) => {
  return (
    <div>
      <Drawer>{children}</Drawer>
    </div>
  );
};

export default Layout;

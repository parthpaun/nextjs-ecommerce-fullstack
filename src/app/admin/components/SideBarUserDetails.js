import Avatar from "./Avatar";

const SideBarUserDetails = () => {
  return (
    <div className="flex mb-5 items-start gap-5 items-center">
      <Avatar />
      <div className="flex flex-col">
        <span>Admin</span>
        <span>Administrator</span>
      </div>
    </div>
  );
};
export default SideBarUserDetails;

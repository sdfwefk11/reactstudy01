import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../db";

const User = () => {
  console.log(useOutletContext());
  const { userId } = useParams();
  return (
    <div>
      <h1>
        Product with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </div>
  );
};
export default User;

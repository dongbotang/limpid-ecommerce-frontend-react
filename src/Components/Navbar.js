import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const user=""
  const cartData = useSelector((state) => state.productslice);
  return (
    <div>
      <div className="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-medium text-blue-700">Redux Shop</h3>
        </div>
        <div className="space-x-6 flex flex justfy-center items-center gap-2">
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <div className="ml-auto flex justfy-center items-center gap-2 ">
            <Link to="/carts">
              <div className="flex justfy-center items-center gap-1 ">
                <BsFillCartCheckFill />
                Carts {`${cartData.length > 0 ? `(${cartData.length})` : ""}`}
              </div>
            </Link>
            {user ? (
              <div title={user.name} id="username">
                <Link to="/profile" prefetch={false}>
                  <span>Profile</span>
                </Link>
                <span
                // onClick={logoutHandler
                >
                  Logout
                </span>
              </div>
            ) : (
              <Link to="/login" passHref>
                <div className="flex justfy-center items-center gap-1">
                  <FaUser /> Sign In
                </div>
              </Link>
            )}
            {user && user.isAdmin && (
              <div title="Admin" id="adminmenu">
                <Link to="/admin/userList" passHref prefetch={false}>
                  <span>Users</span>
                </Link>
                <Link to="/admin/productList/1" passHref prefetch={false}>
                  <span>Products</span>
                </Link>
                <Link to="/admin/orderList" passHref prefetch={false}>
                  <span>Orders</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

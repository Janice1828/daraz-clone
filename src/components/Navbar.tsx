import { Link } from "react-router-dom";
import NavLogo from "../../src/Images/nav-logo.png";
import NavWhiteLogo from "../../src/Images/daraz-white-nav-logo.png";
import languageLogo from "../../src/Icons/internet.png";
import cartImg from "../../src/Icons/icons8-cart-24.png";
import userIcon from "../../src/Icons/user.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [productTitle, setProductTitle] = useState(" ");
  const navigate = useNavigate();
  const title: string = "sleek";
  const handleSearchProducts = () => {
    navigate(`/products?title=${productTitle}`);
  };
  return (
    <div className="nav pt-0 d-block w-100 pt-3 pb-3">
      <div className="w-75 m-auto">
        <div className="nav-section mt-3 mt-lg-0 d-flex gap-4 flex-wrap flex-lg-nowrap align-items-center justify-content-between">
          <Link to="/">
            <img
              src={NavWhiteLogo}
              id="nav-bh-white-logo"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Link>
          <form className="w-50" onSubmit={handleSearchProducts}>
            <input
              type="text"
              onChange={(e) => {
                setProductTitle(e.target.value);
              }}
              className="w-100 px-3 py-2 border"
              id="nav-search-input"
              value={productTitle}
              placeholder="Search in BH Suppliers"
            />
          </form>
          <div className="d-flex gap-4 flex-wrap flex-md-nowrap align-items-center">
            <Link
              to="/login"
              className="login-link text-decoration-none d-flex align-items-center gap-2"
            >
              <img src={userIcon} alt="" id="nav-user-icon" />

              <span> Login</span>
            </Link>
            <p className="border-y bg-light"></p>
            <Link to="/signup" className="signup-link text-decoration-none">
              <span>Signup</span>
            </Link>
            <div className="d-flex align-items-center gap-1 cursor-pointer">
              <img src={languageLogo} alt="" id="language-logo" />
              <span id="language">EN</span>
            </div>
            <Link to="/cart">
              <img src={cartImg} alt="" id="nav-cart-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

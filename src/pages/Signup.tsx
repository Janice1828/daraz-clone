import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Year, Day, Month } from "../data/Date";
import Facebook from "../../src/Icons/icons8-facebook-24.png";
import Googleplus from "../../src/Icons/icons8-google-plus-50.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const handleUserRegistration = () => {
    const userLists = localStorage.getItem("users");
    const phoneReg = "[9][7-8]d{8}";
    const passwordReg = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";
    const newUsers = {
      phone: phoneNumber,
      fullName: fullName,
      password,
    };
    if (userLists) {
      let existingUsers = JSON.parse(userLists);
      existingUsers.push(newUsers);
      localStorage.setItem("users", JSON.stringify(existingUsers));
    } else {
      let newUser: any = JSON.stringify([newUsers]);
      localStorage.setItem("users", newUser);
    }
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-container-width m-auto pt-5 ">
          <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column">
            <h3 className="signup-title">Create Your BH Suppliers Account</h3>
            <span className="login-page-link">
              Already Member?
              <Link to="/login" className="text-decoration-none">
                &nbsp;Login &nbsp;
              </Link>
              here.
            </span>
          </div>
          <div className="mt-3">
            <form
              className="row m-0 gx-lg-5 gx-0 gy-3 signup-form"
              onSubmit={handleUserRegistration}
            >
              <div className="col-lg-6">
                <label htmlFor="phoneNo" className="signup-form-label d-block">
                  Phone Number *
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="signup-form-input"
                  placeholder="Please enter your phone number"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="fullName" className="signup-form-label d-block">
                  Full Name *
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  className="signup-form-input"
                  placeholder="Enter your first and last name"
                />
              </div>
              <div className="col-lg-6">
                <label
                  htmlFor="Verification Code from WhatsApp*"
                  className="signup-form-label"
                >
                  Verification Code from WhatsApp
                </label>
                <input
                  type="text"
                  className="signup-form-input"
                  placeholder="Verification code"
                />
                <div className="d-flex justify-content-end pt-2">
                  <Link to="#" className="code-receiving-methods">
                    Get code Via other methods
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex gap-2 align-items-center pb-2">
                  <input
                    type="checkbox"
                    id="signup-checkbox"
                    className="rounded-0"
                  />
                  <label
                    htmlFor="signup-checkbox"
                    className="signup-form-label mb-0"
                  >
                    i'd like to receive exculsive offers and promotions
                    <br /> via SMS
                  </label>
                </div>
                <button className="signup-btn">SIGN UP</button>
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="signup-form-label d-block">
                  Password *
                </label>
                <input
                  type="text"
                  className="signup-form-input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Minimum 6 characters with a number and a letter"
                />
              </div>
              <div className="col-lg-6">
                <p className="agreement">
                  By clicking "SIGN UP", I agree to BH Supplier's
                  <Link to="#" className="txt-blue text-decoration-none">
                    &nbsp;Terms of Use&nbsp;
                  </Link>
                  and
                  <Link to="#" className="txt-blue text-decoration-none">
                    &nbsp; Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="col-lg-6 d-flex gap-1 flex-sm-row flex-column">
                <div className="w-68">
                  <label htmlFor="" className="signup-form-label">
                    Birthday
                  </label>
                  <div className="d-flex align-items-center gap-1">
                    <select className="signup-form-input">
                      <option value="" selected disabled>
                        Month
                      </option>
                      {Month.map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                    <select className="signup-form-input">
                      <option value="" selected disabled>
                        Day
                      </option>
                      {Day.map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                    <select className="signup-form-input">
                      <option disabled selected>
                        Year
                      </option>
                      {Year.map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-32">
                  <label htmlFor="" className="signup-form-label">
                    Gender
                  </label>
                  <select name="" className="signup-form-input w-100" id="a">
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 ">
                <p className="or-signup-with mb-2">Or, sign up with</p>
                <div className="d-flex align-items-center gap-1">
                  <Link
                    to="#"
                    className="signup-with-facebook justify-content-center text-decoration-none d-flex align-items-center gap-3"
                  >
                    <img
                      src={Facebook}
                      className="signup-facebook-icon"
                      alt=""
                    />
                    <span>Facebook</span>
                  </Link>
                  <Link
                    to="#"
                    className="signup-with-google justify-content-center text-decoration-none d-flex align-items-center gap-3"
                  >
                    <img
                      src={Googleplus}
                      className="signup-google-plus-icon"
                      alt=""
                    />

                    <span> Google</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

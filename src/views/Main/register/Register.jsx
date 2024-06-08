import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { setAuthUser } from "../../../../localStorage";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [NationalIDcard, setNationalIDcard] = useState("");
  const [address, setAddress] = useState("")
  const [img, setImg] = useState(null)
  const [gender, setGender] = useState()
  const [dateOfBirth, setDate] = useState("")
  const [IDfromImage, setID] = useState(null)

  const [data, setData] = useState(null)
  // const handleUploadImg=(e)=>{
  //   e.preventDefault()
  //   const formdata = new FormData()
  //   console.log("imggggggggg",img);
  //   formdata.append('ImageCard' , img)
  //   axios.post('https://localhost:7285/api/Account/GetDataModel', formdata , {
  //     headers:{
  //       "Content-Type":"multipart/form-data"
  //     }
  //   }).then(response =>{
  //     console.log("id:" , response);
  //     setID(response.data.nid);
  //     setAuthUser(response.data);
  //   })
  // }
  const handleSubmit = () => {
    console.log(
      firstName,
      userName,
      email,
      password,
      confirmPassword,
      IDfromImage,
      img,
      gender,
      address,
      dateOfBirth
    );
    const formdata = new FormData()
    formdata.append('Email', email)
    formdata.append('Password', password)
    formdata.append('UserName', userName)
    formdata.append('SSN', IDfromImage)
    formdata.append('Gender', gender)
    formdata.append('FirstName', firstName)
    formdata.append('LastName', userName)
    formdata.append('DateOfBirth', dateOfBirth)
    formdata.append('Address', address)
    formdata.append('ImageCard', img)
    axios.post('https://localhost:7285/api/Account/Register', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      setData(response)
      setAuthUser(response.data)
      console.log("el data ahe ya waalalaaaaaaa", response);
    }).catch(err => {
      console.log(err);
    })
  };
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form>
                  <div className="mb-3"></div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        firstName{""}
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="firstName">
                        userName{" "}
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        id="userName"
                        placeholder="Enter your username"
                        required
                      />
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <span className="small mb-1">Brithday</span>
                        <input
                          className="form-control"
                          type="date"
                          placeholder="Enter your Brithday"
                          required
                          onChange={(e) => setDate(e.target.value)}
                          value={dateOfBirth}
                        />
                      </div>
                      <div className="mb-3">
                        <span className="small mb-1">address</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your address"
                          required
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 ">
                    <div className="col-md-6 ">
                      <span className="small mb-1">NationalIDcard</span>
                      <input
                        className="form-control"
                        type="file"
                        // value={NationalIDcard}
                        id="inputGroupFile02"
                        onChange={(e) => {
                          setImg(e.target.files[0])
                        }
                        }


                      />
                      {/* <button className="btn btn-success "  onClick={(e)=>handleUploadImg(e)}>Get Id </button> */}

                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="email">
                        {" "}
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required

                      />
                    </div>
                    <div className="col-md-6">
                      <span className="small mb-1">National ID card</span>
                      <input
                        className="form-control"
                        type="number"
                        placeholder={"IDfromImage"}
                        // value={IDfromImage}
                        required
                        // readOnly


                        onChange={(e) => setNationalIDcard(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="password">
                        Password{" "}
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="confirmPassword">
                        Confirm Password{" "}
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" value={0} onChange={(e) => setGender(e.target.value)} />
                    <input type="radio" name="gender" id="dot-2" value={1} onChange={(e) => setGender(e.target.value)} />
                    <span className="gender-title">Gender</span>
                    <div className="category">
                      <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="gender">Male</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="gender">Female</span>
                      </label>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubmit()}
                    //   type="submit"
                    type="button"
                    value="Register"
                  >
                    Register
                  </button>
                  <div className="forgot-pass">
                    <Link to={"/login"}> Forgot Password?</Link>
                  </div>
                  <div className="signup-link">
                    Already a member? <Link to={"/login"}>Signup now</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

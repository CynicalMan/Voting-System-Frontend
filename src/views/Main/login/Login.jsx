import React,{ useState, useRef } from "react";
import "./Login.css";
import Webcam from "react-webcam";
import axios from "axios";
import { getAuthUser, removeAuthUser, setAuthUser } from "../../../../localStorage"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [file , setfile] = useState();
  const [data,setData]=useState(null);
  const [personalImg , setImg] = useState(null);
  const WebRef = useRef(null);
  const navigate = useNavigate()
  
  // const dataURLtoBlob = (dataurl) => {
  //   const arr = dataurl.split(',');
  //   const mime = arr[0].match(/:(.*?);/)[1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new Blob([u8arr], { type: mime });
  // };


  // const ShowImage = () => {
  //  const imgSrc =  WebRef.current.getScreenshot()
  //  setImg(imgSrc)
  //  console.log("persoonnaaaal imammamamageeee",personalImg);
  // };
  // const navigate = useNavigate()
  // const handleimagechange=(e)=>{
  //    file = e.target.files[0];
     
  // }
  removeAuthUser()
  const onButtonClick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(file);
    console.log(password);
    console.log(personalImg);
    // const imageBlob = dataURLtoBlob(personalImg);
    const formData = new FormData();
    // formData.append('ImageCard',file)
    formData.append('Password',password)
    formData.append('Email',email)
    // formData.append('FaceImage',imageBlob , 'screen.jpg')
    
    console.log("=================>formdata============>",formData);
    axios.post("https://localhost:7285/api/Account/Login", formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }).then(response=>{
        setData(response.data);
        
        console.log("data",response);
        setAuthUser(response.data);
        if (response.data.role === "Admin") {
          navigate("/Dashboard")
        }else{
          navigate("/")
        }
    }).catch(error=>{
      console.log("error" , error);
    });
  };
  return (
    <div className="center">
      <div className="container login-container">
        <div className="text">Login Form</div>
        <form>
          <div className="data">
            <label>Email or Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Username or Email"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <div className="data">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
            <label className="errorLabel">{passwordError}</label>
          </div>

          <hr />
          <div className="img-thumbnail">
            <Webcam ref={WebRef} className="img-thumbnaill" />
            <button
              className="btn btn-primary mb-2  "
              onClick={() => {
                // ShowImage();
              }}
            >
              Scan image in console
            </button>
          </div>
          <hr />
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={(e) => setfile(e.target.files[0])}
            />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload
            </label>
          </div>
          <div className="btn">
            <div className="inner"></div>
            <button type="submit" onClick={onButtonClick}>
              login
            </button>
            
          </div>
          <div className="forgot-pass">
            <Link to={"/register"}> Forgot Password?</Link>
          </div>
          <div className="signup-link">
            Not a member? <Link to={"/register"}>Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

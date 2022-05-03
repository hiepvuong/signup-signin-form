import "./App.css";
import SigninForm from "./components/SigninForm";
import { useState } from "react";
import SignupForm from "./components/SignupForm";

function App() {
  const userInfo = JSON.parse(window.localStorage.getItem("details"))

  const [user, setUser] = useState({name: "", email:""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(userInfo);

    if(details.email === userInfo.email && details.password === userInfo.password){
      console.log("Logged in");
      setUser ({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log("Details do not match!");

      setError("Thông tin không chính xác")
    }
  }

  const Logout = () => {
    console.log("Logout")

    setUser({
      name: "",
      email: ""
    })
  }
  return (
    <div className="App">
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <SigninForm Login={Login} error={error} />
      )}
      <SignupForm error={error} />
    </div>
  );
}

export default App;

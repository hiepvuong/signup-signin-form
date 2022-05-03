import React from 'react'
import { useState } from 'react'

function SignupForm() {
  const [ details, setDetails] = useState({name: "", email: "", password: "", confirmPassword: ""})
  const [error, setError] = useState("")
    
  const handleSubmit = e => {
      e.preventDefault();
      if(details.name === "" || details.email === "" || details.password === "" || details.confirmPassword === ""){
          setError("Thông tin không được để trống")
        }
        if(details.confirmPassword !== details.password) {
            setError("Xác nhận lại Mật khẩu đê")
        }
        console.log(details)
        window.localStorage.setItem("details", JSON.stringify(details));
        setDetails({
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        })
        setError("Đăng ký thành công")
    }

  return(
        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>ĐĂNG KÝ</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Tên Đăng Nhập</label>
                <input type="text" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật Khẩu:</label>
                <input type="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Xác Nhận Mật Khẩu:</label>
                <input type="password" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}/>
            </div>
            <input type="submit" value="Đăng kí" />
        </div>
        </form>
        </div>
  );
}

export default SignupForm;

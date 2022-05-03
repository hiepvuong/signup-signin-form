import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SigninForm({ Login, error}) {
    const [ details, setDetails] = useState({name: "", email: "", password: ""})
    
    const handleSubmit = e => {
        e.preventDefault();

        Login(details);
    }

  return (
<div>
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>ĐĂNG NHẬP</h2>
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
            <input type="submit" value="Đăng Nhập" />
            <div>
        <Link to="/signup">Chua co tai khoan? Dang ky</Link>
            </div>
        </div>
    </form>
</div>
  )
}

export default SigninForm;

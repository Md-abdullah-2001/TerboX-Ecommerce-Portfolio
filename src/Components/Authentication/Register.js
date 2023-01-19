import React from 'react';

const Register = () => {
    return (
<div>
    <div className="hero min-h-screen " >
      <form className="hero-content flex-col lg:flex-row lg:justify-start gap-10 lg:mb-9">
    <div className="lg:w-1/2 " data-aos="fade-right">
     
      <img className='w-full h-3/5' src='https://i.ibb.co/6JfxNQ2/12953630-Data-security-27.jpg' alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100 " data-aos="fade-left pt-2">
      <div className="card-body ">
      <h1 className="text-5xl font-bold text-start" style={{color: '#4C93FF'}}>Register</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn " style={{background: '#4C93FF'}}>Register</input>
        </div>
      </div>
    </div>
     </form>
   </div>  
 </div>
    );
};

export default Register;
import React from 'react';

const Login = () => {
    return (
        <div>
          <div className="hero min-h-screen " >
  <form className="hero-content flex-col lg:flex-row lg:justify-start gap-12">
    <div className="lg:w-2/5" data-aos="fade-right">
     
      <img className='w-full h-full' src='https://i.ibb.co/6JfxNQ2/12953630-Data-security-27.jpg' alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100 " data-aos="fade-left py-6">
      <div className="card-body ">
      <h1 className="text-5xl font-bold text-start" style={{color: '#4C93FF'}}>Login</h1>
        
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
          <button className="btn " style={{background: '#4C93FF'}}>Login</button>
        </div>
      </div>
    </div>
  </form>
</div>  
        </div>
    );
};

export default Login;
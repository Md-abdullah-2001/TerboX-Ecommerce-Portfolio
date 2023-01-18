import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navs = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Brands", path: "/brands" },
    { id: 3, name: "Collections", path: "/cameras" },
    { id: 5, name: "Contact Us", path: "/home" },
  ];
  return (
    <div className="relative ">
      <nav className="w-full flex items-center justify-between px-12 bg-white py-6 shadow-lg ">
        <h1 className="text-4xl  font-bold" style={{ color: "#4506CB" }}>
          <Link to='/'>TerboX</Link>
        </h1>

        <ul className="lg:flex  hidden gap-6 mr-4 text-lg font-semibold">
          {navs.map((nav) => (
            <li className="mx-auto transition duration-700 ease-in rounded-2xl hover:bg-red-400 py-1 px-3">
              <Link key={nav.id} to={nav.path }>
                {nav.name}
              </Link>
            </li>
            
          ))}


        </ul>
        <ul className="lg:hidden ml-48">
          {navOpen ? (
            <>
              <XMarkIcon
                className="h-6 w-6 ml-8 "
                onClick={() => setNavOpen(!navOpen)}
              />
              {navs.map((nav) => (
                <li className=" transition duration-700 ease-in rounded-2xl hover:bg-red-400 py-1 px-3">
                  <a key={nav.id} href={nav.path}>
                    {nav.name}
                  </a>
                </li>
              ))}
            
            </>
            
          ) : (
            <Bars3Icon
              className="h-6 w-6 mr-2"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
            
        </ul>
        <div className="flex-none  ">
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
      </nav>
    </div>
  );
};

export default NavBar;

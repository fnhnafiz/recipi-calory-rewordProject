const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
                <ul className="p-2">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Shorma</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold bg-green-400">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a className="hover:bg-green-400 ">Home</a>
            </li>
            <li>
              <details>
                <summary className="hover:bg-green-400">Recipes</summary>
                <ul className="p-2">
                  <li>
                    <a className="hover:bg-green-400 ">About</a>
                  </li>
                  <li>
                    <a className="hover:bg-green-400 ">Search</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:bg-green-400 ">Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-400">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

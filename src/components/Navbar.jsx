import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-aut0 px-4 flex justify-between items-center">
        <div className="nav__logo">
          <Link>
            Think And Code
          </Link>
        </div>
        
        <ul className="nav__links">
            <li className="hover:text-primary"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-primary"><NavLink to="/shop">Shop</NavLink></li>
            <li className="hover:text-primary"><NavLink to="/blog">Pages</NavLink></li>
            <li className="hover:text-primary"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        
        <div className="nav__icons relative">
            <Link className="hover:text-primary">
                <i className="ri-search-line"></i>
            </Link>
            <button className="hover:text-primary">
            <i className="ri-shopping-bag-line"></i>
            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                0
            </sup>
            </button>
            <Link className="hover:text-primary">
                <i className="ri-user-line"></i>
            </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

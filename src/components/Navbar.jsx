import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartModal from "./shop/CartModal";
import avatarImg from "../assets/avatar.png";
import { useLogoutUserMutation } from "../features/auth/authAPI";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [ logoutUser ] = useLogoutUserMutation();
  const navigate = useNavigate();

  // Dropdown menu
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  // Admin dropdown menu
  const adminDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add New Post", path: "/dashboard/add-new-post" },
  ]

  // User dropdown menu
  const userDropDownMenus = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payment", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ]

  const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus];

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
            <Link to="/search" className="hover:text-primary">
                <i className="ri-search-line"></i>
            </Link>
            <button onClick={handleCartToggle} className="hover:text-primary">
            <i className="ri-shopping-bag-line"></i>
            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
            </sup>
            </button>
            <span>
              {
                user && user ? (
                  <>
                    <img onClick={handleDropDownToggle} src={user?.profileImage || avatarImg} alt="" className="size-6 rounded-full cursor-pointer" />
                    {
                      isDropDownOpen && (
                        <div className="absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                          <ul className="font-medium space-y-4 p-2">
                            {
                              dropdownMenus.map((menu, index)=>(
                                <li key={index}>
                                  <Link onClick={()=>setIsDropDownOpen(false)} className="dropdown-items" to={menu.path}>{menu.label}</Link>
                                </li>
                              ))
                            }
                            <li><Link onClick={handleLogout} className="dropdown-items" >Logout</Link></li>
                          </ul>
                        </div>
                      )
                    }
                  </>
                ) : (
                  <Link to="/login" className="hover:text-primary">
                    <i className="ri-user-line"></i>
                  </Link>
                )
              }
            </span>
        </div>
      </nav>

      {
        isCartOpen && <CartModal products={products} isCartOpen={isCartOpen} onClose={handleCartToggle} />
      }
    </header>
  );
};

export default Navbar;

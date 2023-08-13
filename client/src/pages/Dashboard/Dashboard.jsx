import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { dashboardNavItems } from "../../data/dashboardNav";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [menu, setMenu] = useState([]);
    const [showMenu, setShowMenu] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(user);
        if (!user?._id) {
            navigate("/");
        }

    }, [user, navigate]);

    useEffect(() => {

        if (user?._id) {
            const userAccessCodes = user?.accessCode;

            let menuItem = [];

            if (userAccessCodes[0] == 'SuperAdmin') {
                menuItem = [...menu]

                console.log(menuItem)
                setShowMenu(menuItem);
            }
            else {
                userAccessCodes.forEach((userCode) => {

                    const matchItem = menu.filter((item) => {

                        if ((item.menuAccessCode.includes(userCode)) || (item.menuAccessCode.length == 0)) {
                            console.log("true")
                            return true;
                        }
                        else {
                            console.log("false")
                            return false;
                        }
                    })

                    if (matchItem) {

                        menuItem = [...menuItem, ...matchItem];
                    }
                })
            }
            console.log(menuItem)

            setShowMenu(menuItem)
        }
    }, [user, menu]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/page-access', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: localStorage.getItem('access_token')
            }
        })
            .then(res => res.json())
            .then((res) => {
                if (res.pageInfo) {

                    setMenu(res.pageInfo.menu);
                }
            });
    }, [user])

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   p-4 bg-gradient-to-t from-white via-[#E6FFFF] to-white ">

                <label htmlFor="my-drawer-2" className="btn bg-[#6378ad] mb-6 text-white drawer-button lg:hidden">Dashboard</label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side   x ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  flex-nowrap scroll-auto   p-4 w-80 h-full bg-slate-200 text-xl gap-4 text-base-content ">
                    <li className="w-full text-center rounded-md p-3 bg-emerald-300 ">{user?.name}</li>

                    {
                        showMenu.map((item, index) => <NavLink key={index} to={item.menuRoute} className={({ isActive }) => isActive ? 'bg-slate-400 text-white p-2 rounded-lg hover:bg-slate-300' : ' text-slate-700 hover:bg-slate-300 p-2 rounded-lg'} > {item.menuName} </NavLink>


                        )
                    }

                    <li onClick={logout}><Link to='/'>Logout</Link></li>


                </ul>

            </div>
        </div>


    );
};

export default Dashboard;
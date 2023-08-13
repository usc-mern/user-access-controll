
import { headersNavItems, loginItems } from '../../data/headerNavItems';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const HeaderNavMenu = () => {

    const handleLogout = () => {
        toast.success('LogOut Successfully', { autoClose: 1000 })
    }

    return (
        < >
            {
                headersNavItems.map((item, index) => <NavLink
                    key={index}
                    to={item.route}
                    className={({ isActive }) => isActive ?
                        'text-secondary hover:text-third'
                        :
                        ' text-slate-600 hover:text-third'}
                >
                    {item.name}
                </NavLink>)
            }

            {


                loginItems.map((item, index) => <NavLink
                    key={index}
                    to={item.route}
                    className={({ isActive }) => isActive ?
                        'text-secondary hover:text-third'
                        :
                        ' text-slate-600 hover:text-third'}
                >
                    {item.name}
                </NavLink>)


            }
        </>
    );
};

export default HeaderNavMenu;
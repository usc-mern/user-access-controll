import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {

    const { login, user, loginError } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(user);
        if (user?._id) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    useEffect(() => {
        // toast.error(loginError)

    }, [loginError])


    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={login}>
                <label className="label">Email:  </label>
                <input type="text" name="email" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <label className="label">Password:  </label>
                <input type="text" name="password" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />
                <button type='submit' className="btn btn-sm btn-accent mt-3 mx-auto " >Login</button>
            </form>
        </div>
    );
};

export default Login;
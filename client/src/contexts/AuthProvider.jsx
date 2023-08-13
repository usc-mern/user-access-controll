import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loginError, setLoginError] = useState('')
    const [crateAccountError, setCrateAccountError] = useState('')

    useEffect(() => {
        try {
            if (!user?._id) {

                fetch('http://localhost:5000/api/v1/user/logged-user', {
                    method: "GET",
                    headers: {
                        'content-type': 'application/json',
                        authorization: localStorage.getItem('access_token')
                    }
                })
                    .then(res => res.json())
                    .then((res) => {
                        setUser(res?.user);
                    });
            }
        } catch (err) {
            setUser({});
        }
    }, []);

    const login = (e) => {
        setLoginError('')
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email) {
            setLoginError('Please enter a valid email')
            return;
        }
        if (!password) {
            setLoginError('Please enter a valid password');
            return;
        }

        console.log(email, password)
        fetch('http://localhost:5000/api/v1/user/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                localStorage.setItem(
                    "access_token",
                    `Bearer ${res.accessToken}`
                );
                setUser(res.user);
            })
            .catch(err => {
                setLoginError(err?.response?.data?.message)
                console.log(err);
            })
    };


    const createAccount = (e) => {

        // console.log("e")
        setCrateAccountError('')
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        let accessCode = e.target.accessCode.value || "";

        accessCode = accessCode.split(',');

        return;

        if (!name) {
            toast.error('Please enter a valid name')
            return;
        }

        if (!email) {
            toast.error('Please enter a valid email')
            return;
        }

        if (!password) {
            toast.error('Please enter a valid password');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        if (password != confirmPassword) {
            toast.error('Password did not match');
            return;
        }

        if (accessCode == 'SuperAdmin') {
            toast.error("This access code don't allow");
            return;
        }

        // console.log(name, email, role, password);
        const user = {
            name,
            email,
            accessCode,
            password
        };


        fetch(`http://localhost:5000/api/v1/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: localStorage.getItem('access_token')
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    toast.success('User created successfully')
                }
                else {
                    toast.error("User didn't created ")
                }
            })
            .catch(err => {
                toast.error('Please enter valid information')
                setCrateAccountError(err?.message);
                setTimeout(() => { setCrateAccountError(""); }, 1500)
            })
    };

    const logout = async () => {
        localStorage.clear();
        setUser({});
        window.location.href = '/';
    };

    const authInfo = {
        user,
        createAccount,
        login,
        loginError,
        crateAccountError,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
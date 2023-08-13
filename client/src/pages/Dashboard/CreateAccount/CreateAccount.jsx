import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const CreateAccount = () => {

    const { createAccount, crateAccountError } = useContext(AuthContext);

    if (crateAccountError) {
        toast.error(crateAccountError);
    }

    return (
        <div className='flex justify-center items-center mt-10'>
            <form onSubmit={createAccount}>
                <label className="label">Name:  </label>
                <input type="text" name="name" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <label className="label">Email:  </label>
                <input type="text" name="email" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <label className="label">Password:  </label>
                <input type="text" name="password" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <label className="label">Confirm Password:  </label>
                <input type="text" name="confirm_password" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <label className="label">Access Code:  </label>
                <input type="text" name="accessCode" placeholder="Type here" className="input   input-sm input-success focus:border-0 w-full max-w-xs" />

                <button type='submit' className="btn btn-sm btn-accent mt-3 mx-auto " >Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
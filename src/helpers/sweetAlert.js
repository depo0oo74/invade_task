import { toast } from "react-toastify";

const sweetAlert = {
    success (alertMsg) {
        toast.success(alertMsg, {
            toastId: "success1",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    },
    error (alertMsg) {
        toast.error(alertMsg, {
            toastId: "error1",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    },
}

export default sweetAlert;
// ** Import sweet alert
import sweetAlert from "./sweetAlert.js";

function handlingErrors(error) {
    if (error.response) {
        return sweetAlert.error(error.response.data.message);
    } else {
        return sweetAlert.error(error.message);
    }
}


export default handlingErrors;
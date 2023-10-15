import { ToastContainer, toast, ToastPosition, Theme } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type ToastType = undefined | 'success' | 'info' | 'warning' | 'error';
export const showToast = (message: string, type: ToastType = undefined, autoClose: number = 3000, theme: Theme = 'light', position: ToastPosition = 'top-right') => {
    if (type !== undefined) {
        toast[type](message, {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        });
    } else {
        toast(message, {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        });
    }
}
const ToastsPcn = () => {

    return (
        <ToastContainer />
    );
};
// ToastsPcn.defaultProps = defaultToastProps

export default ToastsPcn;
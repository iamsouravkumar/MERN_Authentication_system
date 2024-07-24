// src/Alert.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = {
  success: (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  },
  error: (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  },
};

export default Alert;

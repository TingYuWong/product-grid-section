import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { closeToast } from '@/redux/slices/toastSlice';
import { IRootState } from '@/redux/store';
import * as $ from './Toast.style';

const Toast = () => {
  const dispatch = useDispatch();
  const { open, duration, message, severity } = useSelector((state: IRootState) => state.toastStore);

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={() => dispatch(closeToast())}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      key='snackbar'
    >
      <$.StyledAlert severity={severity} icon={false}>
        <$.Message $severity={severity}>
          <$.Severity $severity={severity}>{`${severity[0].toUpperCase()}${severity.slice(1)}`}</$.Severity>
          {message}
        </$.Message>
      </$.StyledAlert>
    </Snackbar>
  );
};

export default Toast;

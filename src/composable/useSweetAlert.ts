import Swal from 'sweetalert2';

export const useSweetAlert = () => {
  const showAlert = (icon: any, title: string, message: any) => {
    Swal.fire({
      icon,
      title,
      text: message,
    });
  };

  const showInfoAlert = (message: any) => {
    showAlert('info', 'Information', message);
  };

  const showSuccessAlert = (message: any) => {
    showAlert('success', 'Success!', message);
  };

  const showWarningAlert = (message: any) => {
    showAlert('warning', 'Warning!', message);
  };

  const showErrorAlert = (message: any) => {
    showAlert('error', 'Oops...', message);
  };

  return {
    showInfoAlert,
    showSuccessAlert,
    showWarningAlert,
    showErrorAlert,
  };
}
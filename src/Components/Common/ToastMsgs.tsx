import Swal from 'sweetalert2';

const useToast = () => {
  const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const success = (message: any) => {
    toast.fire({
      icon: 'success',
      title: message
    });
  };

  const error = (message: any) => {
    toast.fire({
      icon: 'error',
      title: message
    });
  };

  const info = (message: any) => {
    toast.fire({
      icon: 'info',
      title: message
    });
  };

  const warning = (message: any) => {
    toast.fire({
      icon: 'warning',
      title: message
    });
  };

  return {
    success,
    error,
    info,
    warning
  };
};

export default useToast;

import Swal from "sweetalert2";

export const swalList = {
  success: (message: string) => {
    Swal.fire("Success", message, "success");
  },
  error: (message: string) => {
    Swal.fire("Error", message, "error");
  },
  warning: (message: string) => {
    Swal.fire("Warning", message, "warning");
  },
  info: (message: string) => {
    Swal.fire("Info", message, "info");
  },
  question: (message: string) => {
    Swal.fire("Question", message, "question");
  },
};

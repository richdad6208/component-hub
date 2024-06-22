export const validates = {
  name: {
    required: "Name is required",
    maxLength: {
      value: 20,
      message: "Name must be less than 20 characters",
    },
    minLength: {
      value: 2,
      message: "Name must be more than 2 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    maxLength: {
      value: 20,
      message: "Password must be less than 20 characters",
    },
    minLength: {
      value: 4,
      message: "Password must be more than 8 characters",
    },
  },
  agree: {
    required: "You must agree to the terms of service and privacy policy",
  },
};

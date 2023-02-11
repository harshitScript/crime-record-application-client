export const firstOrLastName = {
  required: {
    value: true,
    message: "First name is required",
  },
  minLength: {
    value: 3,
    message: "Must have 3 > characters",
  },
  maxLength: {
    value: 22,
    message: "Must have < 23 characters",
  },
  pattern: {
    value: /^[a-zA-Z]*$/,
    message: "Please enter valid characters",
  },
};

export const mobile = {
  required: {
    value: true,
    message: "Mobile number is required",
  },
  minLength: {
    value: 10,
    message: "Must have 9 > characters",
  },
  maxLength: {
    value: 11,
    message: "Must have < 12 characters",
  },
  pattern: {
    value: /^[0-9]*$/,
    message: "Please enter valid characters",
  },
};

export const email = {
  required: {
    value: true,
    message: "email is required",
  },

  pattern: {
    value:
      /^(www.)?[a-zA-Z0-9.]{1,50}@[a-zA-Z0-9]{3,35}(.co|.com|.in|.org|.dev|)$/,
    message: "Please enter valid email",
  },
};

export const password = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "Must have 7 > characters",
  },
  maxLength: {
    value: 22,
    message: "Must have < 26 characters",
  },
};

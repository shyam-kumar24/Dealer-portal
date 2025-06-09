const validate = (userDetail) => {
    const newErrors = {};
    if (!userDetail.name.trim()) newErrors.name = "Name is required!";

    if (!userDetail.email.trim()) newErrors.email = "Email is required.";

    if (!userDetail.password.trim())
      newErrors.password = "Password is required.";

    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userDetail.email);
    const isValidPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        userDetail.password
      );

    if (!isValidEmail && userDetail.email.trim()) {
      newErrors.email = "Email is invalid";
    }
    if (!isValidPassword && userDetail.password.trim()) {
      newErrors.password = "Password is invalid";
    }
    return newErrors;
};

export default validate
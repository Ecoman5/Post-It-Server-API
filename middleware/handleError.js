// err.message, err.code 11000

const handleUserError = (err) => {
 let errors = {
  username: "",
  email: "",
  password: "",
 };
 if (err.code === 11000) {
 ( errors.username = 'Email or username has already been used'),
   (errors.email = 'Email or username has already been used');
  return errors;
 }
 if (err.message === 'incorrect email') {
  errors.email = "This email is not registered"
  return errors;
 }
 if (err.message === 'bad auth') {
  errors.email = "Invalid email or password";
  errors.password = "Invalid email or password";
  return errors;
 }
 if (err.message.includes('User validation failed')) {
  Object.values(err.errors).forEach(({ properties }) => {
   errors[properties.path] = properties.message;
  })
 }
 return errors;
};

module.exports = { handleUserError };
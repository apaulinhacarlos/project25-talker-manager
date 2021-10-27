const EMAIL_REGEX = /\S+@\S+\.\S+/;

const validateEmail = (email) => {
  const testEmailRegex = EMAIL_REGEX.test(email);
  return testEmailRegex;
};

module.exports = validateEmail;
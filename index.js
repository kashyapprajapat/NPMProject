//The below code is for otp generator
function generateOTP(length) {
  const characters = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters.charAt(randomIndex);
  }

  return otp;
}

// Example: Generate a 6-digit OTP
//const otp = generateOTP(4);
//console.log("Generated OTP:", otp);

//The below code is for captcha generator
// Function to generate a random alphanumeric string of a specified length
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Function to generate a simple CAPTCHA code
function generateCaptcha(length) {
  const captchaLength = length; // Adjust the length of the CAPTCHA code
  const captchaCode = generateRandomString(captchaLength);
  return captchaCode;
}

// Example usage
//const captcha = generateCaptcha(7);
//console.log("Generated CAPTCHA code:", captcha);

module.exports = {
  generateOTP,
  generateCaptcha,
};

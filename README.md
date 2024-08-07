# OTP and CAPTCHA Generator

This is a simple JavaScript module that provides functions to generate OTP (One-Time Password) and CAPTCHA codes.

## OTP Generator

### `generateOTP(length)`

Generates a numeric OTP of the specified length.

#### Example:

```javascript
const { generateOTP } = require('otpcaptchagenerator');

const otp = generateOTP(6);
console.log('Generated OTP:', otp);

```

## CAPTCHA Generator

### `generateCaptcha(length)`

Generates a captcha of the specified length.

#### Example:
```
const { generateCaptcha } = require('otpcaptchagenerator');

const captcha = generateCaptcha(8);
console.log('Generated CAPTCHA code:', captcha);
```


```

npm install otpcaptchagenerator

-----Real Project usage.
const { generateOTP, generateCaptcha } = require('otpcaptchagenerator');

const otp = generateOTP(6);
const captcha = generateCaptcha(8);

console.log('Generated OTP:', otp);
console.log('Generated CAPTCHA code:', captcha);
```

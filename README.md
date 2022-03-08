# EO.Verify : Email OTP Verification API
Integration of Email verification by OTP

## Available EndPoints

### `https://eoverify.herokuapp.com/sendotp`
```JSON
method:'POST'
body:{"email":"user_email", "appName":"your_app_name"}
response: {
  "success": true,
  "message": "Otp sent to user@gmail.com",
  "otp": 5048
}
```
### `https://eoverify.herokuapp.com/resend`

method:'POST'
body:{"email":"user_email", "appName":"your_app_name"}
response: {
  "success": true,
  "message": "New otp sent to user@gmail.com",
  "otp": 1820
}

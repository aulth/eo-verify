# EO.Verify : Email OTP Verification API
Integration of Email verification by OTP

## Available EndPoints

### `https://eoverify.herokuapp.com/sendotp`

method:'POST'
<br/>
body:
```JSON
{
"email":"user_email", 
"appName":"your_app_name"
}
```
<br/>
response: 

```JSON
{
  "success": true,
  "message": "Otp sent to user@gmail.com",
  "otp": 5048
}
```
---
### `https://eoverify.herokuapp.com/resend`

method:'POST'
<br/>
body:
```JSON
{
"email":"user_email", 
"appName":"your_app_name"
}
```
<br/>
response:
```JSON
{
  "success": true,
  "message": "New otp sent to user@gmail.com",
  "otp": 5048
}
```

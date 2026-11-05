 export function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

 export  function getOtpHTML(otp) {
   return `
   <html>
     <body>
       <h1>Your OTP Code</h1>
       <p>Your OTP code is: <strong>${otp}</strong></p>
     </body>
   </html>
   `;


}
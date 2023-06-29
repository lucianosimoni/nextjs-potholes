"use client";

import Sidebar from "@/app/components/sidebar";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function SignUp() {
  const [captchaValue, setCaptchaValue] = useState();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (!captchaValue) {
      return window.alert("ReCAPTCHA not acceptable!");
    }
    console.log(`Captcha is: ${captchaValue} and the form is then acceptable`);
  };

  return (
    <>
      <Sidebar />
      <h1>I am the Signup page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="text-black"
          required
        />
        <input
          type="password"
          placeholder="▪️▪️▪️▪️▪️▪️▪️▪️"
          className="text-black"
          required
        />
        <ReCAPTCHA
          sitekey="6Ld4xt8mAAAAAC-_yVEYX9Fh-qmisG8Kszg2zj8M"
          onChange={(value: any) => setCaptchaValue(value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => console.log(`Captcha is now: ${captchaValue}`)}>
        Check captcha status
      </button>
    </>
  );
}

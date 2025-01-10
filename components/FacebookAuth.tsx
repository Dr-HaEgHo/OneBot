import React from "react";
// import { useFacebookSDK } from "@/hooks/useFacebookSdk";

export default function FacebookIntegration(): JSX.Element {
  // useFacebookSDK();

  // const handleLogin = async() => {

  //   if (window.FB) {
  //     window.FB.login(
  //       (response) => {
  //         if (response.status === "connected") {
  //           console.log("Logged in:", response.authResponse);
  //         } else {
  //           console.log("User cancelled login or did not fully authorize.");
  //         }
  //       },
  //       { scope: "public_profile,email" }
  //     );
  //   } else {
  //     console.error("Facebook SDK not loaded yet.");
  //   }
  // };


  return (
    <div>
      <h1>Facebook Integration</h1>
      {/* <button onClick={handleLogin}>Login with Facebook</button> */}
    </div>
  );
}

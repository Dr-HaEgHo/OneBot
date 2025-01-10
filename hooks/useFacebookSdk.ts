// // import { fb } from "@/types";
// import { useEffect } from "react";

// declare global {
//   interface Window {
//     FB: {
//       init: (params: {
//         appId: string;
//         autoLogAppEvents: boolean;
//         xfbml: boolean;
//         version: string;
//       }) => void;
//       login: (
//         callback: (response: fb.LoginStatusResponse) => void,
//         options?: { scope: string }
//       ) => void;
//       getLoginStatus: (callback: (response: fb.LoginStatusResponse) => void) => void;
//     };
//     fbAsyncInit?: () => void;
//   }
// }

// export function useFacebookSDK(): void {
//   useEffect(() => {
//     const loadFacebookSDK = () => {
//       if (window.FB) return; // Prevent multiple loads

//       window.fbAsyncInit = () => {
//         FB.init({
//           appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "", // Your Facebook App ID
//           autoLogAppEvents: true,
//           xfbml: true,
//           version: "v15.0", // Use the Facebook Graph API version
//         });
//       };

//       // Load the Facebook SDK script
//       const script = document.createElement("script");
//       script.src = "https://connect.facebook.net/en_US/sdk.js";
//       script.async = true;
//       script.defer = true;
//       script.onload = () => console.log("Facebook SDK loaded");
//       document.body.appendChild(script);
//     };

//     loadFacebookSDK();

//     // console.log("FACEBOOK INSTANCE", loadFacebookSDK())


//     // Cleanup on unmount
//     return () => {
//       const script = document.querySelector('script[src="https://connect.facebook.net/en_US/sdk.js"]');
//       if (script) document.body.removeChild(script);
//     };
//   }, []);
// }

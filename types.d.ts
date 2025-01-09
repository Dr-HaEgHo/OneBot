declare namespace fb {
    interface LoginStatusResponse {
      status: "connected" | "not_authorized" | "unknown";
      authResponse?: {
        accessToken: string;
        expiresIn: number;
        signedRequest: string;
        userID: string;
      };
    }
  }
  
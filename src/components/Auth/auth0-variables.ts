export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN ?? "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID ?? "",
  callbackUrl: "http://localhost:3000/callback",
  afterLogout: "http://localhost:3000",
  audience: "hasura",
  scope: "openid profile email",
};

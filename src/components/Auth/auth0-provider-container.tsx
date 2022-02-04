import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH_CONFIG } from "./auth0-variables";

type Auth0ProviderContainerProps = {
  children: React.ReactNode;
};

const Auth0ProviderContainer = ({ children }: Auth0ProviderContainerProps) => {
  return (
    <Auth0Provider
      domain={AUTH_CONFIG.domain}
      clientId={AUTH_CONFIG.clientId}
      redirectUri={window.location.origin}
      audience={AUTH_CONFIG.audience}
      scope={AUTH_CONFIG.scope}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderContainer;

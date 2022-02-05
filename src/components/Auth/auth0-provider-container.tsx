import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { AUTH_CONFIG } from "./auth0-variables";

type Auth0ProviderContainerProps = {
  children: React.ReactNode;
};

const Auth0ProviderContainer = ({ children }: Auth0ProviderContainerProps) => {
  const navigate = useNavigate();
  return (
    <Auth0Provider
      domain={AUTH_CONFIG.domain}
      clientId={AUTH_CONFIG.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={(appState: AppState) => {
        navigate(appState.returnTo || window.location.pathname);
      }}
      audience={AUTH_CONFIG.audience}
      scope={AUTH_CONFIG.scope}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderContainer;

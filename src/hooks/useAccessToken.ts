import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { AUTH_CONFIG } from "../components/Auth/auth0-variables";

const useAccessToken = () => {
  const [idToken, setIdToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getAccessToken = async () => {
      const { audience, scope } = AUTH_CONFIG;

      setIsLoading(true);
      try {
        const accessToken = await getAccessTokenSilently({
          audience,
          scope,
        });
        setIdToken(accessToken);
      } catch (e: any) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, user?.sub]);

  return { idToken, isLoading };
};

export default useAccessToken;

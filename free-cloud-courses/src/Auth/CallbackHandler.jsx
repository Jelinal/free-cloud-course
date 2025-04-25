import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const CallbackHandler = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      // After successful login, navigate to the AWS home page or another protected route
      navigate('/awshome');
    }
  }, [auth, navigate]);

  return <div>Authenticating...</div>;
};

export default CallbackHandler;

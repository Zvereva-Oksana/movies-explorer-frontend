import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export function ProtectedRoute({
  isLoggedIn, loading, element: Component, ...props
}) {
  if (loading) {
    return null;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Component {...props} />;
}

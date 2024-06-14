import Alert from "react-bootstrap/Alert";
import React from "react";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <div>
      <Alert variant={variant} style={{ fontSize: 20 }}>
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default ErrorMessage;

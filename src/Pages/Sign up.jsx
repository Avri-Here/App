import { useEffect } from "react";

export default () => {
  useEffect(() => {
      window.location.replace("http://localhost:3001/SignUp.html");

  }, []);
  return <h1></h1>;
};

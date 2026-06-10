import { useEffect } from "react";
import { toast } from "react-toastify";

export default function NetworkStatus() {
  useEffect(() => {
    const online = () => toast.success("Conexão restaurada");
    const offline = () => toast.error("Você está offline");

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return null;
}
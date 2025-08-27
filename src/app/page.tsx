import GlobalKeyListener from "@/components/hlo";
import { Toaster } from "sonner";
import Home from "./home/page";

export default function Page() {
  return (
    <>
      <GlobalKeyListener />
      <Home />
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "14px",
            padding: "8px 12px",
            minHeight: "40px",
            maxWidth: "300px",
            borderRadius: "6px",
            background: "linear-gradient(90deg, #70000E, #050505, #70000E)",
            color: "white",
            border: "none",
          },
        }}
      />
    </>
  );
}

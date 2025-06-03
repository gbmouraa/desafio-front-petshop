import { AppRouter } from "./routes/router";
import { CartContextProvider } from "./contexts/cart-context-provider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <CartContextProvider>
        <AppRouter />
        <Toaster />
      </CartContextProvider>
    </>
  );
}

export default App;

import { AppRouter } from "./routes/router";
import { CartContextProvider } from "./contexts/cart-context-provider";

function App() {
  return (
    <>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </>
  );
}

export default App;

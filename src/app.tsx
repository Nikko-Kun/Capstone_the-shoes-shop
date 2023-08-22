/** set-up routing */
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/** style global */
import { GlobalStyle } from "./components/global-style";

/** set-up redux */
// as ReduxProvider => dùng as: để đổi trên import
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/config-store";

// App để config dự án
export function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>
    </ReduxProvider>
  );
}

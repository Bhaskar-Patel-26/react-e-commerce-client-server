import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "remixicon/fonts/remixicon.css";

import "./index.css";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

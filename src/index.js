// Import dependencies
import { createRoot, createPortal } from "@wordpress/element";

import "./store";
import PluginPosta from "./pages/PluginPosta";
import Dashboard from "./pages/Dashboard";

const dashboard = document.getElementById("dashboard");
const pluginPosta = document.getElementById("posta-web-1");
// add more root elements and providers as needed
const rootElement = dashboard || pluginPosta;

const App = () => (
  <>
    {pluginPosta && createPortal(<PluginPosta />, pluginPosta)}
    {dashboard && createPortal(<Dashboard />, dashboard)}
  </>
);

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

import "./App.css";
import TodoLayout from "./component/TodoLayout";
import { ConfigProvider } from "antd";
import Theme from "../src/Theme/theme.json";
function App() {
  return (
    <>
      <ConfigProvider theme={Theme}>
        <TodoLayout />
      </ConfigProvider>
    </>
  );
}

export default App;

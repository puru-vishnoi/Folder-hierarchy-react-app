import "./styles.css";
import Folder from "./Components/Folder";
import explorer from "./data/FolderData";
export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

import "./App.css";
import { useEffect } from "react";
import { getNotifications } from "./services/notificationService";

import NotificationList from "./components/NotificationList";

function App() {
  return (
    <div>
      <NotificationList />
    </div>
  );
}

export default App;
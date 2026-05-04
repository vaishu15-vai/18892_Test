import { useEffect, useState } from "react";
import { getNotifications } from "../api/notificationApi";
import { getTopNotifications } from "../services/priorityService";

function NotificationList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNotifications().then((res) => {
      const top = getTopNotifications(res, 5);
      setData(top);
    });
  }, []);

  return (
    <div>
      <h2>Top Notifications</h2>

      {data.map((n) => (
        <div key={n.ID}>
          <strong>{n.Type}</strong> - {n.Message}
          <br />
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;
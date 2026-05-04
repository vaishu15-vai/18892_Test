export const getNotifications = async () => {
  const res = await fetch("http://20.244.56.144/evaluation-service/notifications", {
    headers: {
      Authorization: "Bearer YOUR_TOKEN",
    },
  });

  const data = await res.json();
  return data;
};
const weights = {
  Result: 3,
  Event: 2,
  Farewell: 1,
};

export const getTopNotifications = (data, n = 5) => {
  return data
    .map((item) => {
      const time = new Date(item.Timestamp).getTime();

      return {
        ...item,
        score: weights[item.Type] * 1000000 + time,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
};
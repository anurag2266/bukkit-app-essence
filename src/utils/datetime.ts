export const parseTime = (time: string) => {
  const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number);
  return { hours, minutes, seconds };
};

export const toUTCTime = (time: string) => {
  const timezoneOffsetInMinutes = new Date().getTimezoneOffset();
  const parsedTime = parseTime(time);
  const totalMinutes = parsedTime.hours * 60 + parsedTime.minutes;
  const totalUTCMinutes = totalMinutes + timezoneOffsetInMinutes;
  const resultHours = Math.floor(totalUTCMinutes / 60);
  const resultMinutes = totalUTCMinutes % 60;

  return [
    resultHours < 10 ? `0${resultHours}` : resultHours,
    resultMinutes < 10 ? `0${resultMinutes}` : resultMinutes
  ].join(':');
};

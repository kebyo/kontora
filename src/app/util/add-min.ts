export const MIN_PER_SEC = 60_000;

export const addMinutes = function (date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * MIN_PER_SEC);
}

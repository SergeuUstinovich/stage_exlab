export function openingHours(openingTime: string, closingTime: string): string {
  if (openingTime.length > 5 && closingTime.length > 5) {
    const openingHours =
      openingTime.slice(0, 5) + '-' + closingTime.slice(0, 5);
    return openingHours;
  }
  return openingTime + '-' + closingTime;
}

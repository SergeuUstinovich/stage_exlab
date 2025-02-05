export function openingHours(openingTime: string, closingTime: string): string {
  const openingHours = openingTime.slice(0, 5) + '-' + closingTime.slice(0, 5);

  return openingHours;
}

export function calculatePrice(age) {
  if (age < 6) return 0;
  if (age <= 12) return 500;
  if (age <= 15) return 600;
  if (age <= 18) return 800;
  return 1000;
}
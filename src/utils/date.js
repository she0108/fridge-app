export function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function calculateDaysRemaining(targetDate) {
  const currentDate = new Date(getCurrentDate());
  const target = new Date(targetDate);
  const timeDifference = target - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

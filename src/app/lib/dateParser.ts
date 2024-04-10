export default function getDateFromString(dateString: string) {
  const parts = dateString.split("-");
  return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}

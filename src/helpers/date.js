export default function date(data) {
  let parts = data.split("-");
  const invertedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  return invertedDate;
}

async function certificationSerie(cer) {
  if (cer.length > 0) {
    const certification = cer.find((c) => c.rating !== "");
    return certification;
  }
  return null;
}
export default certificationSerie;

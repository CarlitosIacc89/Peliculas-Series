async function certificationMovie(cer) {
  const cert = cer.map((el) => {
    const op = el.release_dates.find((item) => item.certification !== "");
    return op;
  });

  const certification = cert.find((item) => item !== undefined);
  return certification;
}
export default certificationMovie;

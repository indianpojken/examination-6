function format(string, regexp, join) {
  const match = string.replace(/[^0-9]+/g, '').match(regexp);
  return match?.join(join) ?? "";
}

function formatCardNumber(string) {
  return format(string, /\d{1,4}/g, ' ');
}

function formatDate(string) {
  return format(string, /\d{1,2}/g, '/');
}

function formatCCV(string) {
  return format(string, /\d{1,3}/g);
}

export { formatCardNumber, formatDate, formatCCV }

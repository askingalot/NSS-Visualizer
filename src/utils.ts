export function toUrl(s: string) {
  const url = s.startsWith('http') ? s : `http://${s}`;
  return new URL(url);
}

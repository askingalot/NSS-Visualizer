/* eslint-disable no-redeclare */
function toUrl(s: null): null;
function toUrl(s: string): URL;
function toUrl(s: string | null): URL | null {
  if (!s) {
    return null;
  }

  const url = s.startsWith('http') ? s : `http://${s}`;
  return new URL(url);
}


function cloneExcept(obj: any, ...keysToExclude: string[]) {
  const cloned = {} as any;
  for (const [key, value] of Object.entries(obj)) {
    if (!keysToExclude.includes(key)) {
      cloned[key] = value;
    }
  }
  return cloned;
}


export { toUrl, cloneExcept }
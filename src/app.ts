export function greet(name: string): string {
  return `hello ${name}`;
}
export function pick(obj: Record<string, string>, key: string): string | undefined {
  return obj[key];
}

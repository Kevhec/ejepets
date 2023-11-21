export async function copyTextToClipboard(text: string | undefined) {
  if ('clipboard' in navigator && text) {
    return navigator.clipboard.writeText(text);
  }

  throw new Error('Error trying to copy');
}

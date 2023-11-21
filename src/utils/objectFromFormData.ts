export default function objectFromFormData(form: HTMLFormElement) {
  return Object.fromEntries(new FormData(form));
}

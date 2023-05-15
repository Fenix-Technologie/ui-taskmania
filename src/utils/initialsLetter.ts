export function initialsLetter(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName
    ? `${firstName.charAt(0).toLocaleUpperCase()}${lastName.charAt(0).toLocaleUpperCase()}`
    : firstName.charAt(0).toLocaleUpperCase();
}

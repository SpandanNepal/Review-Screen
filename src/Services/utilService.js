export function generateRandomColor () {
    // Generate a random hexadecimal color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

export function getInitials(input) {
  const words = input.split('_');

  let initials = '';

  words.forEach(word => {
    initials += word.charAt(0).toUpperCase();
  });

  return initials;
}
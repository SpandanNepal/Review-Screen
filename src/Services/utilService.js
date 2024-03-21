export function generateRandomColor () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

export function getInitials(input) {
  const words = input.split('_');

  return (words[0].charAt(0) + words[words.length -1].charAt(0)).toUpperCase();
}

export function formatTitle(input) {
  const words = input.split('_');

  let initials = '';

  words.forEach(word => {
    let fLCapital = s => s.replace(/./, c => c.toUpperCase())
    initials += fLCapital(word) + ' ';
  });

  return initials;
}
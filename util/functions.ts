// utils/utils.js

export function toTitleCase(str) {
    return str
      .toLowerCase()
      .replace(/[_\-]+/g, ' ') // Replace underscores/dashes with spaces
      .split(' ')
      .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1) : '')
      .join(' ');
  }
  
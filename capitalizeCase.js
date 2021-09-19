function titleCase(str) {
  let result = str.toLowerCase().split(' ').map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");
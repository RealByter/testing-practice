const capitalize = (str) => {
  if(str.length > 0)
    str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

export default capitalize;
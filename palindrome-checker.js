function palindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/\W/g,"").replace(/[_]/g,"");

  if(str == str.split('').reverse().join(''))
  {
    return true;
  }
  return false;
}



palindrome("eye");

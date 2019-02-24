module.exports = function check(str, bracketsConfig) {
  // your solution

  let arr = [];

  for(let i = 0; i < str.length; i++) 
  {
    for(let j = 0; j < bracketsConfig.length; j++) 
    {
      if(str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1])
      {
        if(arr[arr.length - 1] == str[i])
          arr.pop();
        else
          arr.push(str[i]);
      }
      else if(str[i] == bracketsConfig[j][0]) 
        arr.push(j++); 
      else if(str[i] == bracketsConfig[j][1]) 
      {
        if(arr[arr.length - 1] - (j++) == 0)
          arr.pop();
        else
          return false;
      }
    }
  }

  if(arr.length == 0) 
    return true;
   else 
    return false;
}

function validBraces(braces){
  var openPar = 0,
      openBra = 0,
      openCur = 0;

  braces = braces.split('');
  for(var i = 0, i < braces.length, i++){
    if(braces[i] == '('){
      openPar++;
    }else if(braces[i] == ')'){
      if(openPar == 0 || openBra || openCur)
        return false;
      else if(openPar)
        openPar--;
    }

    if(braces[i] == '['){
      openBra++;
    }else if(braces[i] == ']'){
      if(openBra == 0 || openPar || openCur)
        return false;
      else if(openBra)
        openBra--;
    }

    if(braces[i] == '{'){
      openCur++;
    }else if(braces[i] == '}'){
      if(openCur == 0 || openPar || openBra)
        return false;
      else if(openCur)
        openCur--;
    }
  }

  return true;
}

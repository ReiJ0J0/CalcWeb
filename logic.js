const firstNumber = document.getElementById('num1');
const secondNumber = document.getElementById('num2'); 
const calculate = document.getElementById('calculate');

function parseVector(vectorString) {

  if (!vectorString.startsWith("(") || !vectorString.endsWith(")")) {
    return null;
  }

  const trimmedString = vectorString.replace(/[()\s]/g, "");

  const valueStrings = trimmedString.split(",");

  const values = valueStrings.map(valueString => {
    const value = parseFloat(valueString);
    if (isNaN(value)) {
      return null;
    }
    return value;
  });

  if (values.some(value => value === null)) {
    return null;
  }

  return values;
}

calculate.addEventListener('click', () => {

  const a = parseVector(firstNumber.value);
  const b = parseVector(secondNumber.value);

  if (a === null) {
    vector.textContent = "Error: First input is not a vector";
  } else if (b === null) {
    vector.textContent = "Error: Second input is not a vector";
  } else if (a.length !== b.length) {
    vector.textContent = "Error: Vectors must have the same number of dimensions";
  } else if (a.length !== 3 || b.length !== 3) {
    vector.textContent = "Both vector should have three dimensions"
  } else {
    let c = b.map((value, index) => value - a[index]);

    const forfinalC = "(" + c.join(", ") + ")";

    const forC = document.getElementById('forC');
    forC.textContent = "c " + " = " + secondNumber.value + " - " + firstNumber.value + " = " + forfinalC;

    const forR = document.getElementById('forR');
    let r = 'r = (';
      if (b[0] < -1){
        b[0] = b[0] + "i";
        r += b[0];
      } else if (b[0] === -1){
        b[0] = "-i";
        r += b[0];
      } else if (b[0] === 0){
        b[0] = "0i";
        r += b[0];
      } else if (b[0] === 1){
        b[0] = "i";
        r += b[0];
      } else{
        b[0] = b[0] + "i";
        r += b[0];
      } 

      if (b[1] < -1){
        b[1] = b[1] + "j";
        r += b[1];
      } else if (b[1] === -1){
        b[1] = "-j";
        r += b[1];
      } else if (b[1] === 0){
        b[1] = "0j";
        r += "+" + b[1];
      } else if (b[1] === 1){
        b[1] = "j";
        r += "+" +  b[1];
      } else{
        b[1] = b[1] + "j";
        r += "+" + b[1];
      } 

      if (b[2] < -1){
        b[2] = b[2] + "k";
        r += b[2] + ") + t(";
      } else if (b[2] === -1){
        b[2] = "-k";
        r += b[2] + ") + t(";
      } else if (b[2] === 0){
        b[2] = "0k";
        r += "+" + b[2] + ") + t(";
      } else if (b[2] === 1){
        b[2] = "k";
        r += "+" +  b[2] + ") + t(";
      } else{
        b[2] = b[2] + "k";
        r += "+" + b[2] + ") + t(";
      } 

      if (c[0] < -1){
        c[0] = c[0] + "i";
        r += c[0];
      } else if (c[0] === -1){
        c[0] = "-i";
        r += c[0];
      } else if (c[0] === 0){
        c[0] = "0i";
        r += b[0];
      } else if (c[0] === 1){
        c[0] = "i";
        r += c[0];
      } else{
        c[0] = c[0] + "i";
        r += c[0];
      } 

      if (c[1] < -1){
        c[1] = c[1] + "j";
        r += c[1];
      } else if (c[1] === -1){
        c[1] = "-j";
        r += c[1];
      } else if (c[1] === 0){
        c[1] = "0j";
        r += "+" + c[1];
      } else if (c[1] === 1){
        c[1] = "j";
        r += "+" +  c[1];
      } else{
        c[1] = c[1] + "j";
        r += "+" + c[1];
      } 

      if (c[2] < -1){
        c[2] = c[2] + "k";
        r += c[2] + ")";
      } else if (c[2] === -1){
        c[2] = "-k";
        r += c[2] + ")";
      } else if (c[2] === 0){
        c[2] = "0k";
        r += "+" + c[2] + ")";
      } else if (c[2] === 1){
        c[2] = "k";
        r += "+" +  c[2] + ")";
      } else{
        c[2] = c[2] + "k";
        r += "+" + c[2] + ")";
      } 


    forR.textContent = r;

    const firstStep = document.getElementById('firstStep');

    const rfc = c[0].replace("i", "ti");
    const rsc = c[1].replace("j", "tj");
    const rtc = c[2].replace("k", "tk");

    let forFirst = '= ';
    if (b[1].includes("-")){
      forFirst += b[0] + b[1];
    } else {
      forFirst += b[0] + '+'+ b[1];
    }

    if (b[2].includes("-")){
      forFirst += b[2];
    } else {
      forFirst += '+'+ b[2];
    }

    if (rfc.includes('-')){
      forFirst += rfc;
    } else {
      forFirst += '+'+ rfc;
    }

    if (rsc.includes('-')){
      forFirst += rsc;
    } else {
      forFirst += '+'+ rsc;
    }

    if (rtc.includes('-')){
      forFirst += rtc;
    } else {
      forFirst += '+'+ rtc;
    }
    
    firstStep.textContent = forFirst;

    const secondStep = document.getElementById('secondStep');

    let forSecondFirst = ' = (';

    if (rfc.includes('-')){
      forSecondFirst += b[0] + rfc + ')';
    } else {
      forSecondFirst += b[0] + '+' + rfc + ')';
    }

    let forSecondSecond = ' + ('

    if (rsc.includes('-')){
      forSecondSecond += b[1] + rsc + ')';
    } else {
      forSecondSecond += b[1] + '+' + rsc + ')';
    }

    let forSecondThird = ' + ('

    if (rtc.includes('-')){
      forSecondThird += b[2] + rtc + ')';
    } else {
      forSecondThird += b[2] + '+' + rtc + ')';
    }

    const secondMerge = forSecondFirst + forSecondSecond + forSecondThird;

    secondStep.textContent = secondMerge

    const vector = document.getElementById('vector');

    const x = parseVector(secondNumber.value); 

    if (x[0] === 0){
      x[0] = '';
    }

    if (x[1] === 0){
      x[1] = '';
    }

    if (x[2] === 0){
      x[2] = '';
    }

    const mrfc = rfc.replace("ti", "t)i");
    const mrsc = rsc.replace("tj", "t)j");
    const mrtc = rtc.replace("tk", "t)k");

    let firstFinish = '= ('
    
    if (mrfc.includes('-')){
      firstFinish += x[0] + mrfc;
    } else {
      firstFinish += x[0] + ' + ' + mrfc;
    }

    let secondFinish = ' + ('

    if (mrsc.includes('-')){
      secondFinish += x[1] + mrsc;
    } else {
      secondFinish += x[1] + ' + ' + mrsc;
    }

    let thirdFinish = ' + ('

    if (mrtc.includes('-')){
      thirdFinish += x[2] + mrtc;
    } else {
      thirdFinish += x[2] + ' + ' + mrtc;
    }

    vector.textContent = firstFinish + secondFinish + thirdFinish;

    const parametric = document.getElementById('parametric');
    
    const fp = firstFinish.replace('=', 'x = ').replace('(','').replace(')i', ',');
    const sp = secondFinish.replace('+ (', ' y = ').replace(')j', ',');
    const tp = thirdFinish.replace('+ (', ' z = ').replace(')k', '')

    parametric.textContent = fp + sp + tp;

    const symmetric = document.getElementById('symmetric');

    const y = parseVector(secondNumber.value);
    const yy = y.join(',');
    const yyy = yy.split(',');

    const sc = parseVector(forfinalC)

    let sf = '';

    if (yyy[0] <= -1) {
      const test = -1 * yyy[0];
      sf += 'x + ' + test + '/' + sc[0];
    } else if (yyy[0] >= 1){
      sf += 'x - ' + yyy[0] + '/' + sc[0];
    } else {
      sf += 'x' + '/' + sc[0];
    }

    let ss = '';

    if (yyy[1] <= -1) {
      const hi = -1 * yyy[1];
      ss += ' y + ' + hi + '/' + sc[1];
    } else if (yyy[1] >= 1){
      ss += 'y - ' + yyy[1] + '/' + sc[1];
    } else {
      ss += 'y' + '/' + sc[1];
    }

    let st = '';

    if (yyy[2] <= -1) {
      const hello = -1 * yyy[2];
      st += ' z + ' + hello + '/' + sc[2];
    } else if (yyy[2] >= 1){
      st += 'y - ' + yyy[2] + '/' + sc[2];
    } else {
      st += 'y' + '/' + sc[2];
    }

    symmetric.textContent = sf + ' ='+ ss + ' =' + st;

    const divided = document.getElementById('divided');

    const z = parseVector(forfinalC);

    const ff = -1 * yyy[0] / z[0];
    const fzf = ff.toFixed(2);
    const fff = -1 * yyy[1] / z[1];
    const fzff = fff.toFixed(2);
    const ffff = -1 * yyy[2] / z[2];
    const ffzff = ffff.toFixed(2);

    let j = '';

    if (fzf <= -0.1){
      j += 'x' + fzf;
    } else if (fzf >= 0.1) {
      j += 'x + ' + fzf
    } else{
      j += 'x';
    }

    let jj = ' = '

    if (fzff <= -0.1){
      jj += 'y' + fzff;
    } else if (fzff >= 0.1) {
      jj += 'y + ' + fzff
    } else{
      jj += 'y';
    }

    let jjj = ' = '

    if (ffzff <= -0.1){
      jjj += 'z' + ffzff;
    } else if (ffzff >= 0.1) {
      jjj += 'z + ' + ffzff
    } else {
      jjj += 'z';
    }

    divided.textContent = j + jj + jjj;

    // (2,4,1)
    // (3,5,10)
  }
});

const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
  forR.textContent ='';
  forC.textContent = '';
  firstStep.textContent = '';
  secondStep.textContent = '';
  vector.textContent = '';
  parametric.textContent = '';
  symmetric.textContent = '';
});
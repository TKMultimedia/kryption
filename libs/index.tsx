import * as md5 from 'md5';

const _atob = (a: string): string => Buffer.from(a, 'base64').toString('binary');

const _btoa = (b: string): string => Buffer.from(b).toString('base64');

const _getRandomInt = (min: number, max: number): number => {
  const minA: number = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max) - minA)) + minA;
};

const _insertString = (str: string, index: number, value: string): string => str.substr(0, index) + value + str.substr(index);

const _mixString = (strA: string, strB: string): string => _insertString(strA, _getRandomInt(0, strA.length), strB);

const encode = (text: string, key: string): string => _btoa(_mixString(_btoa(text), _btoa(md5(key))));

const decode = (inputString: string, key: string): string => {
  let decodedStr: string = _atob(inputString);
  let processKey: string = _btoa(md5(key));
  decodedStr = decodedStr.replace(processKey, '');

  return _atob(decodedStr);
};

export {
  encode,
  decode
};

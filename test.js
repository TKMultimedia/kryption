const { encode, decode } = require('./dist/index');

const test = () => {
  const encodeText = encode('test ran', 'kayo long live');
  console.log(encodeText);
  console.log('===============');
  console.log(decode(encodeText, 'kayo long live'));
  // const sentence = 'The quick brown fox jumps over the lazy dog.';
  // let i = 0;
  // let arr = [];
  // while (i < sentence.length) {
  //   arr.push(`${sentence.charCodeAt(i)}`.padStart(3, 0));
    
  //   i++;
  // }
  // console.log(arr);
  // console.log(arr.join(''));
};

test();

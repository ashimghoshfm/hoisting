var language = 'java';
var LANGUAGE = 'JAVASCRIPT';

function mF() {
  if (true) {
    var language = LANGUAGE;
    console.log(`var এর কারনে: ${language}`); //নরমালি এটা ৫নাম্বার লাইনই প্রিন্ট করবে🙂
  }
  return document.write(`var এর কারনে: ${language}<br>`); //আমরা জানি, var দুটি ভাবে কাজ করেঃ global scope এবং function scope।  এক্ষেত্রে var এর কারনে if scope থেকে বের হয়ে function এর ভিতরে প্রথমে ৫নং লাইনটি hoisting হয়েছে। কিন্তু let হলে if scope থেকে বের হতে পারতো না এবং এমনটি ঘটতো না। সুতরাং এক্ষেত্রে if scope এর ভিতর ও function scope এর ভিতর ফলাফল same থাকবে। অর্থাৎ, hoisting এর কারনে এখানে ৫নং লাইনটিই প্রিন্ট করবেম
}
mF();



var language = 'java';
var LANGUAGE = 'JAVASCRIPT';

function mF2() {
  if (true) {
    let language = LANGUAGE;
    console.log(`let এর কারনে: ${language}`); //আমরা জানি, let ভেরিয়েবল scope ভিত্তিক কাজ করে। সুতরাং, এই লাইনটি কাজ করবে 🤩। কারন, let তার নিজের scope এর ভিতরেই আছে।
  }
  return document.write(`let এর কারনে: ${language}`); //এক্ষেত্রে if scope এ কোনো কাজই হয়নি, তাই parent থেকে language=java প্রিন্ট করেছে। এর কারন, let ভেরিয়েবল scope এর বাহিরে কাজ করে না।😑
}
mF2();

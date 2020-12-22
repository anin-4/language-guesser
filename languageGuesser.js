const franc=require('franc');
const lang=require('langs');

const input=process.argv[2];

const code=franc(input);

console.log(lang.where("3",code).name);




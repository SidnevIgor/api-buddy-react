export default function pretifyCode(obj, data) {
  if(Array.isArray(data)) {
    return '[' + data.map((item) => "\n" + JSON.stringify(item))
        .toString().split(',"')
        .join(',\n   "')
        .toString().split('{')
        .join('{\n   ')
        .toString().split('}')
        .join('\n}')
        .slice(1, obj.length) + ']';
  }
  else {
    let tst = '{\n' + JSON.stringify(data).slice(1,data.length-2).toString() + '\n}';
    console.log(tst);
  }
}

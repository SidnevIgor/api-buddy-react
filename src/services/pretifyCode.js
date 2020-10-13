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
    console.log(JSON.stringify(data));
  }
}

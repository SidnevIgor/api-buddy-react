export default function pretifyCode(obj, data) {
  if(Array.isArray(data)) {
    return '[' + data.map((item) => "\n" + JSON.stringify(item))
        .toString().split(',"')
        .join(',\n   "')
        .toString().split('{')
        .join('{\n   ')
        .toString().split('}')
        .join('\n}')
        .split('":')
        .join('": ')
        .slice(1, obj.length) + ']';
  }
  else {
    return '{\n   ' +
    JSON.stringify(data).slice(1,(-1))
    .split(',"')
    .join(',\n   "')
    .split('":')
    .join('": ') +
    '\n}';
  }
}

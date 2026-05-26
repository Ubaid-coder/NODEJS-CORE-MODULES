
// const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');


// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';

// console.log(myURL)

// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo

// const myURL = new URL({ toString: () => 'https://example.org/' });

// const myURL = new URL('https://example.org:81/foo');
// console.log(myURL.host);
// // Prints example.org:81

// myURL.host = 'example.com:82';
// console.log(myURL.href);
// // Prints https://example.com:82/foo

const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org'),
];
console.log(JSON.stringify(myURLs));

const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));

console.log(myURLs);
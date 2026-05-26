import path from 'node:path';

/* BaseName */
let basename = path.basename("C:\\users\\hp\\onedrive\\desktop\\index.html");
// console.log(basename) // index.html

basename = path.basename("C:\\users\\hp\\onedrive\\desktop\\index.html", '.html');
// console.log(basename) // index

/* Delimiter */
// console.log(process.env.PATH.split(path.delimiter));

/* Dirname */
let directory = path.dirname('C:/users/hp/onedrive/desktop/Nodejs Core Modules/index.html');


/* Extname */
path.extname(path.basename("C:/user/hp/onderive/index.tsx"));
path.extname('users.model.js');
path.extname('');

/* Format*/

path.format({
    root: "/C",
    dir: "/users/hp/desktop/",
    base: 'index.js',
})


path.format({
    root: "c/",
    base: 'file.txt',
    ext: "ignored"
})


path.format({
    root: "c/",
    name: "file",
    ext: ".txt"
})

/* MatchGlob*/

path.matchesGlob("/foo/bar",'/foo/bar');
path.matchesGlob("/foo/bar",'/foo/*');
path.matchesGlob("/foo/bar/index.html",'/foo/*/index.html');
path.matchesGlob("/foo/bar/index.html",'/foo/*/*.html');

/*isAbsolute*/
path.isAbsolute("/foo");
path.isAbsolute("foo");
path.isAbsolute("C:/");

/* Join */
path.join("/foo",'/bar','index.html');
path.join('foo','bar');

/* normalize */
path.normalize("c:/users/hp/ondedrive/desktop/newfolder");

/* parse */
path.parse('c:/users/hp/ondedrive/desktop/newfolder/index.js');

/* relative */
path.relative('c:/user/hp/onedrive','/storage/app.jsx');


/* resolve */
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');

/* sep */
console.log('foo\\bar\\baz'.split(path.sep))

/* win32 && posix */
//platform specific use like path.win32. || path.posix.

const os=require("os");
// it will return the operating system name
console.log(os.platform());

// it will return the bits
console.log(os.arch());

// it will display the path of the file
console.log(os.homedir());

// it will display the hoster name
console.log(os.hostname());

// it will display the  x86_64
console.log(os.machine());

// it will display the  mb to kbytes
console.log(os.freemem()/1024/1024/1024);

// it will display the bytes
console.log(os.totalmem()/1024/1024/1024);

// it will display the temp
console.log(os.tmpdir());

// it will display the windows type
console.log(os.type());

// it will display the windows version
console.log(os.version());

// it will diplay the path ,of the file n all details about the file
console.log(os.userInfo());
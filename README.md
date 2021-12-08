## Installation
```
$ npm install kato-pack
```

## Pack List
| Pack | Deskripsi |
| :-----: | :---------: |
| meme | Kumpulan meme indonesia |
| quote | Kumpulan quote indonesia |

## Example Usage
```js
const katopack = require('kato-pack');

const query = 'meme' // const query = 'quote'
console.log(await katopack.Pack(query));
```
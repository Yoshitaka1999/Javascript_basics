'use strict';

{
    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    });
}

// {
//     class Post {
//       constructor(text) {
//           this.text = text;
//           this.likeCount = 0;
//       }
  
//       show() {
//         console.log(`${this.text} - ${this.likeCount} likes`);
//       }
  
//       like() {
//           this.likeCount++;
//           this.show();
//       }
//     }

//     class SponsoredPost extends Post {
//         constructor(text, sponsor) {
//             super(text);
//             this.sponsor = sponsor;
//         }
    
//         show() {
//           super.show();
//           console.log(`,,, sponsored by ${this.sponsor}`);
//         }
//     }

//     const posts = [
//         new Post('JavaScriptの勉強中…'),
//         new Post('プログラミング楽しい！'),
//         new SponsoredPost('3糞動画でマスターしよう', 'dotinstall'),
//     ];

//     posts[2].show();
//     posts[2].like();
// }

// 定数 const
// 変数 let var

// && なおかつ
// || もしくは
// ! 〜ではない

// 0, 1, 2
// Math.floor(Math.random() * 3);
// 0, ..., n
// Math.floor(Math.random() * (n + 1))
// min ..., max
// Math.floor(Math.random() * (max + 1 - min)) + min
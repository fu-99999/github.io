var posts=["posts/812d49a5/","posts/5205e42b/","posts/993b8c1a/","posts/3a65933b/","posts/688b9307/","posts/f9652d8f/","posts/94722/","posts/ac701fa2/","posts/8042f148/","posts/75884ae0/","posts/36436/","posts/3044f11e/","posts/3b43e263/","posts/a03a6685/","posts/7fce129e/","posts/3ff382cd/","posts/9fc978a2/","posts/f0e131fd/","posts/3d4e846e/","posts/daa02af0/","posts/3e6a0ed1/","posts/51480014/","posts/8bbb8f5d/","posts/da623c86/","posts/6edb5512/","posts/62b41ced/","posts/87971af6/","posts/ab030d2a/","posts/a8b6e537/","posts/564b1e9/","posts/28c6bc0a/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
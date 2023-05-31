// const url = 'https://api.vvhan.com/api/en';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const quote = `${data.data.en} - ${data.data.zh}`; // 组合英文和中文名言
//     const picUrl = data.data.pic; // 图片链接

//     document.getElementById('quote').textContent = quote; // 更新名言文本
//     document.getElementById('pic').src = picUrl; // 更新图片链接
//   })
//   .catch(error => console.error(error));



const url = 'https://api.vvhan.com/api/en';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const quoteEn = data.data.en; // 英文名言
    const quoteZh = data.data.zh; // 中文名言
    const picUrl = data.data.pic; // 图片链接

    document.getElementById('quote-en').textContent = quoteEn; // 更新英文名言
    document.getElementById('quote-zh').textContent = quoteZh; // 更新中文名言
    document.getElementById('pic').src = picUrl; // 更新图片链接
  })
  .catch(error => console.error(error));



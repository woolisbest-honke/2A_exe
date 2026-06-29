/* =================================================================
   ★ 編集はここだけでOK ★
   下のデータ配列を書き換えるとサイトに反映されます。
   ================================================================= */

// お知らせ（新しいものを上に）
const NEWS = [
  { date:"2026/06/04", cat:"更新", title:"仲良氏Chat+にアップデート!?" },
  { date:"2026/06/03", cat:"更新", title:"仲良しTube アップデート!!" },
  { date:"2026/05/15", cat:"更新", title:"RammerHead 復活!?" },
  { date:"2026/04/13", cat:"お知らせ", title:'サイトを "Duckdns.org" のPageに移行しました！' },
];

// リンク集（カテゴリごと）
const LINK_CATEGORIES = [
  { title:"▶️ Tubeリンク集 New", items:[
    { name:"仲良しTube+",         url:"https://nkys-t-ube.duckdns.org" },
    { name:"斧Tube / AXETube",    url:"https://ono-tube.duckdns.org" },
    { name:"仲良しTube Downloader", url:"https://script.google.com/macros/s/AKfycbyvGhHUHu6gGStFKrF9AQfZK9ckYQeomCizSswNHSVxnpwcKuKFDzG99qBPOjlRyUvm/exec" },
    { name:"Youtube ᴘʟᴜꜱ+ Next",  url:"https://www.yt-p-lus-ne-xt.duckdns.org/" },
    { name:"仙人tube+",           url:"https://sennin-tube-plus-1.onrender.com/" },
    { name:"MinTube ᴘʀᴏ",         url:"https://www.mino-m-i-n-o-pr-o.duckdns.org/" },
    { name:"チョコTube+",          url:"https://www.choco-plus.duckdns.org" },
    { name:"Wista",               url:"https://w-i-s-t-a-2a.duckdns.org" },
    { name:"わかめTube",          url:"https://wa-k-a-m-e-t-ube.duckdns.org/login" },
  ]},
  { title:"🎮 ゲームリンク集 New", items:[
    { name:"CloudMoon",  url:"https://cm-nemu.onrender.com/" },
    { name:"CloudMoon2",  url:"https://cdn.jsdelivr.net/gh/CloudMoonApp/web@main/260605.svg" },
    { name:"UBG 66",     url:"https://unblockedgames1024.gitlab.io/" },
    { name:"UBG 77",     url:"https://unblockedgames77.gitlab.io/" },
    { name:"UBG+",       url:"https://unblockedgplus.gitlab.io/game/" },
    { name:"Gnmath",     url:"https://script.google.com/macros/s/AKfycbx_IBUMCovYReEMYUW-mp6lSUGSmJe-TeyC5J9O1jZCybOpIWgLI6G644Cax6qC8U3CYg/exec" },
    { name:"TopVAZ",     url:"https://1v1-lolunblocked.gitlab.io/category/popular.html" },
    { name:"Unpkg Games",url:"https://script.google.com/macros/s/AKfycbxl4Wntk5jzzwj3wq71m9v33gMqWRGpNEHWtZXXKomLy_ylOVWRPXrPWJEOwn84ONCr/exec" },
  ]},
  { title:"🏷️ その他リンク集", items:[
    { name:"Voice Chat",        url:"https://p2p.mirotalk.com/join?room=yuj88433&name=random&avatar=0&audio=1&video=1&screen=1&chat=0&hide=0&notify=0&duration=unlimited" },
    { name:"Manga Raw",         url:"https://mangarw.onrender.com/" },
    { name:"StartPage",         url:"https://www.startpage.com/" },
    { name:"Dazn JP",           url:"https://www.dazn.com/ja-JP/home" },
    { name:"仲良氏LINE",        url:"https://nkys-chat-ver-1-3-0--kageproject.replit.app/" },
  ]},
  { title:"🎮 GAME ", items:[
    { name:"GTA",            url:"https://script.google.com/macros/s/AKfycbwVMCqNXcXs6ZZRAiRAyO1yz45PMkXNym4n7cV3MVwYwAwtM5U1S8fo9ScG7xJ0Bn5WnQ/exec" },
    { name:"geometry dash",  url:"https://script.google.com/macros/s/AKfycbx4MAnwFh0UnUKGq1loS7APoWouzuYpxQFsyGYJnA_MljyJfAlLuzvSzjhKvuXCVNjq/exec" },
    { name:"Hole.io",        url:"https://script.google.com/macros/s/AKfycbx8bBG85RO-3muSRst5LqPvkXatTozmIFn8PBDW9dlKZoo2Xfi24ikqOzLIrQTUOh4jsw/exec" },
    { name:"Funny Shooter",  url:"https://script.google.com/macros/s/AKfycbyf7kPwlxUDDMgoByVAepT-VulSutejuAcEaRV0LEaT7vpN8wmcwcWDzJE5tDHeLdE/exec" },
    { name:"Stickman.io",    url:"https://script.google.com/macros/s/AKfycbxgB7-uhrrT_AxJ0ZktwSZmgGKEiQUSwjnsD1G6gCu76scJJxIpnXlKu1TkfhLDicxn/exec" },
    { name:"Drive mad",      url:"https://script.google.com/macros/s/AKfycbwne6h9gqGp-du3JOBhMMzeCf037pnhoaENhwTLw1mJ30QNtnKMhpbnLv-ywYUBTbL1qA/exec" },
    { name:"Granny",         url:"https://script.google.com/macros/s/AKfycbwnjlO8v_tTt0NqMc4kAqFiQWnjpndP1MkGqoTh_R23UZQzqXvQ1pDTPcSe3lDpMHSA4Q/exec" },
    { name:"StickMan.io",    url:"https://script.google.com/macros/s/AKfycbwhf-KT58IXmRKb11U4F6srJjeKAMjaLxdhvdG2LKVI7gFGj1f8mBYIHnXyhd8Ot4GG/exec" },
    { name:"青鬼 2016",      url:"https://aooni-nemu.onrender.com/" },
  ]},
  { title:"🌐 Proxyリンク集 New", items:[
    { name:"shadow",           url:"https://sha-dow-v-3.duckdns.org" },
    { name:"Lunar v2",         url:"https://attt.linco.cl/" },
    { name:"Lunar v2 予備",     url:"https://kkkkaito.linco.cl/" },
    { name:"Rammer Head",      url:"https://rammer.nana.3d-mart.ru/" },
    { name:"Rammer Head 予備", url:"https://rammer.nana.dataon.cl/" },
    { name:"Dogeub",           url:"https://canvas-lms.storage.googleapis.com/index.html" },
    { name:"Space",            url:"https://space.nana.browbar.ar/" },
    { name:"Petezah",          url:"https://petezah.nana.proadmin.cl/" },
    { name:"INTERSTELLAR",     url:"https://www.inter-stellar.duckdns.org/" },
    { name:"light JWP",        url:"https://www.li-g-ht-jw-p.duckdns.org/" },
    { name:"Utopia",           url:"https://uu.utopia.2a.exe.googleapis.com.hospitaldelninodif.gob.mx/" },
  ]},
];

// ゲーム一覧
const GAMES = [
  { name:"Eaglecraft",                  img:"https://eaglercraft.com/img/Official_Minecraft_Trailer.webp", url:"https://hayalauncher.onrender.com/" },
  { name:"ONLY UP",                     img:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2562240/header.jpg?t=1767686251", url:"https://script.google.com/macros/s/AKfycbwMccc783yv5Ftx2nkZ6BpHDi66OYtby8TRsYzgDufHka0zzRHHcV19NgtnFJH0ltbEvQ/exec" },
  { name:"Roblox Barrys Prison",        img:"https://www4.minijuegosgratis.com/v3/games/thumbnails/250888_7_sq.jpg", url:"https://script.google.com/macros/s/AKfycbxRR9j9VoEVe3ftwVkqAslFNtnJ1UUWj8hLc51en9qR8fsVz2gho9geBFjasY0IV8gJBQ/exec" },
  { name:"Roblox 99",                   img:"https://i.scdn.co/image/ab67616d0000b27354761f903652136279c6552f", url:"https://script.google.com/macros/s/AKfycbw4urIQgR3zAfmFsn3NWFC6kpsGYSWafyi6AWtyVNSyBkySH9O46LVnhej6fW7beFME/exec" },
  { name:"Slender Man",                 img:"https://cdn1.epicgames.com/spt-assets/4f2537e2a2124cdd8fbd18b7068167d9/slender-the-arrival-4rvfj.png", url:"https://script.google.com/macros/s/AKfycbzD78lGmoq37iyrMDWZavBLxIRpQ_HmutXT9arsozaDkYaHVSfk7YliEmd3EL4nXM_4Bw/exec" },
  { name:"Poly Track",                  img:"https://www.desura.games/files/images/fe/fe917ef48f1fb76ebbf7a135d2b55322.jpg", url:"https://script.google.com/macros/s/AKfycbzuhv-wKflC3QgCI_d8xsy90ngRlqgKj-qfICMuzhimGuYwWXFI5tPWwwfjrYk-biJu/exec" },
  { name:"N00b miner",                  img:"https://play-lh.googleusercontent.com/yU2xBCEG4x9JJNXj041T8SGRdq2Qos7cgqSOKB1nNOqlx-dDxCpQlVDCuc_YSX-YmJU", url:"https://script.google.com/macros/s/AKfycbxkvPO4mEcWEk5a9TgEuR7qyiYZs7hL80XF5pwK8QMKHqmA7qUqxvIePB3PF9c3Bqc93w/exec" },
  { name:"Fall Guys",                   img:"https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/FGSS04_KeyArt_OfferImagePortrait_1200x1600_1200x1600-4bd46574e78464352e1f2c55714701f7", url:"https://script.google.com/macros/s/AKfycbxzGXZ-dYcADWPNv7OSO6OdaFl8sJtBNY8J1KO5EQ33_I37NN0nQkaej4HqNCAkvxHHqA/exec" },
  { name:"Gun Spin",                    img:"https://say.games/_next/image?url=https%3A%2F%2Fweb-saystore-backend.sgdn.io%2Fgunspiw%2Ficon___bqkktB9DMKoO&w=3840&q=75", url:"https://script.google.com/macros/s/AKfycbw3eTm2fi2WtzFV9x4H30gtzkoHUIIhH3saOGup-TC4MImYcKeVv5hEscrVwzwJ5vMXwg/exec" },
  { name:"Slope City",                  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTYSqZcSQo-Wj4Lqq1O7PLTolesXzV9IRJQ&s", url:"https://script.google.com/macros/s/AKfycbyendSzfWzjivGUAoNgH5QDpJIxJDyJvSYwXWxcV_8gl9xkdTMV2BvDpjiWNw5pGaVT/exec" },
  { name:"太鼓の達人",                   img:"https://makeshop-multi-images.akamaized.net/redwave/itemimages/000000001554.jpg", url:"https://taiko.ani-nya.com/" },
  { name:"Among Us",                    img:"https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5", url:"https://mirror.turbowarp.xyz/embed?addons=pause&settings-button&hqpen&interpolate#717953555" },
  { name:"Splatoon",                    img:"https://i.ytimg.com/vi/0X_iKZ9sl8w/maxresdefault.jpg", url:"https://mirror.turbowarp.xyz/embed?addons=pause&settings-button&hqpen&interpolate#815938308" },
  { name:"TETRIS",                      img:"https://www.datocms-assets.com/145957/1744284280-tetris-mobile.png?auto=format&fit=max&w=1200", url:"https://mirror.turbowarp.xyz/embed?addons=pause&settings-button&interpolate&clones=Infinity&offscreen&hqpen#1000009994" },
  { name:"大乱闘スマッシュブラザーズ",    img:"https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_1%2Ch_360%2Cw_480&url=https%3A%2F%2Fpadlet-artifacts.storage.googleapis.com%2F772a28a8d4b75d6bf5e784ae9d29c547046e54cb%2F6d587b48e304e2b6dddf1c78a196c1d8-h-eecd7c55129fe0f64ab0d624ee3724c6.png", url:"https://mirror.turbowarp.xyz/embed?addons=pause&settings-button&offscreen&hqpen&interpolate#993930034" },
  { name:"スイカゲーム",                 img:"https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dw777a27be/products/D70010000043363/heroBanner/d5f672aaf8d60243399b854ffcb11671121f560715505cec327509d6144958cc.jpg?sw=1368&strip=false", url:"https://mirror.turbowarp.xyz/embed?addons=pause&settings-button&hqpen&interpolate#911281961" },
  { name:"GTA",                         img:"https://images.ctfassets.net/h1rqp7q66d54/TDpmhxf0FSMnPktwjArbt/9d99c495519d69f8be10b4378f75b526/GTAV_Gen9_MFT_Webstore_ProductPage_2048x879_DELIV__1_.jpg", url:"https://script.google.com/macros/s/AKfycbwVMCqNXcXs6ZZRAiRAyO1yz45PMkXNym4n7cV3MVwYwAwtM5U1S8fo9ScG7xJ0Bn5WnQ/exec" },

];

/* =================================================================
   ↓ 以下、レンダリングと既存機能（基本いじらなくてOK）
   ================================================================= */

// 日付
const t = new Date();
document.getElementById('today').textContent =
  `${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,'0')}/${String(t.getDate()).padStart(2,'0')}`;

// 訪問者カウンター（疑似）
document.getElementById('count').textContent = (Math.floor(Math.random()*100)+12300).toLocaleString();

// ニュース描画
function renderNews(){
  const html = NEWS.map(n=>{
    const cls = n.cat==='更新' ? 'cat update' : 'cat';
    return `<li><span class="date">${n.date}</span><span class="${cls}">${n.cat}</span><span class="title">${n.title}</span></li>`;
  }).join('');
  document.getElementById('newsListHome').innerHTML = html;
  document.getElementById('newsListAll').innerHTML = html;
  document.getElementById('recentNews').innerHTML =
    NEWS.slice(0,4).map(n=>`<li><div class="muted" style="font-size:.75rem">${n.date}</div>${n.title}</li>`).join('');
}

// リンク描画
function renderLinks(){
  let total = 0;
  document.getElementById('linkCats').innerHTML = LINK_CATEGORIES.map(cat=>{
    total += cat.items.length;
    return `<div class="link-cat" data-cat="${cat.title}">
      <h3>${cat.title}</h3>
      <ul>${cat.items.map(i=>`<li><a href="${i.url}" target="_blank" data-name="${i.name}">${i.name}</a></li>`).join('')}</ul>
    </div>`;
  }).join('');
  document.getElementById('linkCount').textContent = total;
}

// ゲーム描画
function renderGames(){
  const cards = GAMES.map(g=>`
    <div class="game-card" onclick="openGame('${g.url}')">
      <div class="thumb"><img src="${g.img}" alt="${g.name}" loading="lazy"></div>
      <div class="name">${g.name}</div>
    </div>`).join('');
  document.getElementById('gameGridAll').innerHTML = cards;
  document.getElementById('gameGridHome').innerHTML = GAMES.slice(0,8).map(g=>`
    <div class="game-card" onclick="openGame('${g.url}')">
      <div class="thumb"><img src="${g.img}" alt="${g.name}" loading="lazy"></div>
      <div class="name">${g.name}</div>
    </div>`).join('');
  document.getElementById('gameCount').textContent = `全 ${GAMES.length} 件`;
  document.getElementById('gameStat').textContent = GAMES.length;
}

// 検索（リンクのみ簡易フィルタ）
function filterLinks(q){
  q = q.trim().toLowerCase();
  if(q) showPage('links');
  document.querySelectorAll('#linkCats .link-cat').forEach(cat=>{
    let visible = 0;
    cat.querySelectorAll('li').forEach(li=>{
      const name = li.querySelector('a').dataset.name.toLowerCase();
      const ok = !q || name.includes(q);
      li.style.display = ok ? '' : 'none';
      if(ok) visible++;
    });
    cat.style.display = visible ? '' : 'none';
  });
}

// ページ切替
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(id+'-page');
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.classList.toggle('active', a.dataset.page===id);
  });
  document.getElementById('gnav').classList.remove('open');
  window.scrollTo(0,0);
}

// 設定
function toggleTheme(){ document.body.classList.toggle('dark-mode'); }
function changePrimaryColor(c){ document.documentElement.style.setProperty('--primary',c); }
function resetPrimaryColor(){
  const c = document.body.classList.contains('dark-mode') ? '#5aa9ff' : '#0b5fa5';
  changePrimaryColor(c);
  document.getElementById('primary-color-picker').value = c;
}
function changeFontSize(s){ document.body.style.fontSize = s+'px'; }
function changeBackgroundPattern(p){
  const b = document.body.style;
  if(p==='none'){ b.backgroundImage='none'; }
  else if(p==='dots'){ b.backgroundImage='radial-gradient(var(--text-muted) 1px,transparent 1px)'; b.backgroundSize='25px 25px'; }
  else { b.backgroundImage='linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)'; b.backgroundSize='30px 30px'; }
}

// ゲームモーダル
function openGame(url){
  document.getElementById('game-modal').style.display='flex';
  document.getElementById('game-frame').src=url;
}
function closeGame(){
  document.getElementById('game-modal').style.display='none';
  document.getElementById('game-frame').src='';
}
function toggleFullScreen(){
  const f = document.getElementById('game-frame');
  if(!document.fullscreenElement) f.requestFullscreen(); else document.exitFullscreen();
}

// 初期化
renderNews();
renderLinks();
renderGames();
showPage('home');

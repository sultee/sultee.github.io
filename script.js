var products = [
  'The Amazon of CBD',
  'Best ski resorts to live, work and shred at',
  'The Easiest Way To Create Marketing Videos',
  'ShotBy Stamp to Videos from Phone Gallery & Watermark Camera',
  'Face-swap in GIFs and video',
  'Organize your co-parenting schedule',
  'Marketplace for small, curated international group travel',
  'Memorising made convenient',
  'New Tab with Unsplash Images & DuckDuckGo Search for Chrome',
  'deteled',
  'Video Downloader for tik tok',
  'Make you a good designer by simple drag and drop',
  'anti-venom market are Getting More Demand in Healthcare',
  'A Gitlab clients to stay tuned with your issues',
  'Smart obstacle avoidance, following, playing music, tracking',
  'Collaborate with super freelance designers.',
  '70+ Black Friday deals from direct-to-consumer brands',
  'Discount Coupon' ,
  'Explore 200 Startup Deals in Just 2 Minutes 😮',
  'Natural Pink Crystal Night Light Air Purifier w/ Holder',
  'Leaderboard with your friends for your favorite games',
  'SEO crawler and log analyzer',
  'Hand-Picked Deals For Maker. No Tracking & No Affiliate Link',
  'Charge your gadgets with the Best Cables',
  'An SSD that fits on your keychain',
  'global heights, global heights sohna',
  'Peer to peer, disposable & secure video chat.'
]


function newProduct() {
var randomNumber = Math.floor(Math.random()*(products.length));
document.getElementById('productPlace').innerHTML = products[randomNumber];
}

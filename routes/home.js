const express = require('express');
const router = express.Router();
const umkmData = require('../data/umkm');  // sesuaikan path

// Fungsi pembantu
function formatRupiah(num) {
  if (!num) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getIcon(bidang) {
  if (bidang.includes('Makanan')) return '🍜';
  if (bidang.includes('Kerajinan')) return '🧵';
  if (bidang.includes('Fashion')) return '👗';
  if (bidang.includes('Kopi') || bidang.includes('Minuman')) return '☕';
  return '🏪';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'UMKM Nagari Tanjung Bonai Aur',
    umkmList: umkmData,
    menu: [
      { label: 'Beranda', href: '#beranda' },
      { label: 'UMKM', href: '#umkm' },
      { label: 'Tentang', href: '#tentang' }
    ],
    stats: [
      { value: umkmData.length, label: 'UMKM Terdata' },
      { value: '3+', label: 'Kategori Usaha' },
      { value: '2020', label: 'UMKM Tertua' },
      { value: '📱', label: 'Kontak Langsung' }
    ],
    categories: [
      { icon: '🍜', title: 'Makanan & Minuman', text: 'Kuliner khas dan camilan lezat' },
      { icon: '🧵', title: 'Kerajinan', text: 'Rajut, tenun, dan karya tangan' },
      { icon: '👗', title: 'Fashion', text: 'Kain tenun, sarung, dan busana' },
      { icon: '☕', title: 'Kopi & Minuman', text: 'Kopi robusta lokal berkualitas' }
    ],
    formatRupiah: formatRupiah,
    getIcon: getIcon
  });
});

module.exports = router;
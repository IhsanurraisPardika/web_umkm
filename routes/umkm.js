const express = require('express');
const router = express.Router();
const umkmData = require('../data/umkm');

function formatRupiah(num) {
  if (!num) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getIcon(bidang) {
  if (!bidang) return '🏪';
  if (bidang.includes('Kerajinan') && bidang.includes('Fashion')) return '👗';
  if (bidang.includes('Makanan')) return '🍜';
  if (bidang.includes('Kerajinan')) return '🧵';
  if (bidang.includes('Fashion')) return '👗';
  if (bidang.includes('Kopi') || bidang.includes('Minuman')) return '☕';
  return '🏪';
}

function getCardHeaderClass(index) {
  const classes = ['bg-[#5A3720]', 'bg-[#A37B57]', 'bg-[#BD8B5B]'];
  return classes[index % classes.length];
}

router.get('/', function(req, res) {
  res.render('umkm', {
    title: 'Daftar UMKM - BonaiUMKM',
    umkmList: umkmData,
    menu: [
      { label: 'Beranda', href: '/' },
      { label: 'UMKM', href: '/umkm' },
      { label: 'Tentang', href: '/#tentang' }
    ],
    formatRupiah,
    getIcon,
    getCardHeaderClass
  });
});

module.exports = router;

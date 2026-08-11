const umkmList = require('../data/umkm');

function formatRupiah(num) {
  if (!num) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getIcon(bidang) {
  if (!bidang) return '🏪';
  if (bidang.includes('Makanan')) return '🍜';
  if (bidang.includes('Kerajinan')) return '🧵';
  if (bidang.includes('Fashion')) return '👗';
  if (bidang.includes('Kopi') || bidang.includes('Minuman')) return '☕';
  return '🏪';
}

exports.index = function(req, res) {
  res.render('UMKM', {
    title: 'Daftar UMKM - BonaiUMKM',
    umkmList,
    menu: [
      { label: 'Beranda', href: '/' },
      { label: 'UMKM', href: '/umkm' },
      { label: 'Tentang', href: '/tentang' }
    ],
    categories: [
      { icon: '🍜', title: 'Makanan', text: 'Kuliner rumahan dan produk siap saji' },
      { icon: '🧵', title: 'Kerajinan', text: 'Rajut, tenun, dan karya tangan' },
      { icon: '👗', title: 'Fashion', text: 'Busana, kain, dan produk sandang' }
    ],
    stats: [
      { value: umkmList.length, label: 'UMKM Terdata' },
      { value: '3', label: 'Kategori Utama' },
      { value: '2020', label: 'UMKM Tertua' }
    ],
    formatRupiah,
    getIcon
  });
};
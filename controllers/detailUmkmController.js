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

function buildProducts(umkm) {
	if (!umkm) return [];

	if (umkm.bidang.includes('Kerajinan')) {
		return [
			{ nama: 'Produk Unggulan', harga: formatRupiah(umkm.hargaDari) },
			{ nama: 'Varian Premium', harga: formatRupiah(umkm.hargaSampai || umkm.hargaDari) },
			{ nama: 'Paket Hemat', harga: formatRupiah(umkm.hargaDari * 2) },
			{ nama: 'Pesanan Khusus', harga: 'Custom' }
		];
	}

	return [
		{ nama: 'Menu Unggulan', harga: formatRupiah(umkm.hargaDari) },
		{ nama: 'Paket Komplit', harga: formatRupiah(umkm.hargaSampai || umkm.hargaDari) },
		{ nama: 'Porsi Hemat', harga: formatRupiah(Math.round(umkm.hargaDari * 1.5)) },
		{ nama: 'Pesanan Acara', harga: 'Custom' }
	];
}

function buildGallery(umkm) {
	if (!umkm) return [];

	return [
		{ label: 'Foto Pemilik', icon: '👤' },
		{ label: 'Foto Tempat Usaha', icon: '🏪' },
		{ label: 'Foto Produk Unggulan', icon: '🍱' },
		{ label: 'Foto Proses Produksi', icon: '👩‍🍳' }
	];
}

exports.show = function(req, res, next) {
	const id = Number(req.params.id);
	const umkm = umkmData.find((item) => item.id === id);

	if (!umkm) {
		return next();
	}

	res.render('detailUmkm', {
		title: `${umkm.nama} - BonaiUMKM`,
		umkm,
		menu: [
			{ label: 'Beranda', href: '/' },
			{ label: 'UMKM', href: '/umkm' },
			{ label: 'Tentang', href: '/tentang' }
		],
		formatRupiah,
		getIcon,
		products: buildProducts(umkm),
		gallery: buildGallery(umkm)
	});
};

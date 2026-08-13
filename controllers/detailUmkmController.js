const umkmData = require('../data/umkm');

function formatRupiah(num) {
	if (!num && num !== 0) return '';
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getIcon(bidang) {
	if (!bidang) return '🏪';
	if (bidang.includes('Kerajinan') && bidang.includes('Fashion')) return '👗';
	if (bidang.includes('Makanan')) return '🍜';
	if (bidang.includes('Kerajinan')) return '🧵';
	if (bidang.includes('Fashion')) return '👗';
	if (bidang.includes('Kopi') || bidang.includes('Minuman')) return '☕';
	if (bidang.includes('Perdagangan') || bidang.includes('Sembako')) return '🏬';
	return '🏪';
}

function buildProducts(umkm) {
	if (!umkm) return [];
	if (Array.isArray(umkm.produkList) && umkm.produkList.length > 0) {
		return umkm.produkList;
	}

	if (umkm.bidang && umkm.bidang.includes('Kerajinan')) {
		return [
			{ nama: 'Produk Unggulan', harga: formatRupiah(umkm.hargaDari) || 'Sesuai Pesanan', foto: '', tag: 'Unggulan' },
			{ nama: 'Varian Premium', harga: formatRupiah(umkm.hargaSampai || umkm.hargaDari) || 'Custom', foto: '', tag: 'Populer' },
			{ nama: 'Paket Hemat', harga: umkm.hargaDari ? formatRupiah(umkm.hargaDari * 2) : 'Custom', foto: '', tag: 'Pilihan' },
			{ nama: 'Pesanan Khusus', harga: 'Custom', foto: '', tag: 'Pre-Order' }
		];
	}

	return [
		{ nama: 'Menu Unggulan', harga: formatRupiah(umkm.hargaDari) || 'Sesuai Pesanan', foto: '', tag: 'Unggulan' },
		{ nama: 'Paket Komplit', harga: formatRupiah(umkm.hargaSampai || umkm.hargaDari) || 'Custom', foto: '', tag: 'Populer' },
		{ nama: 'Porsi Hemat', harga: umkm.hargaDari ? formatRupiah(Math.round(umkm.hargaDari * 1.5)) : 'Custom', foto: '', tag: 'Pilihan' },
		{ nama: 'Pesanan Acara', harga: 'Custom', foto: '', tag: 'Pre-Order' }
	];
}

function buildGallery(umkm) {
	if (!umkm) return [];
	if (Array.isArray(umkm.galeri) && umkm.galeri.length > 0) {
		return umkm.galeri;
	}

	return [
		{ label: 'Foto Tempat Usaha', url: '', icon: '🏪' },
		{ label: 'Foto Produk Unggulan', url: '', icon: '🍱' },
		{ label: 'Foto Proses Produksi', url: '', icon: '👩‍🍳' },
		{ label: 'Foto Pelayanan Usaha', url: '', icon: '✨' }
	];
}

exports.show = function (req, res, next) {
	delete require.cache[require.resolve('../data/umkm')];
	const umkmData = require('../data/umkm');
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

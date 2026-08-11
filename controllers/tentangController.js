const teamIhsan = {
	nama: 'Ihsanurrais Pardika',
	jurusan: 'S-1 Sistem Informasi',
	nim: '2311523031',
	hp: '082384563492  ',
	foto: '/images/IHSAN.JPG'
};

const teamAulia = {
	nama: 'Aulia',
	jurusan: 'Sistem Informasi',
	nim: '2021XXXXX',
	hp: '08XXXXXXXXXX',
	foto: '/images/TBA.jpg'
};

const teamRizky = {
	nama: 'Rizky',
	jurusan: 'Teknik Komputer',
	nim: '2021XXXXX',
	hp: '08XXXXXXXXXX',
	foto: '/images/TBA.jpg'
};

const teamNabila = {
	nama: 'Nabila',
	jurusan: 'Manajemen Informatika',
	nim: '2021XXXXX',
	hp: '08XXXXXXXXXX',
	foto: '/images/TBA.jpg'
};

exports.index = function(req, res) {
	res.render('tentang', {
		title: 'Tentang - TBA UMKM',
		menu: [
			{ label: 'Beranda', href: '/' },
			{ label: 'UMKM', href: '/umkm' },
			{ label: 'Tentang', href: '/tentang' }
		],
		team: [teamIhsan, teamAulia, teamRizky, teamNabila]
	});
};

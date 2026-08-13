const teamIhsan = {
	nama: 'Ihsanurrais Pardika',
	jurusan: 'S-1 Sistem Informasi',
	nim: '2311523031',
	hp: '082384563492  ',
	foto: '/images/IHSAN.JPG'
};

const teamAlya = {
	nama: 'Alya Prastika',
	jurusan: 'S-1 Ilmu Ekonomi',
	nim: '2310512004',
	hp: '082122690963',
	foto: '/images/ALYA1.jpeg'
};

const teamAmi = {
	nama: 'Septia Rahmi',
	jurusan: 'S-1 Sastra Indonesia',
	nim: '2310721032',
	hp: '082171053824',
	foto: '/images/AMI.jpg'
};

const teamALif = {
	nama: 'Alif M. Danza',
	jurusan: 'S-1 Ilmu Politik',
	nim: '2310832018',
	hp: '081275904717',
	foto: '/images/ALIF.jpeg'
};

exports.index = function(req, res) {
	res.render('tentang', {
		title: 'Tentang - TBA UMKM',
		menu: [
			{ label: 'Beranda', href: '/' },
			{ label: 'UMKM', href: '/umkm' },
			{ label: 'Tentang', href: '/tentang' }
		],
		team: [teamIhsan, teamAlya, teamAmi, teamALif]
	});
};

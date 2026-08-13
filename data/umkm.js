/**
 * Database Data UMKM Nagari Tanjung Bonai Aur
 * Berisi informasi identitas usaha, informasi produk & harga, pemasaran,
 * kontak media sosial, serta slot untuk foto utama, foto produk, dan galeri dokumentasi.
 */

module.exports = [
  {
    id: 1,
    nama: 'Kedai Aypo',
    pemilik: 'Wahyu Putri Serlia',
    alamat: 'Simpang 5, Jorong Koto Baru, TBA',
    whatsapp: '6282260515659',
    tahun: 2020,
    tahunBerdiri: 'November 2020',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Lahir dari kebosanan di masa pandemi COVID-19 awal 2020, bisnis ini bermula dari eksperimen boba skala rumahan. Berkat respons positif, kami memberanikan diri membuka kedai resmi pada November 2020. Namun, dunia kuliner selalu berputar. Demi menjawab tren dan selera pasar, kami memutuskan untuk bertransformasi. Kini, kami telah beralih sepenuhnya untuk menyajikan kelezatan Corndog, camilan gurih dengan keju mozzarella lumer dan balutan adonan renyah yang siap memanjakan lidah Anda. Dari segelas boba hingga stik corndog, komitmen kami tetap sama: menyajikan kualitas terbaik untuk Anda!',
    produkUtama: 'Mie Padeh, Corndog Mozarella, Smootish, Teh Es',
    produkDiminati: 'Corndog',
    hargaDari: 5000,
    hargaSampai: 15000,
    hargaDisplay: 'Rp 5.000 - Rp 15.000',
    jamOperasional: '10.00 WIB - 23.00 WIB',
    pemasaran: 'Offline, Toko Fisik',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: 'https://www.facebook.com/share/1BxYvBWGZL/',
      instagram: 'https://www.instagram.com/kedaiaypo?igsh=MTVmNGM2ZDc1aXhzcA==',
      tiktok: 'https://www.tiktok.com/@kedai.aypo?_r=1&_t=ZS-9837Ol8IGgP',
      marketplace: ''
    },
    // Slot Foto UMKM (Kosongkan jika belum tersedia)
    fotoUtama: '/images/A5.JPG',
    fotoProduk: ['/images/A1.JPG', '/images/A2.JPG', '/images/A3.JPG', '/images/A4.JPG'],
    galeri: [
      { label: 'Stand & Tempat Usaha Kedai Aypo', url: '/images/A1.JPG', icon: '🏪', deskripsi: 'Stand etalase aneka sachet minuman dan tempat pemesanan di Simpang 5' },
      { label: 'Banner Pilihan Menu & Minuman', url: '/images/A2.JPG', icon: '📋', deskripsi: 'Daftar menu minuman segar, aneka teh, jus buah, dan makanan' },
      { label: 'Pilihan Menu Kedai Aypo', url: '/images/A3.JPG', icon: '📜', deskripsi: 'Daftar menu lengkap seperti Boba, Pokat Kocok, Teh Anggur, dan Crondog' },
      { label: 'Menu Mie Pedas & Crondog Mozarella', url: '/images/A4.JPG', icon: '🍢', deskripsi: 'Menu andalan Mie Pedas Level dan Corndog Mozarella renyah lumer' },
      { label: 'Dokumentasi Stand Kedai Aypo', url: '/images/A5.JPG', icon: '📸', deskripsi: 'Suasana kedai saat kunjungan pendataan UMKM Nagari' },
      { label: 'Foto Bersama Pengelola Usaha', url: '/images/A6.JPG', icon: '👥', deskripsi: 'Pemilik Kedai Aypo bersama Tim Mahasiswa KKN Nagari Tanjung Bonai Aur' }
    ],
    produkList: [
      { nama: 'Corndog Mozarella', harga: '15.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Mie Padeh Spesial', harga: '10.000', foto: '', tag: 'Menu Utama' },
      { nama: 'Smootish Aneka Rasa', harga: '8.000', foto: '', tag: 'Minuman' },
      { nama: 'Teh Es Segar', harga: '5.000', foto: '', tag: 'Minuman' }
    ]
  },
  {
    id: 2,
    nama: 'Fika Rajut',
    pemilik: 'Rafika',
    alamat: 'Jorong Koto Tinggi, TBA',
    whatsapp: '6285278176631',
    tahun: 2023,
    tahunBerdiri: '2023',
    bidang: 'Kerajinan',
    badge: 'Kerajinan',
    deskripsi: 'UMKM FIKA RAJUT berdiri pada tahun 2023 dan berawal dari hobi pemilik dalam membuat berbagai kerajinan rajut untuk mengisi waktu luang. Awalnya, kegiatan merajut dilakukan hanya sekadar iseng. Namun, ketika ada seseorang yang tertarik dan menanyakan harga salah satu hasil rajutannya, pemilik mulai menyadari bahwa produknya memiliki potensi untuk dijadikan usaha. Sejak saat itu, pesanan mulai berdatangan dari mulut ke mulut hingga usaha ini terus berkembang.',
    produkUtama: 'Tas rajut, gantungan kunci, tapak meja bundar',
    produkDiminati: 'Tas Rajut',
    hargaDari: 20000,
    hargaSampai: 200000,
    hargaDisplay: 'Rp 20.000 - Rp 200.000',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Toko/Kedai, WA, Facebook',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: 'https://www.facebook.com/search/top?q=Rafika%20Inka',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/F4.jpeg',
    fotoProduk: [],
    galeri: [
      { label: 'Foto Tas Rajut Lainnya', url: '/images/F1.JPG', icon: '' },
      { label: 'Foto Tas Rajut Unggulan', url: '/images/F2.JPG', icon: '' },
      { label: 'Foto Tas Rajut', url: '/images/F3.JPG', icon: '' },
      { label: '', url: '/images/F5.jpeg', icon: '' }
    ],
    produkList: [
      { nama: 'Tas Rajut Handmade', harga: '100.000 - 200.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Tapak Meja Bundar Rajut', harga: '50.000', foto: '', tag: 'Kerajinan' },
      { nama: 'Gantungan Kunci Rajut', harga: '20.000', foto: '', tag: 'Aksesoris' },
      { nama: 'Pesanan Rajut Custom Motif', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 3,
    nama: 'Kopi Mase',
    pemilik: 'Sapardi',
    alamat: 'Jorong Bonai, TBA',
    whatsapp: '6281261020447',
    tahun: null,
    tahunBerdiri: 'BELUM DIPASARKAN',
    bidang: 'Makanan dan Minuman',
    badge: 'Minuman',
    deskripsi: 'Berawal dari kebiasaan menikmati kopi hasil kebun sendiri bersama sang nenek, Pak Sapardi mulai mencoba mengolah biji kopi robusta menjadi bubuk kopi berkualitas. Awalnya, proses penggilingan dilakukan menggunakan mesin penggiling beras yang telah dimiliki dari usaha penggilingan beras miliknya. Seiring berjalannya waktu, bahan baku kopi diperoleh dari para petani kopi di sekitar daerah untuk menjaga kualitas dan mendukung hasil panen lokal. Saat ini, Kopi Mase sedang dalam tahap pengurusan sertifikat halal dan perizinan produk sebelum dipasarkan secara luas. Ke depannya, produk kopi kemasan 40 gram ini direncanakan akan dipasarkan melalui warung-warung sekitar agar semakin mudah dinikmati oleh masyarakat.',
    produkUtama: 'Kopi',
    produkDiminati: 'Kopi',
    hargaDari: 6000,
    hargaSampai: null,
    hargaDisplay: 'Rp 6.000 / 45gr',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Toko/Kedai, WA',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/KPM1.jpg',
    fotoProduk: [],
    galeri: [
      { label: 'Produk Kopi Mase', url: '/images/KM2.jpg', icon: '' },
      { label: 'Bubuk Kopi Robusta', url: '/images/KM3.jpg', icon: '' },
      { label: 'Biji Kopi Mase', url: '/images/KM4.jpg', icon: '' },
      { label: 'Olahan Kopi Mase', url: '/images/KM1.jpg', icon: '' }
    ],
    produkList: [
      { nama: 'Kopi Bubuk Mase (45gr)', harga: '6.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Kopi Robusta Kemasan Sedang', harga: '12.000', foto: '', tag: 'Varian' },
      { nama: 'Paket Kopi Robusta Lokal', harga: '25.000', foto: '', tag: 'Paket' },
      { nama: 'Pesanan Biji / Bubuk Khusus', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 4,
    nama: 'Pempek Mase',
    pemilik: 'Sapardi',
    alamat: 'Jorong Bonai, TBA',
    whatsapp: '6281261020447',
    tahun: 2020,
    tahunBerdiri: '2020',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Berawal dari hobi mengolah makanan dan melihat peluang usaha rumahan, Pak Sapardi mulai memproduksi Pempek Mase pada tahun 2020. Dengan mengutamakan cita rasa yang khas dan harga yang terjangkau, pempek dipasarkan melalui WhatsApp, dititipkan di warung-warung sekitar, serta diantarkan langsung kepada pelanggan yang melakukan pemesanan. Hingga kini, Pempek Mase terus mempertahankan kualitas rasa dan pelayanan agar dapat menjadi pilihan camilan favorit bagi masyarakat sekitar.',
    produkUtama: 'Pempek',
    produkDiminati: 'Pempek',
    hargaDari: 5000,
    hargaSampai: null,
    hargaDisplay: 'Rp 5.000 / bungkus',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Toko/Kedai, WA',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/KPM.jpg',
    fotoProduk: [],
    galeri: [
      { label: 'Tempat Usaha Pempek', url: '/images/KPM1.jpg', icon: '' },
      { label: 'Pempek Siap Saji', url: '/images/PM1.jpg', icon: '' },
      { label: 'Pempek Siap Saji', url: '/images/PM2.jpg', icon: '' },
      { label: '', url: '/images/KPM.jpg', icon: '👩' }
    ],
    produkList: [
      { nama: 'Pempek Porsi Bungkus', harga: '5.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Paket Pempek Komplit Cuko', harga: '10.000', foto: '', tag: 'Paket' },
      { nama: 'Pempek Frozen / Beku', harga: '15.000', foto: '', tag: 'Frozen' },
      { nama: 'Pesanan Khusus Acara', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 5,
    nama: 'Kalamai Berkah',
    pemilik: 'Kelompok Jorong Bonai',
    alamat: 'Jorong Bonai, TBA',
    whatsapp: '6282391992665',
    tahun: 2024,
    tahunBerdiri: 'September 2024',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Kalamai Berkah Jorong Bonai lahir pada September 2024 berkat inisiatif masyarakat dalam memeriahkan Festival Nagari, di mana setiap jorong diwajibkan menghadirkan produk kuliner khas. Dengan modal awal yang diberikan oleh pemerintah nagari, masyarakat Jorong Bonai membentuk sebuah kelompok usaha untuk memproduksi kalamai, salah satu makanan tradisional khas Minangkabau.',
    produkUtama: 'Kalamai',
    produkDiminati: 'Kalamai',
    hargaDari: 15000,
    hargaSampai: 90000,
    hargaDisplay: 'Rp 15.000/cup - Rp 90.000/kg',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Toko/Kedai, WA',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/K7.jpg',
    fotoProduk: [],
    galeri: [
      { label: 'Tempat Produksi Kalamai', url: '/images/K1.jpg', icon: '' },
      { label: '', url: '/images/K2.jpg', icon: '' },
      { label: '', url: '/images/K3.jpg', icon: '' },
      { label: '', url: '/images/K8.jpg', icon: '' }
    ],
    produkList: [
      { nama: 'Kalamai Kemasan Cup', harga: '15.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Kalamai Kemasan 500 gram', harga: '45.000', foto: '', tag: 'Populer' },
      { nama: 'Kalamai Asli 1 Kg', harga: '90.000', foto: '', tag: 'Kiloan' },
      { nama: 'Pesanan Oleh-Oleh & Acara', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 6,
    nama: '4 Saudara',
    pemilik: 'Sumarni',
    alamat: 'Jorong Loban Bungkuak, TBA',
    whatsapp: '6285355765969',
    tahun: 2005,
    tahunBerdiri: '2005',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Berawal dari permintaan kerabat dan tetangga yang sering meminta dibuatkan aneka kue tradisional, Ibu Sumarni melihat peluang untuk menjadikannya sebagai sebuah usaha. Setelah mengikuti pelatihan pembuatan kue di Muaro pada tahun 2005, beliau mulai memproduksi berbagai kue khas seperti kue sapik, kue kare-kare, dan kembang goyang. Berbekal modal sendiri, usaha ini terus berkembang dengan mengutamakan cita rasa tradisional dan kualitas produk.',
    produkUtama: 'Kue Kering',
    produkDiminati: 'Kare-kare, Kembang Goyang, Sapik',
    hargaDari: 500,
    hargaSampai: 1000,
    hargaDisplay: 'Rp 500 - Rp 1.000 / pcs',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Toko/Kedai, WA',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/S12.jpg',
    fotoProduk: [],
    galeri: [
      { label: 'Foto Ibu Sumarni Bersama tim KKN UNAND', url: '/images/S8.JPG', icon: '' },
      { label: 'Foto Kue Kare-kare', url: '/images/S2.JPG', icon: '' },
      { label: 'Foto Kembang Goyang (Kembang Loyang)', url: '/images/S6.JPG', icon: '' },
      { label: 'Foto Kue Sapik Tradisional', url: '/images/S7.JPG', icon: '' }
    ],
    produkList: [
      { nama: 'Kue Kare-kare', harga: '1.000 / pcs', foto: '', tag: 'Paling Diminati' },
      { nama: 'Kue Sapik Gurih Manis', harga: '700 / pcs', foto: '', tag: 'Favorit' },
      { nama: 'Kembang Goyang / Loyang', harga: '500 / pcs', foto: '', tag: 'Tradisional' },
      { nama: 'Paket Aneka Kue Kering', harga: 'Custom', foto: '', tag: 'Paket Acara' }
    ]
  },
  {
    id: 7,
    nama: 'Kerajinan Tenun',
    pemilik: 'Betri Yeni',
    alamat: 'Jorong Koto Baru, TBA',
    whatsapp: '6282284731086',
    tahun: 2023,
    tahunBerdiri: '2023',
    bidang: 'Kerajinan dan Fashion',
    badge: 'Fashion',
    deskripsi: 'Usaha tenun milik Ibu Betri Yani berdiri sejak tahun 2023. Sebelumnya, Ibu Betri menjalankan usaha batik, namun kemudian beralih ke usaha tenun. Usaha ini memproduksi kain tenun, sarung, baju, dan selendang dengan motif yang dapat disesuaikan berdasarkan permintaan pelanggan. Proses produksi menggunakan bahan baku dari Silungkang, dengan tahap akhir perendaman kain menggunakan cuka apel agar serat kain menjadi lebih lembut. Pemasaran dilakukan melalui sistem titip jual di Central Tenun Lintau serta melayani pesanan langsung dari pelanggan.',
    produkUtama: 'Kain Tenun lepas dari kain baju, sarung dan selendang',
    produkDiminati: 'Kain tenun yang sesuai dengan pesanan pelanggan',
    hargaDari: 100000,
    hargaSampai: 350000,
    hargaDisplay: 'Rp 100.000 - Rp 350.000',
    jamOperasional: 'Fleksibel',
    pemasaran: 'Offline, WA',
    punyaMedsos: 'Tidak',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/T7.JPG',
    fotoProduk: [],
    galeri: [
      { label: 'Foto Alat Tenun & Tempat Usaha', url: '/images/T6.JPG', icon: '' },
      { label: 'Foto Kain Tenun Silungkang', url: '/images/T5.JPG', icon: '' },
      { label: 'Foto Baju & Sarung Tenun', url: '/images/T4.JPG', icon: '' },
      { label: 'Foto Selendang Motif Cantik', url: '/images/T2.JPG', icon: '' }
    ],
    produkList: [
      { nama: 'Baju Tenun Khas', harga: '350.000', foto: '', tag: 'Unggulan' },
      { nama: 'Sarung Tenun Motif Tradisional', harga: '300.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Selendang Tenun Cantik', harga: '100.000', foto: '', tag: 'Elegan' },
      { nama: 'Kain Tenun Lepas (Custom Motif)', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 8,
    nama: 'Kue Kering Annasya',
    pemilik: 'Diana Gushar',
    alamat: 'Jr. Pauh, Nagari Tanjung Bonai Aur, Sumpur Kudus, Kab. Sijunjung',
    whatsapp: '6285319505075',
    tahun: null,
    tahunBerdiri: '',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Kue Kering Annasya merupakan UMKM yang bergerak dalam pembuatan aneka kue kering tradisional dan modern di Nagari Tanjung Bonai Aur. Mengusung tagline "Nyaman di lidah ramah di kantong", usaha ini memproduksi camilan berkualitas seperti keripik pangsit. Keamanan dan kualitas produk sudah terjamin karena telah mengantongi izin P-IRT (2051303010831-28) serta sertifikasi Halal.',
    produkUtama: '',
    produkDiminati: '',
    hargaDari: null,
    hargaSampai: null,
    hargaDisplay: '',
    jamOperasional: '',
    pemasaran: '',
    punyaMedsos: '',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/AN1.JPG',
    fotoProduk: [],
    galeri: [
      { label: 'Tempat Usaha', url: '/images/AN3.JPG', icon: '' },
      { label: 'Produk Kue Kering', url: '/images/AN6.JPG', icon: '' },
      { label: 'Keripik Ubi Ungu', url: '/images/AN4.JPG', icon: '' },
      { label: 'Foto Kemasan Kue', url: '/images/AN5.JPG', icon: '' }
    ],
    produkList: [
      { nama: 'Kue Kering Pilihan', harga: 'Sesuai Pesanan', foto: '', tag: 'Produk' },
      { nama: 'Paket Toples Kue', harga: 'Sesuai Pesanan', foto: '', tag: 'Paket' },
      { nama: 'Kue Kering Lebaran / Acara', harga: 'Custom', foto: '', tag: 'Pre-Order' }
    ]
  },
  {
    id: 9,
    nama: 'Tapian Kuliner TBA',
    pemilik: 'Sutri Nengsih',
    alamat: 'Jorong, TBA',
    whatsapp: '6285264931801',
    tahun: 2017,
    tahunBerdiri: '2017',
    bidang: 'Makanan dan Minuman',
    badge: 'Makanan',
    deskripsi: 'Tapian Kuliner TBA merupakan usaha kuliner milik Ibu Sutri Nengsih yang telah berdiri sejak tahun 2017. Sebelumnya, usaha ini dikenal dengan produk bakso kuah dan kini berkembang menjadi Tapian Kuliner TBA yang menyediakan berbagai pilihan makanan dan minuman dengan harga yang terjangkau. Salah satu produk utamanya adalah bakso pentol yang diproduksi hingga tiga kali dalam sehari untuk memenuhi kebutuhan pelanggan. Selain itu, tersedia juga berbagai varian minuman seperti Pop Ice, Nutrisari, teh es, teh hijau, dan minuman boba. Pemasaran produk dilakukan secara langsung kepada konsumen serta melalui media sosial seperti TikTok, Instagram, dan Facebook. Ke depan, Tapian Kuliner TBA juga berencana mengembangkan produk bakso frozen dan memasarkannya melalui platform digital seperti Shopee dan TikTok. Saat ini, usaha juga sedang dalam proses pengurusan NIB dan sertifikat halal sebagai bagian dari pengembangan usaha.',
    produkUtama: 'Bakso pentol, berbagai makanan, serta aneka minuman.',
    produkDiminati: 'Bakso pentol.',
    hargaDari: 3000,
    hargaSampai: 6000,
    hargaDisplay: 'Rp 3.000 - Rp 6.000',
    jamOperasional: '13.00 – 21.00 WIB',
    pemasaran: 'Toko/Kedai, WA',
    punyaMedsos: 'Ya',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/TP4.jpg',
    fotoProduk: [],
    galeri: [
      { label: 'Foto Kedai Tapian Kuliner', url: '/images/TP1.jpg', icon: '' },
      { label: 'Foto Bakso Pentol', url: '/images/TP2.jpg', icon: '' },
      { label: '', url: '/images/TP3.jpg', icon: '' },
      { label: '', url: '/images/TP4.jpg', icon: '' }
    ],
    produkList: [
      { nama: 'Bakso Pentol Spesial', harga: '5.000', foto: '', tag: 'Paling Diminati' },
      { nama: 'Pop Ice Aneka Rasa', harga: '6.000', foto: '', tag: 'Minuman' },
      { nama: 'Teh Hijau Segar', harga: '3.000 - 5.000', foto: '', tag: 'Minuman' },
      { nama: 'Aneka Makanan & Minuman Lainnya', harga: 'Mulai 3.000', foto: '', tag: 'Pilihan' }
    ]
  },
  {
    id: 10,
    nama: 'Warung Harian Bu Uci',
    pemilik: 'Uci Ira Arisna',
    alamat: 'Padang Tarang, Jorong Koto Tinggi, TBA',
    whatsapp: '6282387432131',
    tahun: null,
    tahunBerdiri: '2019',
    bidang: 'Perdagangan & Kebutuhan Harian',
    badge: 'Sembako',
    deskripsi: 'Usaha ini pada awalnya merupakan jasa fotokopi yang dirintis bersama suami selama 7 bulan. Karena dampak pandemi, usaha ini beradaptasi dengan pindah lokasi pada tahun 2022 dan beralih berjualan minyak goreng. Seiring berjalannya waktu, usaha ini berkembang pesat menjadi warung sembako harian yang lengkap. Sebagai inovasi tambahan, warung ini juga memproduksi es krim dan es mambo buatan sendiri yang dipasarkan khusus ke sekolah-sekolah sekitar.',
    produkUtama: 'Sembako',
    produkDiminati: '',
    hargaDari: null,
    hargaSampai: null,
    hargaDisplay: '',
    jamOperasional: '',
    pemasaran: '',
    punyaMedsos: '',
    sosialMedia: {
      facebook: '',
      instagram: '',
      tiktok: '',
      marketplace: ''
    },
    // Slot Foto UMKM
    fotoUtama: '/images/U1.JPG',
    fotoProduk: [],
    galeri: [
      { label: 'Foto Tempat Usaha', url: '/images/U3.JPG', icon: '' },
      { label: 'Foto Produk & Barang Dagangan', url: '/images/U9.JPG', icon: '🛒' },
      { label: 'Foto Barang Dagangan', url: '/images/U11.JPG', icon: '👥' },
      { label: 'Foto Suasana Toko', url: '/images/U5.JPG', icon: '🏬' }
    ],
    produkList: [
      { nama: 'Kebutuhan Sembako Harian', harga: 'Harga Pasar', foto: '', tag: 'Kebutuhan Pokok' },
      { nama: 'Aneka Minuman & Camilan', harga: 'Harga Warung', foto: '', tag: 'Camilan' },
      { nama: 'Perlengkapan Rumah Tangga', harga: 'Harga Bersaing', foto: '', tag: 'Harian' }
    ]
  }
];

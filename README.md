# Peta Kebun — PT VIGU FARM INDONESIA

Antarmuka GIS berjalan di GitHub Pages: https://vigufarm-web.github.io/peta-kebun/

Hanya Laporan Kebun memakai Vercel. API GIS khusus pada layanan Laporan Kebun memakai penyimpanan pusat yang sama; tidak ada penyimpanan atau proyek Vercel baru. Browser Peta memakai sesi khusus GIS yang tersimpan sementara di sessionStorage selama maksimum 8 jam. Password tidak disimpan. Token GIS tidak dapat mengakses laporan penjualan, upah, pengguna, atau backup. Logout, kedaluwarsa, akun nonaktif atau pergantian password membatalkan sesi.

Unggah/revisi ZIP atau GeoJSON dilakukan melalui aplikasi Peta, bukan halaman GitHub. Pratinjau wajib diperiksa sebelum diterapkan. ID blok tetap, riwayat batas/luas dan data tanam disimpan pada layanan pusat; transaksi historis tidak ditulis ulang. Semua komoditas memiliki luas GIS. Pisang memakai pokok tanam / 2.000 ha dan status PC/R; Padi memakai luas tanpa pokok atau PC/R.

GitHub Pages: deploy dari branch main, folder root. index.html memakai public/js, public/css dan public/vendor. File server lama pada repo adalah arsip sumber dan tidak dijalankan oleh GitHub Pages. Jangan mengisi secret server di repo ini. Foto udara ECW harus dikonversi menjadi tile/COG terpisah, bukan diunggah sebagai berkas besar ke repo.

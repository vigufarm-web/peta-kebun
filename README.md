# Peta Kebun — PT VIGU FARM INDONESIA

Proyek pengelolaan GIS dan data tanaman: blok, luas GIS seluruh komoditas, kelompok/musim tanam, serta riwayat revisi. Pisang memakai pokok tanam / 2.000 untuk luas tanam, sulam, kehilangan dan siklus PC/R1/R2/R3/R4. Padi memakai luas per musim tanpa PC/R.

## Hosting

Gunakan Vercel dengan Node.js 24 dan repositori ini sebagai root. Ini aplikasi server, bukan situs GitHub Pages statis. Berkas `.env.example` berisi nama variabel saja; nilai koneksi tidak disimpan di repositori.

Saat migrasi, hubungkan proyek ke **database pusat yang sudah digunakan Laporan Kebun**, menggunakan `TURSO_DATABASE_URL` dan `TURSO_AUTH_TOKEN` melalui pengaturan hosting. Jangan membuat database kosong lalu menganggapnya sebagai data kebun yang lama. Akun admin memakai data autentikasi pusat yang sama. API aplikasi ini dibatasi ke GIS dan autentikasi; endpoint laporan bisnis tidak tersedia.

Setelah aplikasi baru teruji, isi `GIS_EDITOR_URL` pada proyek Laporan Kebun dengan URL Peta Kebun yang baru. Pengelolaan GIS lama kemudian menolak perubahan dan mengarahkan pengelola ke proyek ini. Sebelum langkah itu, layanan lama masih dibutuhkan; jangan menghapus tabel GIS atau data laporan.

## Pemeriksaan

```sh
npm ci
npm test
```

Pengujian menggunakan database SQLite dalam memori, bukan database produksi. Berkas peta asli, foto udara, database, password, token dan konfigurasi privat tidak disimpan di source ini.

Panduan unggah ZIP/GeoJSON, ID tetap, pecah/gabung blok dan foto udara tersedia di [docs/peta-kebun.md](docs/peta-kebun.md).

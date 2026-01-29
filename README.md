# Pasti Bisa Menang - Landing Page

Repository ini berisi kode sumber untuk landing page aplikasi **Pasti Bisa Menang**.
Halaman ini dirancang untuk mendistribusikan file APK secara aman dan profesional melalui **GitHub Pages**.

## Fitur Utama

- **Hosting Aman:** Menggunakan infrastruktur GitHub Pages.
- **Download Terverifikasi:** File APK diunduh langsung dari [GitHub Releases](https://github.com/jakomano/pastibisamenang/releases).
- **Fallback System:** Menyediakan link alternatif jika download utama gagal.
- **Mobile First:** Desain responsif yang optimal untuk perangkat Android.

## Informasi Hosting

- **URL Landing Page:** (Akan aktif setelah deployment ke GitHub Pages)
- **Lokasi APK:** GitHub Releases `v1.0.0`
- **Nama File APK:** `PastiBisaMenang.apk`

## Struktur Project

```
/
├── index.html          # Halaman utama (Hero, CTA, Info Keamanan)
├── assets/
│   ├── css/
│   │   └── style.css   # Styling profesional & clean (Blue theme)
│   ├── js/
│   │   └── main.js     # Logika download & fallback UI
│   └── images/         # (Kosong/Reserved)
└── README.md           # Dokumentasi ini
```

## Cara Update APK (Tanpa Edit Kode)

Untuk memperbarui aplikasi ke versi baru tanpa mengubah kode landing page secara manual, ikuti langkah ini:

1.  Buka tab **Releases** di repository GitHub.
2.  Buat **Release Baru**.
3.  **PENTING:** Pastikan nama file APK yang diupload **TETAP SAMA**, yaitu:
    `PastiBisaMenang.apk`
4.  Jika Anda ingin menggunakan nama file berbeda atau versi spesifik, Anda harus mengedit `assets/js/main.js` pada bagian `CONFIG.primaryUrl`.

## Lisensi

&copy; 2024 Pasti Bisa Menang. All rights reserved.

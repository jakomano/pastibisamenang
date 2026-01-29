# Pasti Bisa Menang

Selamat datang di repository resmi **Pasti Bisa Menang**. Project ini adalah landing page untuk aplikasi "Pasti Bisa Menang".

## Deskripsi

"Pasti Bisa Menang" adalah aplikasi mobile yang dirancang untuk memberikan pengalaman bermain yang seru dan menantang. Repository ini berisi kode sumber untuk landing page statis yang digunakan untuk mendistribusikan aplikasi kepada pengguna.

## Download Aplikasi

Aplikasi (APK) **tidak disimpan secara langsung di dalam folder repository ini**, melainkan tersedia melalui fitur **GitHub Releases**.

- **Versi Saat Ini:** v1.0.0
- **Lokasi Download:** [Halaman Releases](https://github.com/jakomano/pastibisamenang/releases)

Pengguna dapat mengunduh file `.apk` langsung dari landing page yang telah disediakan (GitHub Pages) atau melalui tab Releases di repository ini.

## Struktur Repository

```
/
├── index.html          # Halaman utama landing page
├── assets/
│   ├── css/
│   │   └── style.css   # Styling halaman (Mobile-first)
│   ├── js/
│   │   └── main.js     # Logika interaksi sederhana
│   └── images/         # Aset gambar
└── README.md           # Dokumentasi ini
```

## Cara Update APK

Untuk memperbarui aplikasi ke versi terbaru:

1.  **Jangan** upload file APK ke dalam folder kode (`assets` atau lainnya).
2.  Pergi ke halaman **Releases** di GitHub.
3.  Buat **New Release** (Draft a new release).
4.  Tag version baru (misal: `v1.1.0`).
5.  Upload file APK baru ke release tersebut.
6.  Update link download di file `index.html` agar mengarah ke file APK versi terbaru di release yang baru dibuat.
    ```html
    <!-- Update bagian ini di index.html -->
    <a href="https://github.com/jakomano/pastibisamenang/releases/download/v1.1.0/nama-file-baru.apk" ...>
    ```
7.  Commit dan Push perubahan `index.html` ke branch `main`.

## Lisensi

&copy; 2024 Pasti Bisa Menang.

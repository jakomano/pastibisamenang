# Pasti Bisa Menang - App Landing Page

Halaman detail aplikasi yang didesain menyerupai "Store Listing" untuk mendistribusikan aplikasi **Pasti Bisa Menang** secara aman dan profesional.

## Fitur & Desain
- **Store-like UI:** Tata letak informasi, statistik, dan tombol install yang familiar bagi pengguna Android.
- **Responsive:** Layout stack pada mobile, dan dual-column pada desktop.
- **Trusted Source:** File APK di-host dan diunduh langsung dari GitHub Releases.
- **No-Nonsense:** Fokus pada metadata aplikasi, deskripsi, dan keamanan.

## Informasi Teknis
- **Primary APK:** `v1.0.0/PastiBisaMenang.apk`
- **Hosting:** GitHub Pages
- **Technology:** Pure HTML, CSS, JS (No Frameworks)

## Struktur Folder
```
/
├── index.html          # Struktur utama (Header, Screenshots, About, Safety)
├── assets/
│   ├── css/
│   │   └── style.css   # Styling mirip Play Store (Roboto font stack, Green accent)
│   ├── js/
│   │   └── main.js     # Logika download & fallback timer
│   └── images/         # (Reserved for assets)
└── README.md
```

## Cara Update
1. Upload APK baru ke GitHub Releases dengan nama file yang SAMA (`PastiBisaMenang.apk`) untuk update otomatis.
2. Atau edit `CONFIG.primaryUrl` di `assets/js/main.js` jika nama file berubah.

## Lisensi
&copy; 2024 Pasti Bisa Menang.

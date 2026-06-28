# 🚀 Panduan Deploy: Dari Lokal → GitHub → Netlify

Panduan lengkap dan mendetail untuk meng-upload project portfolio ini dari komputer lokal ke GitHub, lalu hosting gratis di Netlify.

---

## 📋 Daftar Isi

1. [Persiapan Awal](#1--persiapan-awal)
2. [Install Git](#2--install-git)
3. [Buat Akun GitHub](#3--buat-akun-github)
4. [Buat Repository di GitHub](#4--buat-repository-di-github)
5. [Inisialisasi Git di Folder Lokal](#5--inisialisasi-git-di-folder-lokal)
6. [Hubungkan ke GitHub](#6--hubungkan-ke-github)
7. [Push Kode ke GitHub](#7--push-kode-ke-github)
8. [Buat Akun Netlify](#8--buat-akun-netlify)
9. [Deploy ke Netlify via GitHub](#9--deploy-ke-netlify-via-github)
10. [Custom Domain (Opsional)](#10--custom-domain-opsional)
11. [Update Website di Masa Depan](#11--update-website-di-masa-depan)
12. [Alternatif: Deploy Manual ke Netlify](#12--alternatif-deploy-manual-ke-netlify-tanpa-github)
13. [Troubleshooting](#13--troubleshooting)

---

## 1. 📦 Persiapan Awal

### Pastikan struktur folder Anda seperti ini:

```
portfolio/
├── index.html
├── style.css
├── script.js
└── DEPLOY.md    ← (file ini)
```

### Yang Anda butuhkan:

| Kebutuhan        | Keterangan                          |
| ---------------- | ----------------------------------- |
| Komputer         | Windows / Mac / Linux               |
| Browser          | Chrome, Edge, Firefox, dll          |
| Git              | Version control (akan di-install)   |
| Akun GitHub      | Gratis — github.com                 |
| Akun Netlify     | Gratis — netlify.com                |
| Koneksi Internet | Untuk upload dan hosting            |

---

## 2. 🔧 Install Git

### Windows

1. Buka browser dan kunjungi: **https://git-scm.com/download/win**
2. Download installer yang sesuai (64-bit untuk kebanyakan komputer modern)
3. Jalankan installer:
   - Klik **Next** untuk semua opsi default
   - Pada bagian **"Adjusting your PATH environment"**, pastikan pilih:
     **"Git from the command line and also from 3rd-party software"**
   - Klik **Install**
4. Setelah selesai, klik **Finish**

### Verifikasi Instalasi

Buka **Command Prompt** atau **PowerShell**, ketik:

```bash
git --version
```

Jika berhasil, akan muncul seperti:

```
git version 2.45.0.windows.1
```

### Konfigurasi Identitas Git (WAJIB)

Jalankan perintah berikut (ganti dengan nama dan email Anda):

```bash
git config --global user.name "Isan"
git config --global user.email "email-anda@gmail.com"
```

> ⚠️ **Penting:** Email harus sama dengan email yang Anda gunakan untuk mendaftar GitHub.

### Verifikasi konfigurasi:

```bash
git config --global user.name
git config --global user.email
```

---

## 3. 👤 Buat Akun GitHub

1. Buka **https://github.com**
2. Klik **"Sign up"**
3. Isi formulir:
   - **Email:** email aktif Anda
   - **Password:** buat password yang kuat
   - **Username:** pilih username (contoh: `ikhsanuddien-kaffie`)
4. Verifikasi email Anda (cek inbox)
5. Selesaikan setup awal (bisa skip survey)

---

## 4. 📁 Buat Repository di GitHub

1. Login ke **https://github.com**
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi form:

   | Field             | Isi                                                 |
   | ----------------- | --------------------------------------------------- |
   | Repository name   | `portfolio` (atau nama lain yang Anda inginkan)     |
   | Description       | `Personal portfolio website - Ikhsanuddien Kaffie`  |
   | Visibility        | ✅ **Public** (agar bisa di-hosting gratis)           |
   | Initialize        | ❌ **JANGAN** centang apapun (README, .gitignore, license) |

4. Klik **"Create repository"**

> ⚠️ **PENTING:** Jangan centang "Add a README file" atau opsi lainnya! Repository harus kosong agar tidak konflik dengan file lokal.

5. Setelah dibuat, Anda akan melihat halaman instruksi. **Biarkan halaman ini terbuka**, kita akan butuh URL repository-nya.

   URL-nya akan terlihat seperti:
   ```
   https://github.com/kaffiieee-cpu/portfolio.git
   ```

---

## 5. 💻 Inisialisasi Git di Folder Lokal

### Buka Terminal di Folder Project

**Cara 1 — Via File Explorer:**
1. Buka File Explorer
2. Navigasi ke folder `C:\Users\USER\Downloads\portfolio`
3. Klik di address bar, ketik `cmd` lalu tekan **Enter**
4. Command Prompt akan terbuka di folder tersebut

**Cara 2 — Via PowerShell:**
1. Buka PowerShell
2. Ketik:
   ```powershell
   cd C:\Users\USER\Downloads\portfolio
   ```

**Cara 3 — Via VS Code:**
1. Buka VS Code
2. File → Open Folder → pilih folder `portfolio`
3. Terminal → New Terminal (atau tekan `Ctrl + ~`)

### Inisialisasi Repository Git

Jalankan perintah ini satu per satu:

```bash
# 1. Inisialisasi Git di folder ini
git init

# 2. Pastikan branch utama bernama 'main'
git branch -M main

# 3. Tambahkan SEMUA file ke staging area
git add .

# 4. Buat commit pertama
git commit -m "Initial commit: portfolio website"
```

### Penjelasan Setiap Perintah:

| Perintah                        | Fungsi                                              |
| ------------------------------- | --------------------------------------------------- |
| `git init`                      | Membuat folder ini menjadi repository Git           |
| `git branch -M main`           | Mengubah nama branch default menjadi `main`          |
| `git add .`                     | Menambahkan semua file ke staging (siap di-commit)  |
| `git commit -m "..."`          | Menyimpan snapshot pertama dari kode Anda            |

### Verifikasi:

```bash
git status
```

Harusnya muncul:

```
On branch main
nothing to commit, working tree clean
```

---

## 6. 🔗 Hubungkan ke GitHub

### Tambahkan Remote Repository

Ganti `kaffiieee-cpu` dengan username GitHub Anda:

```bash
git remote add origin https://github.com/kaffiieee-cpu/portfolio.git
```

Contoh:

```bash
git remote add origin https://github.com/ikhsanuddien-kaffie/portfolio.git
```

### Verifikasi koneksi remote:

```bash
git remote -v
```

Harusnya muncul:

```
origin  https://github.com/kaffiieee-cpu/portfolio.git (fetch)
origin  https://github.com/kaffiieee-cpu/portfolio.git (push)
```

---

## 7. 📤 Push Kode ke GitHub

### Push pertama kali:

```bash
git push -u origin main
```

### Autentikasi GitHub

Saat pertama kali push, Git akan meminta login. Ada beberapa kemungkinan:

#### Skenario A — Browser Pop-up (Paling Umum)

1. Browser akan terbuka otomatis ke halaman login GitHub
2. Login dengan akun GitHub Anda
3. Klik **"Authorize"**
4. Kembali ke terminal — proses push akan berjalan otomatis

#### Skenario B — Personal Access Token

Jika diminta username & password di terminal:

1. **Username:** ketik username GitHub Anda
2. **Password:** ❌ BUKAN password akun GitHub!

   Anda harus membuat **Personal Access Token (PAT)**:

   1. Buka **https://github.com/settings/tokens**
   2. Klik **"Generate new token"** → **"Generate new token (classic)"**
   3. Isi:
      - **Note:** `portfolio deploy`
      - **Expiration:** 90 days (atau No expiration)
      - **Scopes:** centang ✅ **repo** (semua sub-checkbox di bawahnya)
   4. Klik **"Generate token"**
   5. **SALIN TOKEN-NYA SEKARANG!** (hanya ditampilkan sekali)
   6. Paste token tersebut sebagai "password" di terminal

   > 💡 **Tips:** Saat paste password di terminal, tidak ada karakter yang muncul. Ini normal! Cukup paste dan tekan Enter.

### Verifikasi Push Berhasil

1. Buka **https://github.com/kaffiieee-cpu/portfolio**
2. Anda harus melihat file-file Anda:
   ```
   📄 index.html
   📄 style.css
   📄 script.js
   📄 DEPLOY.md
   ```

> ✅ Jika file-file muncul di GitHub, berarti **push berhasil!**

---

## 8. 🌐 Buat Akun Netlify

1. Buka **https://app.netlify.com**
2. Klik **"Sign up"**
3. Pilih **"Sign up with GitHub"** ← **Rekomendasi! Paling mudah.**
4. Authorize Netlify untuk mengakses GitHub Anda
5. Selesaikan proses registrasi

> 💡 **Mengapa login dengan GitHub?** Agar Netlify bisa langsung membaca repository Anda tanpa konfigurasi tambahan.

---

## 9. 🚀 Deploy ke Netlify via GitHub

### Langkah-langkah:

1. Setelah login di Netlify, klik **"Add new site"** → **"Import an existing project"**

2. Pilih **"Deploy with GitHub"**

3. Jika diminta, **authorize** Netlify untuk mengakses repository GitHub Anda

4. Pilih repository **"portfolio"** dari daftar

5. Konfigurasi build settings:

   | Setting            | Isi                   |
   | ------------------ | --------------------- |
   | Branch to deploy   | `main`                |
   | Build command      | *(kosongkan)*         |
   | Publish directory  | `.` atau `/`          |

   > ⚠️ Karena ini project statis (HTML/CSS/JS), **tidak perlu build command**. Biarkan kosong.

6. Klik **"Deploy site"**

### Tunggu Proses Deploy

- Netlify akan memproses deploy dalam **30 detik — 2 menit**
- Status akan berubah dari "Building" → "Published"
- Anda akan mendapat URL random seperti:
  ```
  https://random-name-12345.netlify.app
  ```

### Ubah Nama Subdomain (Opsional tapi Direkomendasikan)

1. Buka **Site configuration** → **Domain management** → **Domains**
2. Klik **"Options"** di sebelah domain `.netlify.app` → **"Edit site name"**
3. Ganti dengan nama yang Anda inginkan, contoh:
   ```
   ikhsanuddien-kaffie
   ```
4. URL Anda sekarang menjadi:
   ```
   https://ikhsanuddien-kaffie.netlify.app
   ```

### ✅ Selamat! Website Anda sudah LIVE! 🎉

Buka URL tersebut di browser untuk melihat hasilnya.

---

## 10. 🌍 Custom Domain (Opsional)

Jika Anda memiliki domain sendiri (contoh: `ikhsanuddien.com`):

### Di Netlify:

1. Buka **Site configuration** → **Domain management**
2. Klik **"Add a domain"**
3. Masukkan domain Anda: `ikhsanuddien.com`
4. Klik **"Verify"** → **"Add domain"**

### Di Domain Registrar (Tempat Anda Beli Domain):

Tambahkan DNS records berikut:

| Type  | Name | Value                                  |
| ----- | ---- | -------------------------------------- |
| CNAME | www  | `nama-site-anda.netlify.app`           |
| A     | @    | `75.2.60.5` (Netlify load balancer)    |

> ⏱️ Propagasi DNS bisa memakan waktu **1-48 jam**.

### Aktifkan HTTPS:

1. Di Netlify → **Domain management** → **HTTPS**
2. Klik **"Verify DNS configuration"**
3. Klik **"Provision certificate"**
4. SSL/HTTPS akan aktif secara otomatis (gratis via Let's Encrypt)

---

## 11. 🔄 Update Website di Masa Depan

Setiap kali Anda mengubah kode di komputer lokal:

### Langkah Update:

```bash
# 1. Buka terminal di folder project
cd C:\Users\USER\Downloads\portfolio

# 2. Cek file apa yang berubah
git status

# 3. Tambahkan semua perubahan
git add .

# 4. Commit dengan pesan yang jelas
git commit -m "Update: deskripsi perubahan Anda"

# 5. Push ke GitHub
git push
```

### Contoh Pesan Commit yang Baik:

```bash
git commit -m "Update: ubah nomor WhatsApp di halaman contact"
git commit -m "Fix: perbaiki tampilan mobile di section services"
git commit -m "Add: tambah project baru ke section projects"
git commit -m "Style: ubah warna accent menjadi biru"
```

### Auto-Deploy di Netlify

> 🚀 **Netlify akan otomatis deploy ulang** setiap kali Anda push ke GitHub!

Anda tidak perlu melakukan apapun di Netlify. Cukup `git push` dan tunggu ~30 detik, website akan terupdate secara otomatis.

---

## 12. 📦 Alternatif: Deploy Manual ke Netlify (Tanpa GitHub)

Jika Anda tidak ingin menggunakan GitHub, bisa langsung drag & drop:

### Cara Drag & Drop:

1. Buka **https://app.netlify.com/drop**
2. Buka File Explorer ke folder `C:\Users\USER\Downloads\portfolio`
3. **Drag seluruh folder `portfolio`** ke area drop di halaman Netlify
4. Tunggu proses upload selesai (~10-30 detik)
5. Website Anda langsung live!

> ⚠️ **Kekurangan metode ini:**
> - Tidak ada auto-deploy saat update
> - Harus upload ulang manual setiap kali ada perubahan
> - Tidak ada version control / history perubahan

---

## 13. 🛠️ Troubleshooting

### ❌ Error: `git is not recognized`

**Solusi:** Git belum ter-install atau belum masuk PATH.
1. Install ulang Git dari https://git-scm.com
2. Pastikan pilih opsi "Git from the command line"
3. Restart terminal/PowerShell setelah install

---

### ❌ Error: `remote origin already exists`

**Solusi:**

```bash
git remote remove origin
git remote add origin https://github.com/kaffiieee-cpu/portfolio.git
```

---

### ❌ Error: `failed to push some refs`

**Solusi:** Repository GitHub tidak kosong (ada file README, dll).

```bash
git pull origin main --allow-unrelated-histories
```

Jika ada konflik, selesaikan lalu:

```bash
git add .
git commit -m "Merge remote changes"
git push origin main
```

Atau cara paling mudah — force push (hati-hati, ini akan menimpa isi di GitHub):

```bash
git push -f origin main
```

---

### ❌ Error: `Authentication failed`

**Solusi:**
1. Buat Personal Access Token baru di https://github.com/settings/tokens
2. Gunakan token sebagai password
3. Atau gunakan GitHub CLI:
   ```bash
   # Jika punya winget:
   winget install --id GitHub.cli
   gh auth login
   ```

---

### ❌ Netlify: Halaman kosong / 404

**Solusi:**
1. Pastikan file bernama **`index.html`** (huruf kecil semua)
2. Di Netlify → Site configuration → Build & deploy
3. Pastikan **Publish directory** = `.` atau `/` (root)
4. Coba trigger redeploy: Deploys → **Trigger deploy** → **Deploy site**

---

### ❌ CSS/JS tidak loading di Netlify

**Solusi:**
1. Pastikan nama file **case-sensitive** dan cocok:
   - Di HTML: `<link rel="stylesheet" href="style.css">`
   - File: `style.css` ← harus sama persis
2. Jangan gunakan path absolut seperti `C:\Users\...`
3. Gunakan path relatif: `./style.css` atau `style.css`

---

## 📌 Rangkuman Perintah Git

```bash
# Setup awal (sekali saja)
git init
git branch -M main
git remote add origin https://github.com/kaffiieee-cpu/portfolio.git

# Deploy pertama
git add .
git commit -m "Initial commit: portfolio website"
git push -u origin main

# Update selanjutnya
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

---

## 📎 Link Penting

| Resource              | URL                                      |
| --------------------- | ---------------------------------------- |
| Git Download          | https://git-scm.com                      |
| GitHub                | https://github.com                       |
| GitHub Tokens         | https://github.com/settings/tokens       |
| Netlify               | https://app.netlify.com                  |
| Netlify Drop          | https://app.netlify.com/drop             |
| Status Website Anda   | https://ikhsanuddien-kaffie.netlify.app  |

---

> 💡 **Tips Terakhir:**
>
> Setelah deploy berhasil, jangan lupa update URL di file `index.html`:
> - `<link rel="canonical" href="https://URL-NETLIFY-ANDA.netlify.app/">`
> - `<meta property="og:url" content="https://URL-NETLIFY-ANDA.netlify.app/">`
>
> Lalu push lagi ke GitHub agar SEO metadata-nya akurat.

---

*Dibuat untuk project portfolio Ikhsanuddien Kaffie — Isan*
*Terakhir diperbarui: Juni 2026*

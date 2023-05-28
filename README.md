## CRUD JavaScript Local Storage

Ini adalah aplikasi CRUD (Create, Read, Update, Delete) sederhana yang dibangun menggunakan JavaScript dan local Storage. Aplikasi ini memungkinkan pengguna untuk memasukkan, melihat, mengupdate, dan menghapus data dalam penyimpanan lokal browser menggunakan localStorage.

## Fitur

- Menambahkan data: Pengguna dapat memasukkan data seperti nama, umur, alamat, dan email melalui formulir.
- Melihat data: Data yang dimasukkan ditampilkan dalam bentuk tabel.
- Mengupdate data: Pengguna dapat memperbarui data yang sudah ada.
- Menghapus data: Pengguna dapat menghapus data yang sudah ada.

## Prasyarat

Sebelum menjalankan aplikasi ini, pastikan Anda memiliki browser yang mendukung fitur localStorage. Mayoritas browser modern mendukung fitur ini.

## Cara Menggunakan

1. Unduh atau clone repositori ini.
2. Buka file `index.html` pada browser Anda.
3. Aplikasi akan terbuka di browser dan Anda dapat mulai menggunakan fitur CRUD.

## Penjelasan Kode

### `index.html`

File `index.html` berisi markup HTML dasar untuk tampilan aplikasi CRUD. Di dalamnya terdapat formulir untuk memasukkan data dan tabel untuk menampilkan data.

### `main.js`

File `main.js` berisi kode JavaScript yang mengendalikan logika aplikasi CRUD. Kode ini menggunakan localStorage untuk menyimpan dan mengambil data dari penyimpanan lokal browser.

Beberapa fungsi penting dalam `main.js`:

- `validateForm()`: Fungsi ini melakukan validasi pada formulir sebelum data dikirim. Memastikan bahwa semua input fields terisi dengan benar sebelum data disimpan.
- `showData()`: Fungsi ini digunakan untuk menampilkan data yang sudah disimpan di dalam localStorage. Data ditampilkan dalam bentuk tabel.
- `tambahData()`: Fungsi ini dipanggil ketika pengguna menekan tombol "Submit" untuk menambahkan data baru ke dalam localStorage.
- `deleteData(index)`: Fungsi ini digunakan untuk menghapus data yang ada dalam localStorage berdasarkan indeks yang diberikan.
- `updateData(index)`: Fungsi ini mengisi formulir dengan data yang ada dalam localStorage berdasarkan indeks yang diberikan, sehingga pengguna dapat memperbarui data tersebut. Setelah data diperbarui, data lama dihapus dan data yang baru disimpan ke dalam localStorage.

## Kontribusi

Kontribusi terhadap pengembangan aplikasi ini sangat diperhatikan. Jika Anda memiliki saran, perbaikan, atau fitur baru, silakan buat _pull request_ ke repositori ini.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT). Silakan merujuk ke berkas `LICENSE` untuk informasi lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau masalah terkait aplikasi ini, silakan hubungi saya melalui surel di faislardhni@gmail.com.

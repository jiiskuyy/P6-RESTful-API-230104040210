cat <<EOF > README.md
# P6 - RESTful API Best Practices (Express)

Project ini adalah implementasi RESTful API menggunakan Express.js yang menerapkan prinsip-prinsip **RESTful Best Practices**[cite: 4, 11].

## Identitas
* **Nama:** Muhammad Hifzi
* **NIM:** 230104040210
* **Mata Kuliah:** Web Service Engineering

## Fitur Utama
1. **CRUD Lengkap (+PATCH):** Mengelola data produk (Create, Read, Update, Partial Update, Delete)[cite: 48].
2. **Validasi Input:** Middleware khusus untuk memvalidasi data wajib (name & price) pada method POST dan PUT[cite: 42].
3. **Global Error Handling:** Menangani error server (500) secara terpusat agar server tidak crash[cite: 43].
4. **Health Check:** Endpoint khusus untuk memantau status server[cite: 82].
5. **Struktur Modular:** Pemisahan logic antara routes, middlewares, dan data[cite: 39].

## Cara Menjalankan
1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
2. Jalankan mode development:
   \`\`\`bash
   npm run dev
   \`\`\`
3. Server berjalan di \`http://localhost:3000\`.

## Dokumentasi Endpoint

| Method | Endpoint | Deskripsi | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | \`/api/products\` | Ambil semua produk | 200 |
| **GET** | \`/api/products/:id\` | Ambil produk by ID | 200, 404 |
| **POST** | \`/api/products\` | Tambah produk baru | 201, 400 |
| **PUT** | \`/api/products/:id\` | Update produk (full) | 200, 400, 404 |
| **PATCH** | \`/api/products/:id\` | Update produk (parsial) | 200, 404 |
| **DELETE** | \`/api/products/:id\` | Hapus produk | 200, 404 |
| **GET** | \`/api/health\` | Cek status server | 200 |

## Struktur Project
\`\`\`
src/
├── controllers/      # (Opsional) Logika kontroler
├── data/            # Data dummy in-memory
├── middlewares/     # Validasi & Error Handler
├── routes/          # Definisi routing
├── utils/           # Helper response standar
└── app.js           # Entry point
\`\`\`

## Catatan Analisis
Project ini telah menerapkan **7 RESTful Principles** termasuk penggunaan HTTP Verbs yang tepat, status code yang semantik, dan respon JSON yang konsisten. Kendala awal seperti server crash saat error telah diatasi menggunakan middleware \`errorHandler.js\`.
EOF

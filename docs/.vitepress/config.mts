import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Datamindo",
  description: "Dokumentasi penggunaan penggunaan software.",
  lang: "id-ID",
  srcDir: "src",
  cleanUrls: true,
  themeConfig: {
    logo: { src: "/logo.svg", alt: "logo" },

    darkModeSwitchLabel: "Tampilan",
    lightModeSwitchTitle: "Ubah ke tampilan terang",
    darkModeSwitchTitle: "Ubah ke tampilan gelap",
    returnToTopLabel: "Kembali ke atas",

    docFooter: {
      prev: "Sebelumnya",
      next: "Selanjutnya",
    },

    outline: {
      label: "Pada halaman ini",
    },

    notFound: {
      title: "Halaman tidak ditemukan",
      quote:
        "Halaman yang anda cari tidak ditemukan, atau halaman tersebut sudah dihapus.",
      linkText: "Kembali ke beranda",
    },

    nav: [
      { text: "Beranda", link: "/" },
      { text: "Referensi", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Mulai",
        items: [{ text: "Masuk", link: "/transaksi/informasi-kurs" }],
      },

      {
        text: "Transaksi",
        items: [
          { text: "Informasi Kurs", link: "/transaksi/informasi-kurs" },
          { text: "Transaksi Valas", link: "/transaksi/transaksi-valas" },
          {
            text: "Transaksi Antar Cabang",
            link: "/transaksi/transaksi-antarcabang",
          },
          {
            text: "Daftar Transaksi Valas",
            link: "/transaksi/daftar-transaksi",
          },
          { text: "Pembayaran Valas", link: "/transaksi/pembayaran-valas" },
          { text: "Serah Terima Kasir", link: "/transaksi/transaksi-valas" },
          { text: "Penutupan Periode", link: "/transaksi/transaksi-valas" },
        ],
      },

      {
        text: "Inventori",
        items: [
          { text: "Stok Valas", link: "/inventori/stok-valas" },
          { text: "Pinjaman Valas", link: "/inventori/pinjaman-valas" },
          { text: "PB Valas", link: "/inventori/pb-valas" },
          { text: "Riwayat Valas", link: "/inventori/riwayat-valas" },
        ],
      },

      {
        text: "Master",
        items: [
          { text: "Pengaturan Kurs", link: "/master/pengaturan-kurs" },
          { text: "Proses Awal Hari", link: "/master/proses-awal-hari" },
          { text: "Master Valas", link: "/master/master-valas" },
          { text: "Pecahan Valas", link: "/master/pecahan-valas" },
        ],
      },

      {
        text: "Staff",
        items: [
          { text: "Daftar Pengguna", link: "/staff/daftar-pengguna" },
          { text: "Daftar Jabatan", link: "/staff/daftar-jabatan" },
          { text: "Daftar Akses", link: "/staff/daftar-akses" },
        ],
      },

      {
        text: "Manajemen Cabang",
        items: [
          { text: "Perusahaan", link: "/manajemen-cabang/perusahaan" },
          { text: "Area", link: "/manajemen-cabang/area" },
          { text: "Cabang", link: "/manajemen-cabang/cabang" },
          {
            text: "Pengaturan Cabang",
            link: "/manajemen-cabang/pengaturan-cabang",
          },
        ],
      },

      {
        text: "Pelanggan",
        items: [
          {
            text: "Pengaturan Pelanggan",
            link: "/pelanggan/pengaturan-pelanggan",
          },
          { text: "Database Pelanggan", link: "/pelanggan/database-pelanggan" },
        ],
      },

      {
        text: "Laporan Umum",
      },

      {
        text: "Example",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
});

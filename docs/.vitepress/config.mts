import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Datamindo MC",
  description: "Dokumentasi penggunaan Aplikasi.",
  lang: "id-ID",
  srcDir: "src",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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

    search: {
      provider: "local",
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

    footer: {
      copyright: "©2025 | Datamindo",
    },
  },
});

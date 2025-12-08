"use client";

import styles from "./projectDetail.module.css";

export default function ProjectOne() {
  return (
    <div className={styles.container}>

      {/* HEADER PROJECT */}
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <img src="/MangCarCor.png" alt="logo" className={styles.logoImg} />
        </div>

        <div className={styles.projectTitle}>
          <h1>CARBON CORNER</h1>
          <p>Website Modern Dengan Desain Maskulin</p>
        </div>
       <div className={styles.linkprojectm}>
        <a href="https://dulcet-taiyaki-2efb24.netlify.app/">
            <h3>Mangrove Carbon Corner</h3>
          </a>
        </div>

      </header>

      {/* CONTENT SECTION */}
      <section className={styles.content}>

        {/* SECTION 1 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <img src="/homemc.png" alt="home-carbon-corner" />
          </div>

          <div className={styles.sectionText}>
            <h2>Deskripsi Proyek</h2>
            <p>
             Mangrove Carbon Corner adalah sebuah platform web interaktif yang dirancang untuk menghitung estimasi karbon mangrove, mendeteksi spesies mangrove secara otomatis menggunakan kecerdasan buatan (AI), serta menyediakan fitur-fitur edukatif dan pendukung konservasi mangrove.
Website ini mengintegrasikan metode allometrik untuk perhitungan karbon dengan algoritma deteksi objek YOLO-v8 untuk identifikasi spesies mangrove secara cepat, akurat, dan real-time. Platform ini ditujukan bagi peneliti, pemerintah, pegiat lingkungan, serta masyarakat umum agar dapat memahami, menghitung, dan memantau potensi blue carbon secara lebih efisien.
            </p>
          </div>
        </div>
        </div>

        {/* SECTION 2 — FOTO KANAN, TEKS KIRI */}
        <div className={styles.sectionContainer}>
        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.sectionImage}>
            <img src="/tujuanmc.png" alt="tujuan" />
          </div>

          <div className={styles.sectionText}>
            <h2>Tujuan </h2>
            <ul>
              <li>Memudahkan estimasi blue carbon mangrove secara digital.</li>
              <li>Mempercepat identifikasi spesies mangrove dengan teknologi AI.</li>
              <li>Menjadi platform terpadu untuk analisis, edukasi, dan aksi konservasi mangrove.</li>
            </ul>
          </div>
        </div>
        </div>

        {/* SECTION 3 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <img src="/calculator.png" alt="calculator" />
          </div>

          <div className={styles.sectionText}>
            <h2>Kalkulator & Dekteksi spesies </h2>
            <p>
             Kalkulator Karbon Mangrove menggunakan input data diameter dan tinggi pohon serta persamaan allometrik spesifik untuk berbagai spesies mangrove, sehingga mampu menghasilkan estimasi karbon secara otomatis, presisi, dan disajikan dengan tampilan hasil perhitungan yang lengkap. Selain itu, fitur Deteksi Spesies Mangrove berbasis AI (YOLO-v8) memungkinkan identifikasi spesies secara real-time melalui upload foto maupun input kamera, dengan model AI yang telah dilatih menggunakan dataset lokal untuk memastikan akurasi tinggi, dan hasil deteksinya terhubung langsung dengan kalkulator karbon.
            </p>
          </div>
        </div>
        </div>


        {/* SECTION 4 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.sectionContainer}>
        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.sectionImage}>
            <img src="/petasebaran.png" alt="Peta-Sebran-Mangrove" />
          </div>

          <div className={styles.sectionText}>
            <h2>Peta Sebaran Mangrove </h2>
            <p>
             Fitur ini menampilkan distribusi mangrove di wilayah Selat Sunda dengan memanfaatkan data yang diperoleh dari citra satelit serta hasil survei lapangan, sehingga informasi yang disajikan akurat dan representatif. Peta disajikan dalam bentuk interaktif sehingga mudah digunakan oleh berbagai kalangan, baik peneliti, pemerintah, maupun masyarakat umum.
            </p>
          </div>
        </div>
        </div>


        {/* SECTION 5 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <img src="/calculator.png" alt="calculator" />
          </div>

          <div className={styles.sectionText}>
            <h2>Kalkulator Emisi Kendaraan </h2>
            <p>
            Fitur ini menghitung jumlah emisi karbon berdasarkan jenis kendaraan dan jarak tempuh, yang kemudian digunakan untuk menghubungkan besaran emisi tersebut dengan kebutuhan penanaman mangrove sebagai upaya kompensasi dan mitigasi karbon.            </p>
          </div>
        </div>
        </div>


        <a href="/" className={styles.backBtn}>← Kembali ke Beranda</a>
      </section>
    </div>
  );
}
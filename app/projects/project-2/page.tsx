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
      </header>

      {/* CONTENT SECTION */}
      <section className={styles.content}>

        {/* SECTION 1 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <img src="/project1.jpg" alt="project" />
          </div>

          <div className={styles.sectionText}>
            <h2>Deskripsi Proyek</h2>
            <p>
              Project ini adalah website modern dengan desain maskulin, fokus pada
              tampilan elegan, animasi halus, dan pengalaman pengguna yang kuat.
            </p>
          </div>
        </div>

        {/* SECTION 2 — FOTO KANAN, TEKS KIRI */}
        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.sectionImage}>
            <img src="/project1.jpg" alt="project" />
          </div>

          <div className={styles.sectionText}>
            <h2>Tujuan & Hasil</h2>
            <p>
              Website ini dibangun untuk memberikan pengalaman visual yang kuat,
              menampilkan data dan informasi dengan cara yang elegan dan profesional.
            </p>
          </div>
        </div>

        {/* SECTION 3 — FOTO KIRI, TEKS KANAN */}
        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <img src="/project1.jpg" alt="project" />
          </div>

          <div className={styles.sectionText}>
            <h2>Teknologi yang Digunakan</h2>
            <ul>
              <li>Next.js 14 (App Router)</li>
              <li>React</li>
              <li>CSS Modules</li>
              <li>AOS Animation</li>
            </ul>
          </div>
        </div>

        <a href="/" className={styles.backBtn}>← Kembali ke Beranda</a>
      </section>
    </div>
  );
}
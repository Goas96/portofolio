"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Portfolio</div>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </div>
      </nav>

              {/* HERO */}
        <section id="hero" className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.leftText} data-aos="fade-right">
              <h1 className={styles.heroName}>Faza Fawwaz Fauzil Adlim</h1>
              <h2 className={styles.heroRole}>Web Developer • UI/UX Designer</h2>
              <p className={styles.heroDesc}>
                Saya membangun website modern, cepat, dan berkelas dengan sentuhan desain maskulin yang elegan.
              </p>

              <button
                className={styles.btnPrimary}
                onClick={() => scrollToSection("projects")}
              >
                Lihat Proyek
              </button>
            </div>

            <div className={styles.rightImage} data-aos="fade-left">
              <img src="/foto.png" alt="Foto Saya" className={styles.heroPhoto} />
            </div>
          </div>
        </section>

      {/* ABOUT */}
      <section id="about" className={styles.about} data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Tentang Saya</h2>
        <p className={styles.aboutText}>
          Saya adalah seorang mahasiswa sistem infromasi kelautan.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.projects}>
        <h2 className={styles.sectionTitle} data-aos="fade-up">
          Proyek Saya
        </h2>

              <div className={styles.projectGrid}>
          <a href="\projects\project-1" className={styles.projectCard} data-aos="zoom-in">
            <img src="/mangCarCor.png" alt="" />
            <h2>Carbon Corner</h2>
            <p>Deskripsi singkat proyek.</p>
          </a>

          <a href="\projects\project-2" className={styles.projectCard} data-aos="zoom-in" data-aos-delay="200">
            <img src="/sibasoaci.png" alt="" />
            <h2>Si Baso Aci</h2>
            <p>Deskripsi singkat proyek.</p>
          </a>

          <a href="\projects\project-3" className={styles.projectCard} data-aos="zoom-in" data-aos-delay="400">
            <img src="/project3.jpg" alt="" />
            <h2>Project 3</h2>
            <p>Deskripsi singkat proyek.</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2025 Nama Kamu — Elegant Creamy Portfolio
      </footer>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Mail, Phone,
  Database, Workflow, BarChart3, Code2, Cloud, Layers3,
  X, ExternalLink, ChevronRight, Briefcase, GraduationCap,
  MapPin, Menu
} from "lucide-react";
import ishanPhoto from "./assets/Ishan_photo.png";
import "./App.css";
import "./project-architecture.css";

const projects = [
  {
    id: "airbnb",
    number: "01",
    name: "Airbnb ELT Pipeline",
    category: "CLOUD DATA ENGINEERING",
    description: "An end-to-end ELT pipeline using AWS S3, Snowflake and dbt Core, with modular transformations and dimensional modelling.",
    stack: ["AWS S3", "Snowflake", "dbt Core", "SQL", "Jinja"],
    github: "https://github.com/Lamdamdo/airbnb-dbt-snowflake",
    architecture: "AWS S3 → Snowflake → dbt Core → Analytics-ready models",
    details: [
      "Designed Bronze, Silver and Gold data layers.",
      "Created staging and transformation models using dbt Core.",
      "Implemented incremental models and reusable Jinja macros.",
      "Configured SCD Type 2 snapshots and data quality tests.",
      "Developed fact and dimensional models with documented lineage."
    ],
    flow: ["AWS S3", "Snowflake", "Bronze", "Silver", "Gold", "Analytics"],
    architectureGroups: [
      {
        title: "SOURCE & INGESTION",
        stages: [
          ["AWS S3", "Source CSV datasets"],
          ["Snowflake", "External stage & ingestion"]
        ]
      },
      {
        title: "MEDALLION & TRANSFORMATION",
        stages: [
          ["Bronze", "Raw source data"],
          ["Silver", "Cleaned & standardized"],
          ["Gold", "Analytics-ready models"]
        ]
      },
      {
        title: "CONSUMPTION",
        stages: [
          ["Analytics", "Fact tables, dimensions & reporting"]
        ]
      }
    ]
  },
  {
    id: "adventureworks",
    number: "02",
    name: "AdventureWorks Analytics",
    category: "CLOUD DATA LAKE & WAREHOUSING",
    description: "An end-to-end data engineering architecture integrating AWS storage, Glue, Athena, Snowflake and Power BI.",
    stack: ["AWS S3", "AWS Glue", "Athena", "Snowflake", "Power BI"],
    github: "https://github.com/Lamdamdo/AdventureWorks-End-to-End-Data-Engineering",
    architecture: "AdventureWorks → S3 → Snowflake → S3 Curated → Athena → Power BI",
    details: [
      "Loaded 35 AdventureWorks CSV files into Amazon S3.",
      "Configured Snowflake storage integration and an external stage.",
      "Organized data into Raw, Clean and Analytics schemas.",
      "Created six analytical Gold tables.",
      "Used Amazon Athena and ODBC connectivity to connect curated data with Power BI dashboards."
    ],
    flow: ["AdventureWorks", "Amazon S3", "Snowflake", "S3 Curated", "Athena", "Power BI"],
    architectureGroups: [
      {
        title: "SOURCE & RAW STORAGE",
        stages: [
          ["AdventureWorks", "35 source CSV files"],
          ["Amazon S3", "Raw data layer"]
        ]
      },
      {
        title: "WAREHOUSE",
        stages: [
          ["Snowflake", "Storage integration & external stage"],
          ["Raw Schema", "Source-aligned tables"],
          ["Clean Schema", "Prepared datasets"],
          ["Analytics Schema", "6 Gold tables"]
        ]
      },
      {
        title: "CURATED DATA & BI",
        stages: [
          ["Amazon S3", "Curated analytical datasets"],
          ["Amazon Athena", "External tables & SQL queries"],
          ["Power BI", "3 interactive dashboards"]
        ]
      }
    ]
  },
  {
    id: "olist",
    number: "03",
    name: "Olist E-commerce Analytics",
    category: "BATCH DATA ENGINEERING",
    description: "An e-commerce data pipeline combining BigQuery and Databricks with PySpark transformations and Medallion Architecture.",
    stack: ["BigQuery", "Databricks", "PySpark", "SQL", "Power BI"],
    github: "https://github.com/Lamdamdo/olist-ecommerce-data-engineering",
    architecture: "BigQuery → Lakehouse Federation → Bronze → Silver → Gold → BigQuery Analytics",
    details: [
      "Connected BigQuery source tables through Databricks Lakehouse Federation.",
      "Created Bronze, Silver and Gold layers using the Medallion Architecture.",
      "Cleaned and standardized raw data using PySpark.",
      "Handled missing values and inconsistent categorical data.",
      "Published six Gold tables to BigQuery Analytics for reporting."
    ],
    flow: ["BigQuery", "Federation", "Bronze", "Silver", "Gold", "Analytics"],
    architectureGroups: [
      {
        title: "SOURCE & FEDERATION",
        stages: [
          ["BigQuery", "9 raw Olist tables"],
          ["Lakehouse Federation", "Databricks foreign catalog"]
        ]
      },
      {
        title: "DATABRICKS MEDALLION",
        stages: [
          ["Bronze", "Raw persisted tables"],
          ["Silver", "Cleaned & standardized"],
          ["Gold", "Business-ready tables"]
        ]
      },
      {
        title: "PUBLISH & CONSUME",
        stages: [
          ["BigQuery Analytics", "6 published Gold tables"],
          ["Power BI", "5-page analytics dashboard"]
        ]
      }
    ]
  },
  {
    id: "streaming",
    number: "04",
    name: "Real-Time E-commerce Streaming",
    category: "REAL-TIME DATA ENGINEERING",
    description: "A streaming pipeline that publishes e-commerce events through Kafka and processes them using Spark Structured Streaming.",
    stack: ["Python", "Confluent Kafka", "Databricks", "PySpark", "Delta Lake"],
    github: "https://github.com/Lamdamdo/Realtime-Ecommerce-Streaming",
    architecture: "Python Producer → Kafka → Databricks Structured Streaming → Delta Lake → Power BI",
    details: [
      "Generated synthetic e-commerce order events using Python.",
      "Published JSON messages to a Confluent Kafka topic with three partitions.",
      "Read Kafka events using Spark Structured Streaming on Databricks.",
      "Parsed and processed events using PySpark and AvailableNow micro-batches.",
      "Stored raw, cleaned and aggregated data in Delta Lake Bronze, Silver and Gold layers.",
      "Used a Unity Catalog Volume for streaming checkpoints."
    ],
    flow: ["Python", "Kafka", "Structured Streaming", "Bronze", "Silver", "Gold", "Power BI"],
    architectureGroups: [
      {
        title: "EVENT GENERATION",
        stages: [
          ["Python Producer", "Generates synthetic order events"],
          ["Confluent Kafka", "Orders topic · 3 partitions"]
        ]
      },
      {
        title: "STREAM PROCESSING",
        stages: [
          ["Databricks", "Spark Structured Streaming"],
          ["JSON Parsing", "Kafka source · AvailableNow micro-batches"]
        ]
      },
      {
        title: "DELTA LAKE & ANALYTICS",
        stages: [
          ["Bronze", "Raw Kafka events"],
          ["Silver", "Cleaned & typed events"],
          ["Gold", "Order, payment & product aggregates"],
          ["Power BI", "2-page analytics dashboard"]
        ]
      }
    ]
  }
];

const skills = [
  {
    icon: Database,
    title: "Data Engineering",
    items: ["ETL / ELT", "Data Pipelines", "Data Modelling", "Medallion Architecture", "Incremental Processing"]
  },
  {
    icon: Code2,
    title: "Programming & Querying",
    items: ["Python", "SQL", "Advanced SQL", "PySpark", "Pandas"]
  },
  {
    icon: Cloud,
    title: "Cloud & Warehousing",
    items: ["AWS S3", "AWS IAM", "Snowflake", "BigQuery", "Amazon Athena"]
  },
  {
    icon: Layers3,
    title: "Big Data & Streaming",
    items: ["Apache Spark", "Databricks", "Delta Lake", "Structured Streaming", "Apache Kafka"]
  },
  {
    icon: Workflow,
    title: "Transformation",
    items: ["dbt Core", "SQL Transformations", "Jinja", "Macros", "Snapshots & Tests"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Governance",
    items: ["Power BI", "Data Analysis", "Data Visualization", "Unity Catalog", "Git & GitHub"]
  }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="project-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-topbar">
            <span>PROJECT / {project.number}</span>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Close project"
            >
              <X size={20} />
            </button>
          </div>

          <div className="modal-content">
            <span className="eyebrow">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="modal-description">{project.description}</p>

            <div className="architecture-panel">
              <div className="architecture-label">
                <span className="live-dot" />
                DATA ARCHITECTURE
              </div>

              <div className="architecture-groups">
                {project.architectureGroups?.map((group, groupIndex) => (
                  <div className="architecture-group" key={group.title}>
                    <div className="architecture-group-title">
                      <span className="architecture-group-number">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      {group.title}
                    </div>

                    <div className="architecture-group-stages">
                      {group.stages.map((stage, stageIndex) => (
                        <div
                          className="architecture-stage-wrap"
                          key={stage[0]}
                        >
                          <div className="architecture-stage">
                            <span className="architecture-stage-index">
                              {String(stageIndex + 1).padStart(2, "0")}
                            </span>

                            <div className="architecture-stage-copy">
                              <strong>{stage[0]}</strong>
                              <small>{stage[1]}</small>
                            </div>
                          </div>

                          {stageIndex !== group.stages.length - 1 && (
                            <ArrowRight
                              className="architecture-stage-arrow"
                              size={17}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="architecture-caption">
                {project.architecture}
              </p>
            </div>

            <div className="modal-grid">
              <div>
                <span className="eyebrow">IMPLEMENTATION</span>
                <h3>What I worked on</h3>

                <ul className="detail-list">
                  {project.details.map((detail) => (
                    <li key={detail}>
                      <span className="bullet-dot" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="eyebrow">TECH STACK</span>
                <h3>Technologies used</h3>

                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="primary-button modal-github"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repository
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient-glow" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">IA</span>
          <span>ISHAN<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="mailto:ishanahluwalia24@gmail.com">
          Let's Connect <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span className="live-dot" />
              DATA ENGINEER <span className="availability-divider">/</span> ANALYTICS ENTHUSIAST
            </div>

            <h1>
              Turning raw data
              <br />
              into <span>meaningful</span>
              <br />
              insights<span className="hero-period">.</span>
            </h1>

            <p className="hero-description">
              I build data pipelines, transform complex datasets and create
              analytics-ready solutions using modern data engineering tools.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore Projects <ArrowUpRight size={17} />
              </a>
              <a className="secondary-button" href="#about">
                More About Me <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={14} /> Greater Noida, India</span>
              <span><GraduationCap size={15} /> CSE Graduate · 2026</span>
            </div>
          </motion.div>

          {/* PERSONAL PHOTO */}
          <motion.div
            className="hero-photo-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={ishanPhoto} alt="Ishan Ahluwalia" />

            <div className="hero-photo-overlay">
              <span className="hero-photo-line">
                <span className="live-dot" />
                DATA ENGINEER
              </span>
              <h3>Ishan Ahluwalia</h3>
              <p>Building pipelines. Creating insights.</p>
            </div>

            <div className="hero-photo-index">01 / PROFILE</div>
          </motion.div>

          <div className="hero-bottom-label">
            SCROLL TO EXPLORE <span>↓</span>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A little about me."
            description="A foundation in computer science, focused on solving data problems."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm <strong>Ishan Ahluwalia</strong>, a Computer Science graduate from
                Bennett University with a focus on Data Engineering and Analytics.
              </p>
              <p>
                My work and projects have helped me explore the complete data journey —
                from ingestion and transformation to warehousing and analytics.
                I enjoy working with data platforms and building structured,
                reliable workflows.
              </p>
              <p>
                I have hands-on internship experience with Databricks and PySpark,
                alongside personal projects involving Snowflake, dbt, BigQuery,
                AWS and Kafka.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-number">04</span>
                <span className="fact-label">END-TO-END PROJECTS</span>
              </div>

              <div className="fact-card">
                <span className="fact-number">06</span>
                <span className="fact-label">MONTHS INTERNSHIP</span>
              </div>

              <div className="fact-card fact-wide">
                <GraduationCap size={23} />
                <div>
                  <strong>B.Tech · Computer Science</strong>
                  <small>Bennett University · Class of 2026</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading
            eyebrow="02 / TOOLKIT"
            title="My technical toolkit."
            description="Technologies and concepts I have worked with across my internship and projects."
          />

          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  className="skill-card"
                  key={skill.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{skill.title}</h3>
                  <div className="tag-list">
                    {skill.items.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title="Where I've learned by doing."
            description="My professional starting point in Data Engineering."
          />

          <div className="experience-card">
            <div className="experience-date">
              JUN 2026 — NOV 2026 <span>· 6 MONTHS</span>
            </div>

            <div className="experience-main">
              <div className="experience-title-row">
                <div>
                  <h3>Data Engineering Intern</h3>
                  <p className="company-name">Lirik Inc.</p>
                </div>
                <Briefcase className="experience-icon" size={26} />
              </div>

              <p className="experience-description">
                Worked under the guidance of Mr. Deepakash on a Human Resources
                database project, contributing to Silver Layer processing using
                Databricks and PySpark.
              </p>

              <ul className="experience-points">
                <li>Performed data cleaning, standardization and transformation in the Silver Layer.</li>
                <li>Worked within a Medallion Architecture pipeline for downstream data preparation.</li>
                <li>Developed practical knowledge of advanced SQL, Python, Databricks and PySpark.</li>
                <li>Gained exposure to Snowflake, dbt, Unity Catalog, stream processing, AWS S3 and IAM.</li>
              </ul>

              <div className="tag-list">
                {["Databricks", "PySpark", "SQL", "Unity Catalog", "AWS"].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title="Projects that move data."
            description="Explore the architecture, processing flow and implementation details behind each project."
          />

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.button
                className="project-card"
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number} / 04</span>
                  <span className="project-open">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <span className="eyebrow">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>EXPLORE PROJECT</span>
                  <ChevronRight size={17} />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>
              Let's build something<br />
              <span>meaningful with data.</span>
            </h2>
            <p>Open to opportunities in Data Engineering and Analytics.</p>

            <a className="primary-button" href="mailto:ishanahluwalia24@gmail.com">
              Get in touch <ArrowUpRight size={17} />
            </a>

            <div className="contact-links">
              <a href="mailto:ishanahluwalia24@gmail.com">
                <Mail size={16} /> Email
              </a>
              <a href="tel:+917895100123">
                <Phone size={16} /> Phone
              </a>
              <a
                href="https://www.linkedin.com/in/ishan-ahluwalia-642b73287/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/Lamdamdo"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">IA</span>
          <span>ISHAN<span className="brand-dot">.</span></span>
        </a>
        <span>© 2026 Ishan Ahluwalia. Built around data.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

/* =========================================================
   PROJECT DATA
   Add one object per project. `image` should point to a file
   you place in the /images folder (e.g. "images/project-1.jpg").
   If an image is missing, the card shows a soft placeholder
   automatically — nothing breaks.
   ========================================================= */

const PROJECTS = [
  {
    id: "XBRL",
    title: "XBRL Automation",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    tools: "Python (OCR) | HTML/CSS | Power Query | VBA & Excel",
    image: "images/project-1.jpg",
    summary: "An end-to-end automation pipeline that leverages Python OCR, Power Query, and Excel macros to parse financial statements and auto-populate XBRL reporting software, reducing manual errors and turnaround time.",
    body: [
      "Engineered an end-to-end automation pipeline to streamline XBRL financial reporting and compliance. Developed a Python-based OCR workflow to extract legacy XBRL data, which was subsequently cleaned and transformed using Power Query to build an enterprise mapping dictionary. The system parses financial statements directly from Word documents, mapping the extracted data into a macro-enabled template that automatically populates XBRL software with a single click, significantly cutting down turnaround time and eliminating high-risk manual entry errors."
    ]
  },
  {
    id: "Bank",
    title: "Treasury Access Management & Automated Form",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    tools: "Excel | Data Architecture | Process Automation | SAP Integration",
    image: "images/project-2.jpg",
    summary: "A centralised access management engine that integrates SAP data to auto-populate 16 complex institutional banking templates, saving over 300 operational hours per cycle.",
    body: [
      "Designed and deployed a centralized user access and form automation system to streamline treasury operations across 16 distinct institutional banking templates. By consolidating master user credentials, system access profiles, and SAP authorization data into a automated Excel engine, the tool auto-populates complex bank forms requiring granular details (user IDs, operational roles, contact info). This solution eliminated manual data keying and verification, saving over 300 hours per operational exercise."
    ]
  },
  {
    id: "Dashboard",
    title: "Enterprise Reporting Ecosystem & AI Decision Assistant",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    tools: "Microsoft Fabric | Power BI | Python | Ollama (Local LLM) | VBA & Excel",
    image: "images/project-3.jpg",
    summary: "A dashboard used for monthly reporting",
    body: [
      "Built an enterprise-grade reporting ecosystem to track real estate project performance, development expenditures (PDE), and loan facilities across residential portfolios. Initially architected with macro-enabled Excel input templates and an experimental Python dashboard featuring an integrated local Ollama LLM for conversational Q&A, the system allowed stakeholders to query metrics directly. To overcome performance latency and scalability limits as data volume expanded, migrated the data architecture to Microsoft Fabric to ensure seamless analytics processing."
    ]
  },
  {
    id: "corpIQ",
    title: "CorpIQ: Enterprise Prediction Market Infrastructure",
    category: "SMU",
    year: "2026",
    role: "Co-Developer",
    tools: "Decision Science | LMSR AMM | Mechanism Design | Enterprise Governance | Python",
    image: "images/project-4.jpg",
    summary: "An internal prediction market protocol utilizing automated market makers and behavioral guardrails to eliminate organizational bias and surface high-conviction strategic warnings.",
    body: [
      "Designed CorpIQ, a token-incentivized internal prediction market infrastructure designed to optimize strategic decision-making for Fortune 500 companies. The protocol addresses critical organizational biases, such as corporate hierarchy bias, information silos, and escalation of commitment, by leveraging a Logarithmic Market Scoring Rule (LMSR) Automated Market Maker for continuous probability discovery. Built-in anti-manipulation guardrails (circuit breakers, position caps, and mandatory trade rationales) enable executives to surface high-conviction early warnings on high-stakes events like M&A synergy targets and product launch timelines."
    ]
  },

  {
    id: "Reporting",
    title: "Strategic Valuation: Alliance Healthcare Group",
    category: "SMU",
    year: "2026",
    role: "Analyst",
    tools: "Financial Statement Analysis | DCF Modeling | Trading Multiples | Accounting Restatements",
    image: "images/project-5.jpg",
    summary: "An equity research report featuring accounting restatements, balance sheet solvency checks, and a hybrid DCF valuation yielding a BUY rating with 46% potential upside.",
    body: [
      "Conducted a comprehensive equity research report on Alliance Healthcare Group Ltd (SGX: MIJ), culminating in a BUY recommendation with a SGD $0.20 target price (46% potential upside). Executed accounting adjustments for non-recurring expenses (COVID-19 rental rebates and bad debt write-offs) and evaluated balance sheet solvency risks using the Altman Z-Score model. Built a hybrid valuation blending a 5-year Unlevered Discounted Cash Flow (DCF) model (WACC=4.35%) with peer trading multiples (P/E, EV/EBITDA), highlighting key catalysts such as specialty pharmacy growth and P/E re-rating dynamics."
    ]
  },
  {
    id: "TBC",
    title: "TBC",
    category: "SMU",
    year: "2026",
    role: "TBC",
    tools: "TBC",
    image: "images/project-6.jpg",
    summary: "XX.",
    body: [
      "TBC"
    ]
  },
  
];

const TIMELINE = [
  { id: "y2026", year: "2026", bg: "images/bg-2026.jpg", events: [
      { title: "CapitaLand | Finance Automation Intern", image: "images/2026-1.jpg", 
        text: [
          "Developed 4 custom Python automation applications to streamline financial data workflows, reducing manual processing cycles and increasing reporting accuracy.",
          "<b>Technical focus:</b> Data manipulation, routine task programmatic automation, financial workflow optimisation"
        ]},
      { title: "L'Oréal Capstone Project | Strategy Business Analyst", image: "images/2026-2.jpg", 
        text: [
          "<b>Built financial models</b> for a self-defined skincare innovation targeting market gaps in product application layering.",
          "<b>Developed a comprehensive Go-To-Market (GTM) strategy</b> synthesising financial, operational and market research.",
          "<b>Pitched strategic findings directly to C-suite leadership</b> (COO, CTO, Head of Finance)." 
        ]}
  ]},
  { id: "y2025", year: "2025", bg: "images/bg-2025.jpg", events: [
      { title: "GTRSG | FP&A Intern", image: "images/2025-1.jpg", 
        text: [
          "<b>Executed monthly FP&A</b> variance analysis to identify cost drivers, track budget vs. actuals, and support financial forecasting.", 
          "<b>Automated repetitive financial reporting workflows</b> using <b>VBA</b> and <b>Power Automate</b>, eliminating manual data entry and streamlining cross-departmental data transfer."
        ]},

      { title: "Vietnam National University | Academic Exchange", image: "images/2025-2.jpg", 
        text: [
          "Conducted field studies on urban sustainability frameworks, ESG integration, and emerging-market business dynamics in Vietnam." 
        ]},

      { title: "Sustainable Finance Pitch | Analyst", image: "images/2025-3.jpg", 
        text: [
          "<b>Structured an ESG-aligned financial instrument pitch</b> for Thai Union, focused on funding green innovation and operational sustainability.",
          "<b>Executed financial valuation, ROI forecasting, and competitive benchmarking</b> to evaluate the feasibility and economic return of sustainable operational shifts.",
          "<b>Pitched proposal to Heads of Sustainability</b> from DBS, OCBC, UOB, SMBC aligning financial instruments with corporate ESG benchmarks." 
        ]},

      { title: "CDL South Beach Revitalisation Project | Business Strategy Analyst", image: "images/2025-4.jpg", 
        text: [ 
          "<b>Analysed footfall metrics and demographic datasets</b> to identify commercial growth opportunities and quantify demand for ESG initiatives",
          "<b>Pitched strategic revitalisation proposals</b> directly to senior CDL leadership, earning a <b>Top 4 Special Commendation</b>"
         ]}
  ]},
  { id: "y2024", year: "2024", bg: "images/bg-2024.jpg", events: [
      { title: "The Circular Classroom | Market & Behavioral Research Analyst", image: "images/2024-1.jpg", 
        text: [
          "Designed and analysed quantitative consumer surveys to evaluate behavioral barriers around textile recycling.",
          "Cleaned survey datasets and created a dashboard using Tableau to deliver actionable strategies aimed at accelerating circular economy participation."
         ]}
  ]},
  { id: "y2023", year: "2023", bg: "images/bg-2023.jpg", events: [
      { title: "Changi Airport Group | Changi Youth Ambassador", image: "images/2023-1.jpg", 
        text: [
          "<b>Managed dynamic resource allocation and operational logistics</b>, handling crisis management, gate scheduling changes and passenger throughput efficiency.",
          "Leveraged operational metrics to make real-time decisions, maintaining service-level agreements (SLAs) under high-pressure scenarios."
         ]}
  ]},
  { id: "y2022", year: "2022", bg: "images/bg-2022.jpg", events: [
      { title: "Dnata | Final Year Major Project", image: "images/2022-1.jpg", 
        text: [
          "Revamped the corporate onboarding architecture, transitioning legacy materials into interactive digital e-learning modules using <b>Vyond</b> and <b>Articulate Rise 360</b>.",
          "Standardised training workflows to accelerate time-to-productivity for incoming personnel" 
        ]}
  ]},
  { id: "y2021", year: "2020-2021", bg: "images/tp-bg.jpg", events: [
      { title: "Temasek Polytechnic | Year 1-2", image: "images/2021-1.jpg", text: "<b>Technical & Analytical Coursework:</b> Python, Data Visualization with Tableau, Financial Accounting, Engineering Mathematics, Aeronautical Science, Airline Operations Management" },
      { title: "POL-ITE Badminton Competition", image: "images/2021-2.jpg", text: "Represented institution in the POL-ITE Games, achieving a Top 4 finish in inter-tertiary competition." }
  ]}
];
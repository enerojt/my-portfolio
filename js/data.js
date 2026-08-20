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
    skills: "Python (OCR) | HTML/CSS | Power Query | VBA & Excel",
    image: "images/project-1.jpg",
    summary: "An end-to-end Python pipeline that automates financial reporting, replacing risky manual entry with a fast, one-click workflow.",
    body: [
      "Here is how the system operates:",
      "<b>OCR Extraction:</b> Custom Python scripts automatically scan and pull data from legacy financial documents",
      "<b>Smart Mapping:</b> Power Query cleans the raw data to create a master enterprise mapping dictionary",
      "<b>Document Parsing:</b> The system reads incoming Word financial statements and tags figures automatically",
      "<b>One-Click Filing:</b> Custom macros instantly push formatted data directly into XBRL reporting software"
    ]
  },
  {
    id: "Bank",
    title: "Treasury Access Management & Automated Form",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    skills: "Excel | SAP ",
    image: "images/project-2.jpg",
    summary: "A centralised access management engine that integrates SAP data to auto-populate 16 complex institutional banking templates, saving over 300 operational hours per cycle.",
    body: [
      "Here is how the automation process works:",
      "<b>1. Data Consolidation:</b> Centralised master user profiles, system access credentials and SAP authorization data into a single, unified database",
      "<b>2. Automated Matching:</b> Programmed an Excel engine to parse and map raw user data directly into specific bank-required fields (IDs, operational roles, contact details)",
      "<b>3. Auto-Populating Forms:</b> System automatically feeds the mapped data across 16 different institutional bank templates simultaneously with zero manual keying",
      "<b>4. Operational Efficiency:</b> Replaced repetitive manual entry and data verification, saving over 300 hours per operational cycle"
    ]
  },
  {
    id: "Dashboard",
    title: "Enterprise Reporting Ecosystem & AI Decision Assistant",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    skills: "Microsoft Fabric | Python | Ollama (Local LLM) | VBA & Excel",
    image: "images/project-3.jpg",
    summary: "An enterprise analytics system to track project performance, development expenditure, and loan facilities across residential portfolios, scaling it from a local AI dashboard to a cloud-based infrastructure.",
    body: [
      "Here is how the system evolved:",
      "<b>1. Excel Data Ingestion:</b> Standardised data entry across portfolios using custom macro-enabled Excel templates to capture operational metrics",
      "<b>2. Conversational AI Interface:</b> Developed a Python dashboard integrated with a local Ollama LLM, enabling stakeholders to query project metrics directly through plain-language Q&A",
      "<b>3. Scalable Cloud Migration:</b> Upgraded the data architecture to Microsoft Fabric to eliminate latency and maintain high-speed analytical processing as data volumes grew"
    ]
  },
  {
    id: "corpIQ",
    title: "CorpIQ: Enterprise Prediction Market Infrastructure",
    category: "SMU",
    year: "2026",
    role: "Co-Developer",
    skills: "Decision Science | LMSR AMM | Mechanism Design | Enterprise Governance | Python",
    image: "images/project-4.jpg",
    summary: "An internal prediction market protocol utilising automated market makers and behavioral guardrails to eliminate organisational bias and surface high-conviction strategic warnings.",
    body: [
      "Here is how the protocol operates:",
      "<b>1. Market Scoring Engine:</b> Utilises a Logarithmic Market Scoring Rule (LMSR) Automated Market Maker to continuously calculate accurate probability scores on critical events, such as M&A targets and launch dates",
      "<b>2. Bias Mitigation:</b> Overcomes organizational hierarchy, office politics, and information silos by allowing employees to trade tokens on real outcomes using their true insights",
      "<b>3. Built-in Guardrails:</b> Incorporates strict anti-manipulation controls including trading circuit breakers, position caps, and mandatory trade rationales to maintain market integrity",
      "<b>4. Strategic Decision Support:</b> Transforms hidden employee knowledge into actionable early warnings for high-stakes corporate decisions"
    ]
  },

  {
    id: "Reporting",
    title: "Strategic Valuation: Alliance Healthcare Group",
    category: "SMU",
    year: "2026",
    role: "Analyst",
    skills: "Financial Statement Analysis | DCF Modeling | Trading Multiples | Accounting Restatements",
    image: "images/project-5.jpg",
    summary: "I conducted a comprehensive equity research report for my school project on Alliance Healthcare Group (SGX: MIJ), issuing a BUY recommendation with a SGD 0.20 target price (46% potential upside)",
    body: [
      "Here is how the analysis was structured:",
      "<b>1. Normalised Financials:</b> Adjusted financial statements for non-recurring items—such as pandemic-related rental rebates and bad debt write-offs—to reflect true operating performance",
      "<b>2. Solvency Risk Assessment:</b> Evaluated long-term financial health and balance sheet stability using the Altman Z-Score model",
      "<b>3. Hybrid Valuation Model:</b> Combined a 5-year Unlevered Discounted Cash Flow (DCF) model (4.35% WACC) with peer trading multiples (P/E, EV/EBITDA) for accurate pricing",
      "<b>4. Catalyst Identification:</b> Outlined key growth drivers, focusing on specialty pharmacy expansion and market valuation re-rating potential"
    ]
  },
  {
    id: "TBC",
    title: "TBC",
    category: "SMU",
    year: "2026",
    role: "TBC",
    skills: "TBC",
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
      { title: "Honorary Finance Secretary | Taekwondo", image: "images/2024-1.jpg", 
        text: [
          "Formulated semestral budgets and managed end-to-end expense tracking, allocating capital across coaching fees, equipment procurement, and major club events.",
          "Managed cross-departmental claims and cost-recovery workflows, producing comprehensive semester-end financial statements for club members."
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
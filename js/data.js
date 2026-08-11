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
    tools: "Python, HTML, CSS, Power Query, Excel",
    image: "images/project-1.jpg",
    summary: "A workflow to make XBRL filing more accurate and efficient.",
    body: [
      "Describe the brief here: what the client needed, and the constraints you were designing within.",
      "Describe your process and the key decisions you made — this is where the story of the work lives."
    ]
  },
  {
    id: "Bank",
    title: "Treasury Banking Forms",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    tools: "Python, HTML, CSS, Excel",
    image: "images/project-2.jpg",
    summary: "A workflow to make filling up of banking forms more accurate and efficient.",
    body: [
      "Replace this with a short paragraph about the project's goals.",
      "Add a second paragraph about the outcome or what you learned."
    ]
  },
  {
    id: "Dashboard",
    title: "Dashboard",
    category: "CapitaLand",
    year: "2026",
    role: "Developer",
    tools: "Python, Ollama, HTML, CSS, Excel VBA",
    image: "images/project-3.jpg",
    summary: "A dashboard used for monthly reporting",
    body: [
      "Replace this with a short paragraph about the project's goals.",
      "Add a second paragraph about the outcome or what you learned."
    ]
  },
  {
    id: "token",
    title: "Prediction Market Intelligence",
    category: "SMU",
    year: "2026",
    role: "Co-Developer",
    tools: "Python",
    image: "images/project-4.jpg",
    summary: "A Token-Incentivised Prediction Market Infrastructure for Fortune 500 Strategic Intelligence",
    body: [
      "Replace this with a short paragraph about the project's goals.",
      "Add a second paragraph about the outcome or what you learned."
    ]
  },

  {
    id: "Reporting",
    title: "Corporate Reporting",
    category: "SMU",
    year: "2026",
    role: "Analyst",
    tools: "Excel, PowerPoint",
    image: "images/project-5.jpg",
    summary: "A wayfinding and identity system for a community arts center.",
    body: [
      "Replace this with a short paragraph about the project's goals.",
      "Add a second paragraph about the outcome or what you learned."
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
      "Replace this with a short paragraph about the project's goals.",
      "Add a second paragraph about the outcome or what you learned."
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
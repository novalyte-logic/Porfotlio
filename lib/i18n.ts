export type Language = "en" | "fr";

export interface TranslationDictionary {
  nav: {
    about: string;
    systems: string;
    architecture: string;
    testimonials: string;
    capabilities: string;
    getInTouch: string;
    location: string;
    brandSubtitle: string;
    availableBadge: string;
  };
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    focusTitle: string;
    focusValue: string;
    coreSystemsTitle: string;
    coreSystemsValue: string;
    toolchainsTitle: string;
    toolchainsValue: string;
    exploreBtn: string;
    resumeBtn: string;
    contactBtn: string;
    shareBtn: string;
  };
  about: {
    badge: string;
    readingTimeBadge: string;
    readingTimeEstimate: string;
    readingTimeDepth: string;
    readingTimeWords: string;
    title: string;
    subtitle: string;
    journeyTitle: string;
    journeyP1: string;
    journeyP2: string;
    journeyP3: string;
    journeyP4: string;
    locationTag: string;
    focusTag: string;
    ethosBadge: string;
    ethosQuote: string;
    ethosAuthor: string;
    ethosRole: string;
    statVelocity: string;
    statVelocityLabel: string;
    statSchemas: string;
    statSchemasLabel: string;
    principlesBadge: string;
    principlesTitle: string;
    principles: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
    };
    timelineBadge: string;
    timelineTitle: string;
    timelineSubtitle: string;
    milestoneContext: string;
    milestoneHighlights: string;
    milestoneTech: string;
    growthBadge: string;
    growthTitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    deepDive: string;
    simulateReload: string;
    reloading: string;
    systemPipeline: string;
    systemSummary: string;
    keyHighlights: string;
    metrics: {
      usersImpacted: string;
      apiRequests: string;
      timeSaved: string;
      queriesPerSec: string;
      latencyReduced: string;
      regionsMapped: string;
      tasksAutomated: string;
      schemaAccuracy: string;
      manualEffortSaved: string;
      repsSupported: string;
      responseTime: string;
      dataQuality: string;
    };
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      s1Title: string;
      s1Desc: string;
      s2Title: string;
      s2Desc: string;
      s3Title: string;
      s3Desc: string;
      s4Title: string;
      s4Desc: string;
      s5Title: string;
      s5Desc: string;
    };
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    verified: string;
    endorsementTag: string;
    autoPlayActive: string;
    pauseOnHover: string;
    prev: string;
    next: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    simulateReload: string;
    reloading: string;
    coreStrength: string;
    fullStack: string;
    infrastructure: string;
    enterprise: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    inquiryFocusLabel: string;
    messageLabel: string;
    submitBtn: string;
    submittingBtn: string;
    sentSuccessTitle: string;
    sentSuccessDesc: string;
    doneBtn: string;
    targetEmailNotice: string;
  };
  footer: {
    badge: string;
    heading: string;
    subheading: string;
    sendInquiryBtn: string;
    resumeBtn: string;
    directTransmission: string;
    copyNotice: string;
    copied: string;
    rights: string;
    availableStatus: string;
  };
  aiChat: {
    buttonLabel: string;
    title: string;
    greeting: string;
    placeholder: string;
    thinking: string;
  };
  sound: {
    toggleTitle: string;
    soundOn: string;
    soundOff: string;
    tooltip: string;
  };
  readingProgress: {
    reading: string;
    minLeft: string;
    lessThanMin: string;
    completed: string;
    totalReadTime: string;
    currentSection: string;
  };
  admin: {
    badge: string;
    title: string;
    subtitle: string;
    triggerNotice: string;
    liveBadge: string;
    activeSessions: string;
    totalVisitors: string;
    avgDwellTime: string;
    conversionRate: string;
    dwellSectionTitle: string;
    dwellSectionSubtitle: string;
    conversionTitle: string;
    conversionSubtitle: string;
    liveStreamTitle: string;
    liveStreamSubtitle: string;
    triggerSimEvent: string;
    refreshData: string;
    closeBtn: string;
    shortcutsTitle: string;
    shortcutKeys: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      about: "About",
      systems: "Systems",
      architecture: "Architecture",
      testimonials: "Testimonials",
      capabilities: "Capabilities",
      getInTouch: "Get in Touch",
      location: "SF / HYBRID / REMOTE",
      brandSubtitle: "Founder & AI Systems Builder",
      availableBadge: "Available for Forward Deployed AI Roles",
    },
    hero: {
      badge: "Available for Forward Deployed AI Roles",
      headline: "Engineering autonomous AI systems, operational control planes, and enterprise pipelines.",
      subhead: "Founder of Novalyte AI. Ex-Zendesk. I bridge the gap between foundation LLMs, deterministic schemas, and mission-critical production infrastructure.",
      focusTitle: "Primary Focus",
      focusValue: "Applied AI & Agent Control Planes",
      coreSystemsTitle: "Core Systems",
      coreSystemsValue: "Novalyte AI & Geospatialabs",
      toolchainsTitle: "Toolchains",
      toolchainsValue: "TypeScript • Python • Next.js • SQL",
      exploreBtn: "Explore Systems",
      resumeBtn: "Download Master Resume (PDF)",
      contactBtn: "Send Direct Message",
      shareBtn: "Share Profile",
    },
    about: {
      badge: "Behind the Systems",
      readingTimeBadge: "ESTIMATED READ",
      readingTimeEstimate: "3 min read",
      readingTimeDepth: "Comprehensive Breakdown",
      readingTimeWords: "~850 words",
      title: "About Jamil Yakasai",
      subtitle: "The trajectory of a systems builder obsessed with transforming messy real-world complexity into hardened, autonomous operational reality.",
      journeyTitle: "Journey & Narrative",
      journeyP1: "I am an Applied AI Builder & Systems Architect based in San Francisco. My background combines deep enterprise operations at scale with the relentless velocity of a zero-to-one founder.",
      journeyP2: "Early in my career at Zendesk, I observed firsthand that technology bottlenecks rarely stem from a lack of data—they occur when systems fail to translate unstructured human inputs into reliable, automated operational flows.",
      journeyP3: "When modern LLMs arrived, I recognized their potential not as chat toys, but as the universal translation layer for enterprise logic. I founded Novalyte AI to put this into practice: designing complete patient intake pipelines, structured schema extractors, and a 12-tool operator command center in production healthcare environments.",
      journeyP4: "Today, I build high-reliability agentic systems, operational control planes, and automated data infrastructure for teams looking to turn complex AI capabilities into durable business value.",
      locationTag: "San Francisco / Hybrid / Remote",
      focusTag: "Forward Deployed AI & Product Systems",
      ethosBadge: "Builder Ethos",
      ethosQuote: "“AI without deterministic telemetry and strict schema validation is just an expensive demo. We build systems that run mission-critical workflows reliably.”",
      ethosAuthor: "Jamil Yakasai",
      ethosRole: "Founder, Novalyte AI",
      statVelocity: "0 to 1",
      statVelocityLabel: "Product Velocity",
      statSchemas: "100%",
      statSchemasLabel: "Type Safe Schemas",
      principlesBadge: "System Design Principles",
      principlesTitle: "Core Engineering Philosophies",
      principles: {
        p1Title: "Deterministic Guardrails for Probabilistic Models",
        p1Desc: "LLMs are reasoning engines, not databases. Every unstructured AI generation must pass through rigid schema validators, type checkers, and business rule assertions before touching persistent storage.",
        p2Title: "Operator-Centric Control Planes",
        p2Desc: "Autonomous agents are only as good as human oversight. I build intuitive command centers that provide crystal-clear telemetry, single-click overrides, and transparent reasoning logs.",
        p3Title: "Zero-to-One Velocity with Production Hygiene",
        p3Desc: "Move fast without leaving technical debt in your wake. I combine rapid prototyping speed with rock-solid database schemas, automated testing, and comprehensive error telemetry.",
      },
      timelineBadge: "Interactive Timeline",
      timelineTitle: "Career Milestones & Evolution",
      timelineSubtitle: "Select a milestone phase to inspect system highlights",
      milestoneContext: "Context & Mission",
      milestoneHighlights: "Key Accomplishments",
      milestoneTech: "Technologies Deployed",
      growthBadge: "Capability Depth",
      growthTitle: "Skill Growth & Mastery",
    },
    projects: {
      badge: "Operational Surfaces",
      title: "Featured Projects & Systems",
      subtitle: "Deep dives into the production architectures, control planes, and agentic pipelines I've engineered.",
      deepDive: "DEEP DIVE",
      simulateReload: "Simulate Live Telemetry Reload",
      reloading: "Syncing Telemetry...",
      systemPipeline: "// System_Pipeline",
      systemSummary: "System Summary",
      keyHighlights: "Key Architectural Highlights",
      metrics: {
        usersImpacted: "Users Impacted",
        apiRequests: "API Requests Handled",
        timeSaved: "Time Saved",
        queriesPerSec: "Queries / Sec",
        latencyReduced: "Latency Reduced",
        regionsMapped: "Regions Mapped",
        tasksAutomated: "Tasks Automated",
        schemaAccuracy: "Schema Accuracy",
        manualEffortSaved: "Manual Effort Saved",
        repsSupported: "Reps Supported",
        responseTime: "Response Time",
        dataQuality: "Data Quality",
      }
    },
    architecture: {
      badge: "Pipeline Topology",
      title: "Architecture & Data Flow",
      subtitle: "Standard production pipeline transforming messy unstructured inputs into actionable operational telemetry and zero-drift database states.",
      steps: {
        s1Title: "Unstructured Input",
        s1Desc: "Webhook & Raw Intake",
        s2Title: "LLM Extraction",
        s2Desc: "Intent & JSON Schema",
        s3Title: "Strict Validation",
        s3Desc: "Triage & Type Logic",
        s4Title: "Sync & Storage",
        s4Desc: "Postgres & BigQuery",
        s5Title: "Command Center",
        s5Desc: "Operator Console",
      }
    },
    testimonials: {
      badge: "Social Proof & Endorsements",
      title: "What Leaders & Partners Say",
      subtitle: "Perspectives from engineering leaders, enterprise colleagues, and clinical partners on technical rigor and execution velocity.",
      verified: "VERIFIED PARTNER RECOMMENDATION",
      endorsementTag: "CORE ENDORSEMENT",
      autoPlayActive: "AUTOPLAY ACTIVE",
      pauseOnHover: "PAUSED ON HOVER",
      prev: "Previous recommendation",
      next: "Next recommendation",
    },
    techStack: {
      badge: "Competency Matrix",
      title: "Technical Stack & Capabilities",
      subtitle: "The languages, distributed engines, and applied AI toolchains I leverage to engineer production systems.",
      simulateReload: "Simulate Stack Hydration",
      reloading: "Loading Stack...",
      coreStrength: "CORE STRENGTH",
      fullStack: "FULL STACK",
      infrastructure: "INFRASTRUCTURE",
      enterprise: "ENTERPRISE",
    },
    contact: {
      badge: "Direct Inquiry",
      title: "Connect with Jamil",
      subtitle: "Open for Forward Deployed AI roles, technical architecture partnerships, and zero-to-one engineering leadership.",
      nameLabel: "Your Name *",
      emailLabel: "Email Address *",
      companyLabel: "Company / Org",
      inquiryFocusLabel: "Inquiry Focus",
      messageLabel: "Message & Project Scope *",
      submitBtn: "Send Message",
      submittingBtn: "Transmitting...",
      sentSuccessTitle: "Inquiry Transmitted",
      sentSuccessDesc: "Your message is queued directly to mrjamilyakasai@gmail.com.",
      doneBtn: "Done & Return",
      targetEmailNotice: "TARGET: mrjamilyakasai@gmail.com",
    },
    footer: {
      badge: "Collaboration & Inquiries",
      heading: "Let's build something.",
      subheading: "Currently open for new opportunities in forward deployed engineering, product systems, and applied AI systems.",
      sendInquiryBtn: "SEND INQUIRY TO JAMIL",
      resumeBtn: "Resume (PDF)",
      directTransmission: "Direct Transmission",
      copyNotice: "Copy Email",
      copied: "Copied!",
      rights: "JAMIL YAKASAI • NOVALYTE.IO",
      availableStatus: "Available for Applied AI Roles",
    },
    aiChat: {
      buttonLabel: "Command AI",
      title: "SYS_COMMAND_AI",
      greeting: "System connection established.\nJamil's Command Center AI online. Ask me about system architecture, healthcare ops surfaces, or technology choices.",
      placeholder: "Ask about systems architecture...",
      thinking: "Thinking [gemini-3.1-pro]...",
    },
    sound: {
      toggleTitle: "Interface Audio FX",
      soundOn: "Audio FX: Enabled",
      soundOff: "Audio FX: Muted",
      tooltip: "Toggle subtle tactile interaction audio",
    },
    readingProgress: {
      reading: "Reading",
      minLeft: "min remaining",
      lessThanMin: "< 1 min left",
      completed: "Completed",
      totalReadTime: "~4 min total read",
      currentSection: "Section",
    },
    admin: {
      badge: "RESTRICTED TELEMETRY HUD",
      title: "Visitor Engagement & System Telemetry",
      subtitle: "Simulated live analytics panel monitoring real-time dwell times, conversion funnels, and interaction depth.",
      triggerNotice: "Access via [Ctrl+Shift+A] or click the header indicator.",
      liveBadge: "STREAM ACTIVE",
      activeSessions: "Live Active Sessions",
      totalVisitors: "24h Visitor Volume",
      avgDwellTime: "Avg. Session Dwell",
      conversionRate: "CTA Conversion Rate",
      dwellSectionTitle: "Section Dwell Time Breakdown",
      dwellSectionSubtitle: "Aggregated time spent per viewport section across all sessions.",
      conversionTitle: "Action & CTA Conversion Funnels",
      conversionSubtitle: "Conversion rates for key high-intent portfolio actions.",
      liveStreamTitle: "Live Visitor Event Stream",
      liveStreamSubtitle: "Simulated real-time event telemetry broadcast.",
      triggerSimEvent: "Simulate Incoming Event",
      refreshData: "Recalibrate Telemetry",
      closeBtn: "Close Admin HUD",
      shortcutsTitle: "Admin Access Shortcut",
      shortcutKeys: "Press Ctrl + Shift + A or Cmd + Shift + A",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      systems: "Systèmes",
      architecture: "Architecture",
      testimonials: "Témoignages",
      capabilities: "Compétences",
      getInTouch: "Contact",
      location: "SF / HYBRIDE / DISTANCIEL",
      brandSubtitle: "Fondateur & Architecte Systèmes IA",
      availableBadge: "Disponible pour rôles IA Déployée",
    },
    hero: {
      badge: "Disponible pour rôles IA Déployée & Systèmes",
      headline: "Conception de systèmes IA autonomes, consoles de contrôle et pipelines d'entreprise.",
      subhead: "Fondateur de Novalyte AI. Ex-Zendesk. J'unifie les modèles LLM de pointe, les schémas déterministes et les infrastructures de production critiques.",
      focusTitle: "Focus Principal",
      focusValue: "IA Appliquée & Consoles d'Agents",
      coreSystemsTitle: "Systèmes Clés",
      coreSystemsValue: "Novalyte AI & Geospatialabs",
      toolchainsTitle: "Technologies",
      toolchainsValue: "TypeScript • Python • Next.js • SQL",
      exploreBtn: "Explorer les Systèmes",
      resumeBtn: "Télécharger le CV (PDF)",
      contactBtn: "Envoyer un Message Direct",
      shareBtn: "Partager le Profil",
    },
    about: {
      badge: "Au Cœur des Systèmes",
      readingTimeBadge: "TEMPS DE LECTURE",
      readingTimeEstimate: "3 min de lecture",
      readingTimeDepth: "Analyse Approfondie",
      readingTimeWords: "~850 mots",
      title: "À Propos de Jamil Yakasai",
      subtitle: "La trajectoire d'un architecte passionné par la transformation de la complexité réelle en infrastructures opérationnelles autonomes.",
      journeyTitle: "Parcours & Vision",
      journeyP1: "Je suis un bâtisseur d'IA appliquée et architecte de systèmes basé à San Francisco. Mon parcours conjugue opérations d'entreprise à grande échelle et vélocité radicale d'un fondateur 0-à-1.",
      journeyP2: "Chez Zendesk, j'ai constaté que les goulots d'étranglement technologiques proviennent rarement d'un manque de données, mais de l'incapacité à convertir les données humaines brutes en flux automatisés fiables.",
      journeyP3: "Avec l'émergence des LLM modernes, j'ai fondé Novalyte AI pour concrétiser cette vision : pipeline complet d'admission patient, extraction typée stricte et centre de commandement opérateur à 12 outils en milieu médical réel.",
      journeyP4: "Aujourd'hui, je conçois des systèmes d'agents hautement résilients, des consoles de pilotage et des architectures de données pour transformer le potentiel de l'IA en valeur commerciale durable.",
      locationTag: "San Francisco / Hybride / Distanciel",
      focusTag: "IA Déployée & Systèmes Produits",
      ethosBadge: "Éthique d'Ingénierie",
      ethosQuote: "« L'IA sans télémétrie déterministe ni validation stricte de schéma n'est qu'une démo coûteuse. Nous construisons des systèmes qui exécutent des flux critiques en toute fiabilité. »",
      ethosAuthor: "Jamil Yakasai",
      ethosRole: "Fondateur, Novalyte AI",
      statVelocity: "0 à 1",
      statVelocityLabel: "Vélocité Produit",
      statSchemas: "100%",
      statSchemasLabel: "Schémas Typés Sûrs",
      principlesBadge: "Principes de Conception",
      principlesTitle: "Philosophies d'Ingénierie Clés",
      principles: {
        p1Title: "Garde-fous Déterministes pour Modèles Probabilistes",
        p1Desc: "Les LLM sont des moteurs de raisonnement, pas des bases de données. Chaque génération doit subir des validateurs stricts avant d'atteindre le stockage persistant.",
        p2Title: "Consoles de Contrôle Centrées sur l'Opérateur",
        p2Desc: "Les agents autonomes ne valent que par la supervision humaine. Je crée des centres de commande offrant une télémétrie limpide et des dérogations en 1 clic.",
        p3Title: "Vélocité 0-à-1 avec Hygiène de Production",
        p3Desc: "Aller vite sans accumuler de dette technique. J'associe rapidité de prototypage, schémas SQL impeccables et couverture d'erreurs exhaustive.",
      },
      timelineBadge: "Chronologie Interactive",
      timelineTitle: "Parcours Professionnel & Évolution",
      timelineSubtitle: "Sélectionnez une phase pour inspecter les réalisations",
      milestoneContext: "Contexte & Mission",
      milestoneHighlights: "Accomplissements Majeurs",
      milestoneTech: "Technologies Déployées",
      growthBadge: "Profondeur d'Expertise",
      growthTitle: "Maîtrise & Compétences Clés",
    },
    projects: {
      badge: "Surfaces Opérationnelles",
      title: "Projets & Systèmes Phares",
      subtitle: "Exploration approfondie des architectures de production, consoles de pilotage et pipelines d'agents déployés.",
      deepDive: "ANALYSE DÉTAILLÉE",
      simulateReload: "Simuler la Recharge Télémétrique",
      reloading: "Synchronisation...",
      systemPipeline: "// Pipeline_Système",
      systemSummary: "Résumé du Système",
      keyHighlights: "Points Clés d'Architecture",
      metrics: {
        usersImpacted: "Utilisateurs Touchés",
        apiRequests: "Requêtes API / mois",
        timeSaved: "Temps Économisé",
        queriesPerSec: "Requêtes / Seconde",
        latencyReduced: "Latence Réduite",
        regionsMapped: "Métropoles Cartographiées",
        tasksAutomated: "Tâches Automatisées",
        schemaAccuracy: "Précision de Schéma",
        manualEffortSaved: "Temps Manuel Économisé",
        repsSupported: "Commerciaux Équipés",
        responseTime: "Temps de Réponse",
        dataQuality: "Qualité des Données",
      }
    },
    architecture: {
      badge: "Topologie du Pipeline",
      title: "Architecture & Flux de Données",
      subtitle: "Pipeline de production standard convertissant les entrées brutes non structurées en télémétrie opérationnelle exploitable et données sans dérive.",
      steps: {
        s1Title: "Entrée Non Structurée",
        s1Desc: "Webhook & Réception Brute",
        s2Title: "Extraction LLM",
        s2Desc: "Intention & Schéma JSON",
        s3Title: "Validation Stricte",
        s3Desc: "Triage & Logique de Types",
        s4Title: "Synchro & Stockage",
        s4Desc: "Postgres & BigQuery",
        s5Title: "Centre de Contrôle",
        s5Desc: "Console Opérateur",
      }
    },
    testimonials: {
      badge: "Preuves Sociales & Recommandations",
      title: "Ce Que Disent Leaders & Partenaires",
      subtitle: "Retours d'expérience de dirigeants techniques, collègues d'entreprise et partenaires cliniques sur la rigueur et la vélocité d'exécution.",
      verified: "RECOMMANDATION PARTENAIRE VÉRIFIÉE",
      endorsementTag: "RECOMMANDATION CLÉ",
      autoPlayActive: "DÉFILEMENT AUTOMATIQUE",
      pauseOnHover: "EN PAUSE AU SURVOL",
      prev: "Recommandation précédente",
      next: "Recommandation suivante",
    },
    techStack: {
      badge: "Matrice de Compétences",
      title: "Stack Technique & Capacités",
      subtitle: "Les langages, moteurs distribués et chaînes d'outils IA appliquées utilisés pour concevoir des systèmes de production.",
      simulateReload: "Simuler l'Hydratation de la Stack",
      reloading: "Chargement...",
      coreStrength: "FORCE MAJEURE",
      fullStack: "FULL STACK",
      infrastructure: "INFRASTRUCTURE",
      enterprise: "ENTREPRISE",
    },
    contact: {
      badge: "Transmission Directe",
      title: "Prendre Contact avec Jamil",
      subtitle: "Disponible pour opportunités en IA Appliquée, partenariats d'architecture technique et leadership 0-à-1.",
      nameLabel: "Votre Nom *",
      emailLabel: "Adresse Email *",
      companyLabel: "Entreprise / Organisation",
      inquiryFocusLabel: "Type d'Opportunité",
      messageLabel: "Message & Portée du Projet *",
      submitBtn: "Envoyer le Message",
      submittingBtn: "Transmission en cours...",
      sentSuccessTitle: "Message Transmis",
      sentSuccessDesc: "Votre message a été envoyé directement à mrjamilyakasai@gmail.com.",
      doneBtn: "Terminé & Retour",
      targetEmailNotice: "DESTINATAIRE: mrjamilyakasai@gmail.com",
    },
    footer: {
      badge: "Collaboration & Contact",
      heading: "Construisons l'avenir ensemble.",
      subheading: "Actuellement ouvert aux nouvelles opportunités en ingénierie d'IA déployée, systèmes produits et pipelines d'agents.",
      sendInquiryBtn: "CONTACTER JAMIL DIRECTEMENT",
      resumeBtn: "CV (PDF)",
      directTransmission: "Transmission Directe",
      copyNotice: "Copier l'Email",
      copied: "Copié !",
      rights: "JAMIL YAKASAI • NOVALYTE.IO",
      availableStatus: "Disponible pour postes en IA Appliquée",
    },
    aiChat: {
      buttonLabel: "IA Commande",
      title: "SYS_COMMAND_AI",
      greeting: "Connexion système établie.\nIA du Centre de Commande en ligne. Posez vos questions sur l'architecture, la santé ou les choix technologiques.",
      placeholder: "Interrogez l'architecture des systèmes...",
      thinking: "Raisonnement [gemini-3.1-pro]...",
    },
    sound: {
      toggleTitle: "Effets Sonores UI",
      soundOn: "Effets Sonores : Activés",
      soundOff: "Effets Sonores : Coupés",
      tooltip: "Activer les sons d'interaction tactiles",
    },
    readingProgress: {
      reading: "Lecture",
      minLeft: "min restantes",
      lessThanMin: "< 1 min restante",
      completed: "Terminé",
      totalReadTime: "~4 min de lecture totale",
      currentSection: "Section",
    },
    admin: {
      badge: "CONSOLE TÉLÉMÉTRIE RESTREINTE",
      title: "Engagement Visiteurs & Télémétrie Système",
      subtitle: "Panneau d'analyse simulant en temps réel les temps d'arrêt, tunnels de conversion et profondeur d'interaction.",
      triggerNotice: "Accessible via [Ctrl+Shift+A] ou clic sur l'indicateur d'en-tête.",
      liveBadge: "FLUX EN DIRECT",
      activeSessions: "Sessions Actives en Direct",
      totalVisitors: "Volume Visiteurs (24h)",
      avgDwellTime: "Durée Moy. de Session",
      conversionRate: "Taux de Conversion CTA",
      dwellSectionTitle: "Répartition du Temps par Section",
      dwellSectionSubtitle: "Temps agrégé passé par section du portfolio sur toutes les sessions.",
      conversionTitle: "Tunnels de Conversion & Actions Clés",
      conversionSubtitle: "Taux de conversion pour les actions à forte intention.",
      liveStreamTitle: "Flux d'Événements Visiteurs en Direct",
      liveStreamSubtitle: "Diffusion d'événements télémétriques simulés en temps réel.",
      triggerSimEvent: "Simuler un Événement",
      refreshData: "Recalibrer la Télémétrie",
      closeBtn: "Fermer la Console Admin",
      shortcutsTitle: "Raccourci d'Accès Admin",
      shortcutKeys: "Appuyez sur Ctrl + Shift + A ou Cmd + Shift + A",
    },
  }
};

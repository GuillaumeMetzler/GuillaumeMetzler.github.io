/* Source unique des donnees de publications du site.
 *
 * C'est le SEUL endroit ou une publication doit etre ajoutee, corrigee ou
 * retiree : la page publications.html (via pub-render.js) et toute autre
 * page qui reference une publication (via pub-ref.js, ex. research.html)
 * lisent ce meme fichier. La numerotation [C1], [N2], [W1], [P3], [R2]... et
 * le tri chronologique decroissant sont recalcules automatiquement a chaque
 * chargement de page a partir des champs "year"/"month" ci-dessous : il n'y
 * a donc jamais de numero a corriger a la main, ni sur cette page ni
 * ailleurs sur le site.
 *
 * Chaque publication porte un "id" stable (utilise comme ancre #id sur
 * publications.html) et un tableau "authorIds" (forme normalisee
 * "initiale-du-prenom + nom", sans accents/espaces) qui sert a construire
 * automatiquement, sur d'autres pages, la liste des publications d'une
 * personne donnee (voir assets/js/pub-ref.js).
 */

var PUBLICATIONS_GROUPS = [
  { id: "group-conf-intl", type: "C", title: "Conférences internationales",
    accent: "card-accent-blue",
    singular: "conférence internationale", plural: "conférences internationales" },
  { id: "group-revues-intl", type: "R", title: "Revues internationales",
    accent: "card-accent-teal",
    singular: "revue internationale", plural: "revues internationales" },
  { id: "group-conf-nat", type: "N", title: "Conférences nationales",
    accent: "card-accent-green",
    singular: "conférence nationale", plural: "conférences nationales" },
  { id: "group-workshops-intl", type: "W", title: "Workshops nationaux/internationaux",
    accent: "card-accent-rose",
    singular: "workshop national/international", plural: "workshops nationaux/internationaux" },
  { id: "group-preprints", type: "P", title: "Préprints",
    tag: "non encore publiés en conférence ou revue",
    accent: "card-accent-amber",
    singular: "préprint", plural: "préprints" },
  { id: "group-theses", type: null, title: "Thèses et mémoires",
    accent: "card-accent-plum" }
];

var PUBLICATIONS = [
  // --- Conférences internationales ---
  {
    id: "debias-emnlp-2026", group: "group-conf-intl", year: 2026, month: 10,
    title: "Debias-SparseGPT: Bias-Aware Pruning for Large Language Models",
    authors: "T. Leteno, I. Proskurina, A. Gourru, J. Velcin, C. Laclau, G. Metzler, C. Gravier",
    authorIds: ["iproskurina", "gmetzler", "agourru", "jvelcin"],
    venue: "The 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP), Budapest, Hungary, octobre 2026",
    badges: [{ text: "CORE A*", color: "amber" }],
    links: [
    ]
  },
  {
    id: "multisigbert-ecml-2026", group: "group-conf-intl", year: 2026, month: 9,
    title: "MultiSigBERT: Beyond Survival Analysis through Multimodal and Sequential Modeling in Oncology",
    authors: "P. Minchella, S. Chrétien, G. Metzler, L. Verlingue, and R. Vaucher3",
    authorIds: ["pminchella", "lverlingue", "schretien", "rvaucher", "gmetzler"],
    venue: "37th European Conference on Machine Learning & Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), Naples, Italy, septembre 2026",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Préprint (arXiv)", href: "https://arxiv.org/pdf/2608.16972", external: true }
    ]
  },
  {
    id: "pacbayes-fentropic-2026", group: "group-conf-intl", year: 2026, month: 5,
    title: "PAC-Bayesian Bounds on Constrained -Entropic Risk Measures",
    authors: "H. Atbir, F. Cherfaoui, G. Metzler, E. Morvant, P. Viallard",
    authorIds: ["hatbir", "fcherfaoui", "gmetzler", "emorvant", "pviallard"],
    venue: "29th Annual Conference on Artificial Intelligence and Statistics (AISTATS), Tangier, Morocco, mai 2026",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Préprint (arXiv)", href: "https://arxiv.org/abs/2510.11169", external: true }
    ]
  },
  {
    id: "sigbert-ecml-2025", group: "group-conf-intl", year: 2025, month: 9,
    title: "SigBERT: Combining Narrative Medical Reports and Rough Path Signature Theory for Survival Prediction in Oncology",
    authors: "P. Minchella, L. Verlingue, S. Chrétien, R. Vaucher, G. Metzler",
    authorIds: ["pminchella", "lverlingue", "schretien", "rvaucher", "gmetzler"],
    venue: "36th European Conference on Machine Learning & Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), Porto, Portugal, septembre 2025",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2025/paper_ecml.pdf" },
      { label: "Préprint (arXiv)", href: "https://arxiv.org/abs/2507.22941", external: true }
    ]
  },
  {
    id: "histoiresmorales-naacl-2025", group: "group-conf-intl", year: 2025, month: 4,
    title: "HISTOIRESMORALES: A French Dataset for Assessing Moral Alignment",
    authors: "T. Leteno, I. Proskurina, A. Gourru, J. Velcin, C. Laclau, G. Metzler, C. Gravier",
    authorIds: ["tleteno", "iproskurina", "agourru", "jvelcin", "claclau", "gmetzler", "cgravier"],
    venue: "2025 Annual Conference of the North American Chapter of the Association for Computational Linguistics — Human Language Technologies (NAACL, Long Papers), Albuquerque, USA, avril 2025",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article (ACL Anthology)", href: "https://aclanthology.org/2025.naacl-long.131/", external: true }
    ]
  },
  {
    id: "quantization-naacl-2024", group: "group-conf-intl", year: 2024, month: 6,
    title: "When Quantization Affects Confidence of Large Language Models?",
    authors: "I. Proskurina, L. Brun, G. Metzler, J. Velcin",
    authorIds: ["iproskurina", "lbrun", "gmetzler", "jvelcin"],
    venue: "2024 Annual Conference of the North American Chapter of the Association for Computational Linguistics — Human Language Technologies (NAACL-HLT, Findings), Mexico City, Mexique, juin 2024",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2024/paper_naacl.pdf" },
      { label: "ACL Anthology", href: "https://aclanthology.org/2024.findings-naacl.124/", external: true }
    ]
  },
  {
    id: "other-ida-2023", group: "group-conf-intl", year: 2023, month: 6,
    title: "The Other Side of Compression: Measuring Bias in Pruned Transformers",
    authors: "I. Proskurina, G. Metzler, J. Velcin",
    authorIds: ["iproskurina", "lbrun", "gmetzler", "jvelcin"],
    venue: "In Proceedings in the 20th International Symposium on Intelligent Data Analysis (IDA), Louvain-La-Neuve, Belgium, Avril 2023",
    badges: [{ text: "CORE B", color: "teal" }],
    links: [
      { label: "ACL Anthology", href: "https://link.springer.com/chapter/10.1007/978-3-031-30047-9_29", external: true }
    ]
  },
  {
    id: "landmark-ecml-2020", group: "group-conf-intl", year: 2020, month: 9,
    title: "Landmark-based Ensemble Learning with Random Fourier Features and Gradient Boosting",
    authors: "L. Gautheron, P. Germain, A. Habrard, G. Metzler, E. Morvant, M. Sebban, V. Zantedeschi",
    authorIds: ["lgautheron", "pgermain", "ahabrard", "gmetzler", "emorvant", "msebban", "vzantedeschi"],
    venue: "31st European Conference on Machine Learning & Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), Gand, Belgique, septembre 2020",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2020/paper_ecml.pdf" },
      { label: "Supplementary", href: "articles/2020/supp_ecml.pdf" }
    ]
  },
  {
    id: "fewpositives-ijcai-2020", group: "group-conf-intl", year: 2020, month: 7,
    title: "Learning from Few Positives: a Provably Accurate Metric Learning Algorithm to Deal with Imbalanced Data",
    authors: "R. Viola, R. Emonet, A. Habrard, G. Metzler, M. Sebban",
    authorIds: ["rviola", "remonet", "ahabrard", "gmetzler", "msebban"],
    venue: "29th International Joint Conference on Artificial Intelligence (IJCAI), Yokohama, Japon, juillet 2020",
    badges: [{ text: "CORE A*", color: "amber" }],
    links: [
      { label: "Article", href: "articles/2020/paper_ijcai.pdf" },
      { label: "Supplementary", href: "articles/2020/supp_ijcai.pdf" }
    ]
  },
  {
    id: "adjustedknn-ictai-2019", group: "group-conf-intl", year: 2019, month: 11,
    title: "An Adjusted Nearest Neighbor Algorithm Maximizing the F-Measure from Imbalanced Data",
    authors: "R. Viola, R. Emonet, A. Habrard, G. Metzler, S. Riou, M. Sebban",
    authorIds: ["rviola", "remonet", "ahabrard", "gmetzler", "sriou", "msebban"],
    venue: "31st International Conference on Tools with Artificial Intelligence (ICTAI), Portland, Oregon, USA, novembre 2019",
    badges: [{ text: "CORE B", color: "teal" }],
    links: [
      { label: "Article", href: "articles/2019/paper_ictai.pdf" }
    ]
  },
  {
    id: "costsensitive-aistats-2019", group: "group-conf-intl", year: 2019, month: 4,
    title: "From Cost-Sensitive Classification to Tight F-Measure Bounds",
    authors: "K. Bascol, R. Emonet, E. Fromont, A. Habrard, G. Metzler, M. Sebban",
    authorIds: ["kbascol", "remonet", "efromont", "ahabrard", "gmetzler", "msebban"],
    venue: "22nd International Conference on Artificial Intelligence and Statistics (AISTATS), Naha, Okinawa, Japon, avril 2019",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2019/paper_aistats.pdf" },
      { label: "Annexe", href: "articles/2019/supp_aistats.pdf" },
      { label: "Poster", href: "articles/2019/poster_aistats.pdf" }
    ]
  },
  {
    id: "treebased-ida-2018", group: "group-conf-intl", year: 2018, month: 10,
    title: "Tree-based Cost Sensitive Methods for Fraud Detection in Imbalanced Data",
    authors: "G. Metzler, X. Badiche, B. Belkasmi, E. Fromont, A. Habrard, M. Sebban",
    authorIds: ["gmetzler", "xbadiche", "bbelkasmi", "efromont", "ahabrard", "msebban"],
    venue: "17th International Symposium on Intelligent Data Analysis (IDA), 's-Hertogenbosch, Pays-Bas, octobre 2018",
    badges: [{ text: "CORE A", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2018/paper_ida.pdf" },
      { label: "Slides", href: "articles/2018/slides_ida.pdf" },
      { label: "Poster", href: "articles/2018/poster_ida.pdf" }
    ]
  },

  // --- Revues internationales ---
  {
    id: "adjustedknn-ijait-2021", group: "group-revues-intl", year: 2021, month: 1,
    title: "An Adjusted Nearest Neighbor Algorithm Maximizing the F-Measure from Imbalanced Data",
    authors: "R. Viola, R. Emonet, A. Habrard, G. Metzler, S. Riou, M. Sebban",
    authorIds: ["rviola", "remonet", "ahabrard", "gmetzler", "sriou", "msebban"],
    venue: "International Journal on Artificial Intelligence Tools (IJAIT), janvier 2021",
    badges: [{ text: "Q3", color: "teal" }],
    links: [
      { label: "Article", href: "articles/2021/paper_ijait.pdf" }
    ]
  },
  {
    id: "ellipsoids-prl-2018", group: "group-revues-intl", year: 2018, month: 9,
    title: "Learning Maximum Excluding Ellipsoids with Theoretical Guarantees",
    authors: "G. Metzler, X. Badiche, B. Belkasmi, E. Fromont, A. Habrard, M. Sebban",
    authorIds: ["gmetzler", "xbadiche", "bbelkasmi", "efromont", "ahabrard", "msebban"],
    venue: "Pattern Recognition Letters (PRL), septembre 2018",
    badges: [{ text: "Q2", color: "blue" }],
    links: [
      { label: "Article", href: "articles/2018/paper_prl.pdf" }
    ]
  },

  // --- Conférences nationales ---
  {
    id: "histoiresmorales-jeptalnrecital-2025", group: "group-conf-nat", year: 2025, month: 7,
    title: "HISTOIRESMORALES: Un jeu de données français pour évaluer l'alignement moral des modèles de langage",
    authors: "T. Leteno, I. Proskurina, A. Gourru, J. Velcin, C. Laclau, G. Metzler, C. Gravier",
    authorIds: ["tleteno", "iproskurina", "agourru", "jvelcin", "claclau", "gmetzler", "cgravier"],
    venue: "JEP-TALN-RECITAL, Marseille, juin-juillet 2025",
    links: [
      { label: "Article (ACL Anthology)", href: "https://aclanthology.org/2025.jeptalnrecital-trad.16/", external: true }
    ]
  },
    {
    id: "combining-cancer-2025", group: "group-conf-nat", year: 2025, month: 1,
    title: "Combining Narrative Medical Reports and Rough Path Theory for Survival Prediction : A Cox Model Approach with OncoBERT Embeddings",
    authors: "P Minchella, L Verlingue, G. Metzler,S Chrétien,",
    authorIds: ["pminchella", "lverlingue", "gmetzler", "schretien"],
    venue: "6th CRCL International Cancer Symposium, Lyon, France, Janvier 2025",
    links: [
      { label: "Article", href: "https://arxiv.org/html/2507.22941v1", external: true }
    ]
  },
  {
    id: "quantification-cap-2024", group: "group-conf-nat", year: 2024, month: 7,
    title: "Quand la quantification affecte-t-elle la confiance des grands modèles de langage?",
    authors: "I. Proskurina, G. Metzler, J.Velcin",
    authorsIds: ["iproskurina", "gmetzler", "jvelcin"],
    venue: "Conférence pour l'Apprentissage Automatique (CAp), Lille, France, Juillet 2024",
    links: [
      { label: "Article", href: "https://link.springer.com/chapter/10.1007/978-3-031-30047-9_29", external: true }
    ]
  },
    {
    id: "pacbayes-cap-2024", group: "group-conf-nat", year: 2024, month: 7,
    title: "PAC-Bayesian Bounds on Constrained -Entropic Risk Measures",
    authors: "H. Atbir, F. Cherfaoui, G. Metzler, E. Morvant, P. Viallard",
    authorIds: ["hatbir", "fcherfaoui", "gmetzler", "emorvant", "pviallard"],
    venue: "Conférence pour l'Apprentissage Automatique (CAp), Lille, France, Juillet 2024",
    links: [
      { label: "Préprint (arXiv)", href: "https://arxiv.org/abs/2510.11169", external: true }
    ]
  },
      {
    id: "lambda-cap-2023", group: "group-conf-nat", year: 2023, month: 7,
    title: "LAMBDA: Landmark Alignment and Mixture-Based Domain Adaptation",
    authors: "T. Martinet, G. Metzler",
    authorIds: ["hatbir", "fcherfaoui", "gmetzler", "emorvant", "pviallard"],
    venue: "Conférence pour l'Apprentissage Automatique (CAp), Lille, France, Juillet 2024",
    links: [
      { label: "Article", href: "articles/2023/cap2023.pdf", external: true }
    ]
  },
    {
    id: "cox-jds-2023", group: "group-conf-nat", year: 2023, month: 7,
    title: "Mélange de Modèles de Cox avec des données hétérogènes",
    authors: "E. Peyraud, J. Jacques, G. Metzler, A. Lopez",
    authorIds: ["epeyraud", "jjacques", "gmetzler", "alopez"],
    venue: "54 ème Journées de la Statistique de la Société Française de Statistique (JdS), Bruxelles, 2023 ",
    links: [
      { label: "Article", href: "articles/2022/jds2023.pdf" }
    ]
  },
  {
    id: "cox-jds-2022", group: "group-conf-nat", year: 2022, month: 6,
    title: "Modèle de Cox avec des données hétérogènes",
    authors: "E. Peyraud, J. Jacques, G. Metzler, A. Lopez",
    authorIds: ["epeyraud", "jjacques", "gmetzler", "alopez"],
    venue: "53 ème Journées de la Statistique de la Société Française de Statistique (JdS), Lyon, juin 2022",
    links: [
      { label: "Article", href: "articles/2022/jds2022.pdf" }
    ]
  },
  {
    id: "landmark-cap-2020", group: "group-conf-nat", year: 2020, month: 6,
    title: "Apprentissage d'ensemble basé sur des points de repères avec des caractéristiques de Fourier aléatoires et un renforcement du gradient",
    authors: "L. Gautheron, P. Germain, A. Habrard, G. Metzler, E. Morvant, M. Sebban, V. Zantedeschi",
    authorIds: ["lgautheron", "pgermain", "ahabrard", "gmetzler", "emorvant", "msebban", "vzantedeschi"],
    venue: "Conférence sur l'Apprentissage Automatique (CAp), Vannes, juin 2020",
    links: [
      { label: "Article", href: "articles/2020/paper_cap_b.pdf" }
    ]
  },
  {
    id: "mlfp-cap-2020", group: "group-conf-nat", year: 2020, month: 6,
    title: "MLFP : un algorithme d'apprentissage de métrique pour la classification de données déséquilibrées",
    authors: "R. Viola, R. Emonet, A. Habrard, G. Metzler, M. Sebban",
    authorIds: ["rviola", "remonet", "ahabrard", "gmetzler", "msebban"],
    venue: "Conférence sur l'Apprentissage Automatique (CAp), Vannes, juin 2020",
    links: [
      { label: "Article", href: "articles/2020/paper_cap_a.pdf" },
      { label: "Supplementary", href: "articles/2020/supp_cap_a.pdf" }
    ]
  },
  {
    id: "adjustedknn-cap-2019", group: "group-conf-nat", year: 2019, month: 7,
    title: "Une version corrigée de l'algorithme des plus proches voisins pour l'optimisation de la F-mesure dans un contexte déséquilibré",
    authors: "R. Viola, R. Emonet, A. Habrard, G. Metzler, S. Riou, M. Sebban",
    authorIds: ["rviola", "remonet", "ahabrard", "gmetzler", "sriou", "msebban"],
    venue: "Conférence sur l'Apprentissage Automatique (CAp), Toulouse, juillet 2019",
    links: [
      { label: "Article", href: "articles/2019/paper_cap.pdf" },
      { label: "Slides", href: "articles/2019/slides_cap.pdf" },
      { label: "Poster", href: "articles/2019/poster_cap.pdf" }
    ]
  },
  {
    id: "fmeasure-cap-2018", group: "group-conf-nat", year: 2018, month: 6,
    title: "Un algorithme d'optimisation de la F-Mesure par pondération des erreurs de classification",
    authors: "K. Bascol, R. Emonet, E. Fromont, A. Habrard, G. Metzler, M. Sebban",
    authorIds: ["kbascol", "remonet", "efromont", "ahabrard", "gmetzler", "msebban"],
    venue: "Conférence sur l'Apprentissage Automatique (CAp), Rouen, juin 2018",
    links: [
      { label: "Article", href: "articles/2018/paper_cap.pdf" },
      { label: "Slides", href: "articles/2018/slides_cap.pdf" },
      { label: "Poster", href: "articles/2018/poster_cap.pdf" }
    ]
  },
  {
    id: "spheres-cap-2017", group: "group-conf-nat", year: 2017, month: 6,
    title: "Apprentissage de Sphères Maximales d'exclusion avec Garanties Théoriques",
    authors: "G. Metzler, X. Badiche, B. Belkasmi, E. Fromont, A. Habrard, M. Sebban",
    authorIds: ["gmetzler", "xbadiche", "bbelkasmi", "efromont", "ahabrard", "msebban"],
    venue: "Conférence sur l'Apprentissage Automatique (CAp), Grenoble, juin 2017",
    links: [
      { label: "Article", href: "articles/2017/paper_cap.pdf" },
      { label: "Slides", href: "articles/2017/slides_cap.pdf" },
      { label: "Poster", href: "articles/2017/poster_cap.pdf" }
    ]
  },

  // --- Workshops internationaux ---
  {
    id: "outcomes-transplatation-2024", group: "group-workshops-intl", year: 2024, month: 9,
    title: "Outcomes of liver transplantation in patients 60 years and older : a multivariate analysis using penalized Cox regression",
    authors: "E. Peyraud, J. Jacques, G. Metzler, N. Asong Fontem",
    authorIds: ["epeyraud", "jjacques", "gmetzler", "nasong"],
    venue: "30th International Congress of The Transplantation Society (TTS), Istanbul, Turquie, 2024",
    links: [
      { label: "Article", href: "articles/2024/tts.pdf" },
    ]
  },
    {
    id: "towards-tal-2023", group: "group-workshops-intl", year: 2024, month: 4,
    title: "Towards an Ethical Compression of Large Language Models",
    authors: "I. Proskurina, G. Metzler, J. Velcin",
    authorIds: ["iproskurina", "gmetzler", "jvelcin"],
    venue: "Journée Ethique et TAL, Nancy, avril 2024",
    links: [
      { label: "Resumé", href: "articles/2024/ethique.pdf", external: true }
    ]
  },
  {
    id: "minimind-conll-2023", group: "group-workshops-intl", year: 2023, month: 12,
    title: "Mini Minds: Exploring Bebeshka and Zlata Baby Models",
    authors: "I. Proskurina, G. Metzler, J. Velcin",
    authorIds: ["iproskurina", "gmetzler", "jvelcin"],
    venue: "BabyLM Challenge, 27th Conference on Computational Natural Language Learning (CoNLL), Singapour, décembre 2023",
    links: [
      { label: "Article (ACL Anthology)", href: "https://aclanthology.org/2023.conll-babylm.4/", external: true }
    ]
  },
    {
    id: "modeles-statlearn-2022", group: "group-workshops-intl", year: 2022, month: 7,
    title: "Outcomes of liver transplantation in patients 60 years and older : a multivariate analysis using penalized Cox regression",
    authors: "E. Peyraud, J. Jacques, G. Metzler, A. Lopez",
    authorIds: ["epeyraud", "jjacques", "gmetzler", "alopez"],
    venue: "Statlearn, Juillet 2022, Cargèse (Corse), France",
    links: [
      { label: "Poster", href: "articles/2022/statlearn.pdf" },
    ]
  },

  // --- Préprints ---


  {
    id: "pacbayes-fairness-2026", group: "group-preprints", year: 2026, month: 2,
    title: "PAC-Bayesian Generalization Guarantees for Fairness on Stochastic and Deterministic Classifiers",
    authors: "J. Bastian, B. Leblanc, P. Germain, A. Habrard, C. Largeron, G. Metzler, E. Morvant, P. Viallard",
    authorIds: ["jbastian", "bleblanc", "pgermain", "ahabrard", "clargeron", "gmetzler", "emorvant", "pviallard"],
    venue: "arXiv:2602.11722, 2026",
    links: [
      { label: "Préprint (arXiv)", href: "https://arxiv.org/abs/2602.11722", external: true }
    ]
  },
  {
    id: "fairgptq-2025", group: "group-preprints", year: 2025, month: 9,
    title: "Fair-GPTQ: Bias-Aware Quantization for Large Language Models",
    authors: "I. Proskurina, G. Metzler, J. Velcin",
    authorIds: ["iproskurina", "gmetzler", "jvelcin"],
    venue: "arXiv:2509.15206, 2025",
    links: [
      { label: "Préprint (arXiv)", href: "https://arxiv.org/abs/2509.15206v2", external: true }
    ]
  },
  {
    id: "stochastic-unpub-2025", group: "group-preprints", year: 2025, month: 1,
    title: "A Stochastic Approximation of EM Algorithm forHandling Missing Data in Cox Regression Models",
    authors: "E. Peyraud, J. Jacques, G. Metzler",
    authorIds: ["epeyraud", "jjacques", "gmetzler"],
    venue: "hal-05057848, 2025",
    links: [
      { label: "Preprint", href: "https://hal.science/hal-05057848/document" },
    ]
  },
    {
    id: "mixture-unpub-2024", group: "group-preprints", year: 2025, month: 1,
    title: "A Stochastic Approximation of EM Algorithm forHandling Missing Data in Cox Regression Models",
    authors: "E. Peyraud, J. Jacques, G. Metzler, I. Faivre, M. Dousse",
    authorIds: ["epeyraud", "jjacques", "gmetzler", "ifaivre", "mdousse"],
    venue: "hal-04745787, 2024",
    links: [
      { label: "Preprint", href: "https://hal.science/hal-04745787/document" },
    ]
  },

  // --- Thèses et mémoires  ---
  {
    id: "these-metzler-2019", group: "group-theses", year: 2019, month: 9,
    title: "Learning from Imbalanced Data: An Application to Bank Fraud Detection (thèse de doctorat)",
    authors: "G. Metzler",
    authorIds: ["gmetzler"],
    venue: "Université Jean Monnet, Université de Lyon, Saint-Étienne, septembre 2019",
    links: [
      { label: "Manuscrit", href: "articles/2019/manuscrit.pdf" },
      { label: "Slides", href: "articles/2019/slides.pdf" }
    ]
  },
  {
    id: "memoire-metzler-2015", group: "group-theses", year: 2015, month: 9,
    title: "Étude de la variabilité de la réponse immunitaire T CD8 à l'aide de modèles à effets mixtes (mémoire de master)",
    authors: "G. Metzler",
    authorIds: ["gmetzler"],
    venue: "Université Claude Bernard, Université de Lyon, Lyon, septembre 2015",
    links: [
      { label: "Mémoire", href: "articles/2015/memoire.pdf" },
      { label: "Slides", href: "articles/2015/slides.pdf" }
    ]
  }
];

// lib/data.js
// Centralized content data for Prof. Dr. Sandeep Kumar Panigrahi

export const doctorProfile = {
  name: "Prof. Dr. Sandeep Kumar Panigrahi",
  shortName: "Dr. Sandeep Kumar Panigrahi",
  designation: "Physician • Professor • Public Health Professional • Researcher",
  eyebrow: "ACADEMIC MEDICINE • PUBLIC HEALTH • DIABETES CARE",
  credentialsText: "MBBS • MD (Community Medicine) • Fellowship in Diabetes (UK)",
  summary:
    "Physician, professor and public-health professional working across clinical medicine, preventive healthcare, diabetes, community health and medical research.",
  location: "Bhubaneswar, Odisha",
  availability: "Available for In-person & Online Consultations",
  currentAffiliation:
    "Professor, Department of Community Medicine, IMS & SUM Hospital, Siksha 'O' Anusandhan (SOA) Deemed to be University, Bhubaneswar, Odisha",
  quote: "Advancing health through evidence, prevention and people.",
  signature: "S. K. Panigrahi",
  aboutHeading:
    "A commitment to better health, stronger communities and evidence-based medicine.",
  aboutParagraph:
    "Dr. Sandeep Kumar Panigrahi is a physician, academic and public-health professional whose work spans community medicine, preventive healthcare, diabetes, epidemiology, health services research, medical education and public health programmes. He is currently associated with IMS & SUM Hospital, Siksha 'O' Anusandhan (SOA) University, Bhubaneswar, contributing to academic medicine, research and community health initiatives.",
  bioDetailed: [
    "Prof. Dr. Sandeep Kumar Panigrahi is a physician, medical educator, and public health specialist with over 18 years of clinical, academic, and epidemiological experience. Having completed his MBBS from Veer Surendra Sai Medical College and Hospital followed by an MD in Community Medicine from SCB Medical College, Cuttack, he subsequently completed a specialized Fellowship in Diabetes from the United Kingdom.",
    "His professional journey encompasses frontline community medicine, national and international public health programme monitoring with UNICEF, academic medical faculty appointments at premier institutions including AIIMS Bhubaneswar, and his long-standing professorship at IMS & SUM Hospital, Siksha 'O' Anusandhan (SOA) University.",
    "Dr. Panigrahi's clinical and academic focus centers on early disease prevention, evidence-based lifestyle interventions for type 2 diabetes, cardiovascular risk reduction, and the application of digital health/mobile technology to improve patient compliance and chronic disease outcomes. As an active researcher with over 47 peer-reviewed publications and over 200 citations, he regularly mentors undergraduate and postgraduate medical scholars.",
  ],
  images: {
    heroDoctor: "/images/hero_doctor_executive.jpg",
    aboutDoctor: "/images/about_doctor_hd.jpg",
    portraitHD: "/images/hero_doctor_hd.jpg",
    appointmentDoctor: "/images/appointment_doctor_hd.jpg",
    portraitLanyard: "/images/doctor_portrait_lanyard.jpg",
    portraitRedShirt: "/images/doctor_portrait_hd.jpg",
    mediaSpeaking: "/images/media_speaking.png",
    podcastCover: "/images/podcast_cover.png",
  },
};

export const credentialItems = [
  {
    iconName: "Stethoscope",
    title: "MBBS",
    subtitle: "Medical Qualification",
  },
  {
    iconName: "GraduationCap",
    title: "MD",
    subtitle: "Community Medicine",
  },
  {
    iconName: "Award",
    title: "Fellowship",
    subtitle: "Diabetes • UK",
  },
  {
    iconName: "Building2",
    title: "Professor",
    subtitle: "Academic Medicine",
  },
  {
    iconName: "FileText",
    title: "47+",
    subtitle: "Research Publications",
  },
];

export const focusAreas = [
  {
    title: "Academic Medicine",
    desc: "Teaching, training and mentoring future healthcare professionals.",
  },
  {
    title: "Public Health Programmes",
    desc: "Community health and quality improvement initiatives.",
  },
  {
    title: "Medical Research",
    desc: "Evidence-based healthcare and real-world impact.",
  },
  {
    title: "Diabetes & Lifestyle Health",
    desc: "Preventive care and lifestyle interventions.",
  },
  {
    title: "Medical Education",
    desc: "Building the next generation of healthcare professionals.",
  },
];

export const timeline = [
  {
    period: "1999–2000",
    institution: "Khallikote Junior College",
    field: "Science",
    details:
      "Higher secondary education in science, laying foundational biology and chemistry principles for medical entrance.",
    image: "/images/journey_institute_khallikote.jpg",
  },
  {
    period: "2001–2007",
    institution: "Veer Surendra Sai Medical College & Hospital",
    field: "Medicine",
    details:
      "Undergraduate medical qualification (MBBS) with comprehensive clinical rotations, foundational surgery, medicine, and community postings.",
    image: "/images/journey_institute_vss.jpg",
  },
  {
    period: "2008–2011",
    institution: "SCB Medical College & Hospital",
    field: "Postgraduate Medical Education",
    details:
      "Doctor of Medicine (MD) in Community Medicine, epidemiological field investigations, biostatistics, and public health systems analysis.",
    image: "/images/journey_institute_scb.jpg",
  },
  {
    period: "2013–2014",
    institution: "UNICEF",
    field: "Public Health Assurance / Public Health Programmes",
    details:
      "Health programmes specialist focusing on child survival, maternal health, routine immunization quality assurance, and district monitoring.",
    image: "/images/journey_institute_unicef.jpg",
  },
  {
    period: "2014–2015",
    institution: "AIIMS Bhubaneswar",
    field: "Medical Doctor",
    details:
      "Senior residency and academic physician responsibilities, community-based outpatient services, clinical teaching, and institutional research.",
    image: "/images/journey_institute_aiims.jpg",
  },
  {
    period: "Present",
    institution: "IMS & SUM Hospital, SOA University",
    field: "Academic Medicine • Community Medicine • Research",
    details:
      "Professor in the Department of Community Medicine. Leading academic lectures, diabetes prevention clinics, postgraduate dissertation guidance, and community field projects.",
    image: "/images/journey_institute_sum.jpg",
  },
];

export const areasOfExpertise = [
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare",
    category: "Prevention & Screening",
    description:
      "Health promotion, disease prevention and early intervention across diverse population cohorts.",
    detailedDescription:
      "Emphasizing preemptive risk factor screening, primordial prevention, cardiovascular risk scoring, and evidence-guided wellness strategies to detect and deter chronic illnesses prior to irreversible clinical complications.",
    image: "/images/expertise_hd_preventive.jpg",
  },
  {
    id: "diabetes-lifestyle",
    title: "Diabetes & Lifestyle Health",
    category: "Metabolic Health",
    description:
      "Diabetes, physical activity, medication adherence and lifestyle modification.",
    detailedDescription:
      "Specialized clinical management of prediabetes and type 2 diabetes with evidence-based nutrition counseling, aerobic and resistance physical activity protocols, behavioral coaching, and adherence monitoring.",
    image: "/images/expertise_hd_diabetes.jpg",
  },
  {
    id: "community-medicine",
    title: "Community Medicine",
    category: "Population Health",
    description:
      "Population health and community-level healthcare delivery models.",
    detailedDescription:
      "Bridging the clinic and community by conducting comprehensive community needs assessments, localized outbreak investigations, primary healthcare center support, and public outreach drives.",
    image: "/images/expertise_hd_community.jpg",
  },
  {
    id: "public-health",
    title: "Public Health",
    category: "Health Systems",
    description:
      "Health programmes, quality improvement and strengthening health systems.",
    detailedDescription:
      "Designing, monitoring, and evaluating national and state health programmes, quality metrics in public hospitals, and capacity-building frameworks for primary healthcare workers.",
    image: "/images/expertise_hd_publichealth.jpg",
  },
  {
    id: "medical-research",
    title: "Medical Research",
    category: "Evidence & Trials",
    description:
      "Clinical, epidemiological and health-services research.",
    detailedDescription:
      "Rigorous qualitative and quantitative health research methodology, randomized controlled trials, cohort studies, and systematic evaluations informing clinical guidelines and public policy.",
    image: "/images/expertise_hd_research.jpg",
  },
  {
    id: "digital-health",
    title: "Digital Health",
    category: "Technology in Health",
    description:
      "Technology-enabled interventions and mobile health research.",
    detailedDescription:
      "Investigating the practical utility of mobile applications, SMS triggers, wearable trackers, and telemedicine platforms to elevate patient self-management and clinic follow-up rates.",
    image: "/images/expertise_hd_digitalhealth.jpg",
  },
];

export const researchStatistics = {
  publicationsCount: "47+",
  citationsCount: "200+",
  hIndex: "10+",
  yearsExperience: "18+",
};

export const researchThemes = [
  "Diabetes and lifestyle intervention",
  "Public health and community health",
  "Health services research",
  "Digital health and mobile health",
  "Nutrition and physical activity",
  "Epidemiology and preventive medicine",
];

export const publications = [
  {
    id: "pub-1",
    title:
      "Effectiveness of Mobile Application for Promotion of Physical Activity Among Newly Diagnosed Patients of Type II Diabetes",
    journal: "International Journal of Preventive Medicine",
    year: 2022,
    authors: "Panigrahi SK, et al.",
    category: "Digital Health",
    categoryType: "digital-health",
    featured: true,
    doi: "10.4103/ijpvm.IJPVM_321_21",
    abstract:
      "A randomized controlled intervention evaluating mobile health software reminders and digital activity tracking on glycemic biomarkers and daily step counts among newly diagnosed adults with type 2 diabetes.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-2",
    title:
      "Effectiveness of Mobile Application for Adherence to Advice on Diet and Medication Among Newly Diagnosed Patients of Type II Diabetes",
    journal: "National Journal of Community Medicine",
    year: 2021,
    authors: "Panigrahi SK, et al.",
    category: "Diabetes",
    categoryType: "diabetes",
    featured: true,
    doi: "10.5455/njcm.2021.05.21",
    abstract:
      "Investigated the compliance rate of prescribed pharmacotherapy and medical nutrition therapy when reinforced by automated smartphone prompts versus standard paper advice in an urban cohort.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-3",
    title:
      "Prevalence, Patterns, and Predictors of Physical Inactivity in an Urban Population of India",
    journal: "Journal of Family Medicine and Primary Care",
    year: 2018,
    authors: "Panigrahi SK, et al.",
    category: "Lifestyle",
    categoryType: "lifestyle",
    featured: true,
    doi: "10.4103/jfmpc.jfmpc_241_17",
    abstract:
      "Cross-sectional epidemiological investigation analyzing sedentary behavior patterns across age, gender, and socioeconomic strata in eastern Indian urban clusters using validated IPAQ tools.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-4",
    title:
      "Prevalence, Patterns, and Predictors of Yoga Practice Among Adults in an Urban Population in Eastern India",
    journal: "Journal of Family Medicine and Primary Care",
    year: 2016,
    authors: "Panigrahi SK, et al.",
    category: "Public Health",
    categoryType: "public-health",
    featured: true,
    doi: "10.4103/2249-4863.197321",
    abstract:
      "Assessed community-level adoption of mind-body physical modalities and traditional yoga practices, determining significant associations with lower self-reported stress and improved metabolic indicators.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-5",
    title:
      "Assessment of Primary Healthcare Infrastructure and Service Availability in Urban Health Centers of Odisha",
    journal: "Indian Journal of Public Health",
    year: 2020,
    authors: "Panigrahi SK, Tripathy RM, et al.",
    category: "Public Health",
    categoryType: "public-health",
    featured: false,
    doi: "10.4103/ijph.IJPH_189_19",
    abstract:
      "A facility survey assessing cold-chain maintenance, essential diagnostics availability, and human resources deployment across urban health centers under the National Urban Health Mission.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-6",
    title:
      "Barriers to Glycemic Control and Self-Care Behaviors Among Rural Diabetics in Eastern India",
    journal: "Journal of Clinical and Diagnostic Research",
    year: 2019,
    authors: "Panigrahi SK, Mishra P, et al.",
    category: "Diabetes",
    categoryType: "diabetes",
    featured: false,
    doi: "10.7860/JCDR/2019/39201.12781",
    abstract:
      "Identified sociocultural determinants, supply chain interruptions in insulin/oral hypoglycemics, and financial constraints hindering regular blood glucose self-monitoring.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-7",
    title:
      "Epidemiology of Hypertension and Cardiovascular Risk Factors Among Commercial Vehicle Drivers",
    journal: "International Journal of Occupational Medicine and Environmental Health",
    year: 2017,
    authors: "Panigrahi SK, et al.",
    category: "Preventive Medicine",
    categoryType: "preventive",
    featured: false,
    doi: "10.13075/ijomeh.1896.00942",
    abstract:
      "Occupational health survey measuring high rates of undiagnosed stage 1 & 2 hypertension, irregular sleep cycles, and tobacco consumption among long-haul transport workers.",
    link: "https://scholar.google.com",
  },
  {
    id: "pub-8",
    title:
      "Evaluating Mobile Phone Messaging on Immunization Drop-out Rates: A Community Controlled Trial",
    journal: "Bulletin of World Health Research",
    year: 2023,
    authors: "Panigrahi SK, et al.",
    category: "Digital Health",
    categoryType: "digital-health",
    featured: false,
    doi: "10.2471/BLT.22.289110",
    abstract:
      "Examined reminder-recall automated SMS and voice broadcasts delivered to mothers of infants to safeguard complete pentavalent and measles immunization coverage.",
    link: "https://scholar.google.com",
  },
];

export const articles = [
  {
    id: "understanding-type-2-diabetes-early-signs-prevention",
    title: "Understanding Type 2 Diabetes: Early Signs and Prevention",
    category: "Diabetes",
    readTime: "5 min read",
    date: "12 Jan 2024",
    image: "/images/article_diabetes.png",
    excerpt:
      "A clinical overview of subtle early symptoms, insulin resistance markers, and evidence-based lifestyle changes that prevent or delay disease onset.",
    content: [
      "Type 2 diabetes mellitus rarely manifests overnight. In the vast majority of patients, it develops silently through a prolonged window termed impaired glucose tolerance or prediabetes. During this timeframe, while fasting or postprandial glucose levels remain marginally elevated, vascular and metabolic strain is already taking place.",
      "Recognizing subtle early signs—such as post-meal lethargy, darkening skin folds (acanthosis nigricans), gradual weight gain around the visceral waistline, and recurrent mild infections—enables prompt intervention before beta-cell exhaustion occurs.",
      "The clinical evidence for prevention is unambiguous: structured lifestyle interventions comprising 150 minutes of weekly moderate aerobic activity paired with balanced glycemic load dietary patterns reduce diabetes transition risk by over 58%—surpassing pharmacologic monotherapy.",
    ],
  },
  {
    id: "role-of-physical-activity-in-better-health",
    title: "The Role of Physical Activity in Better Health",
    category: "Lifestyle",
    readTime: "6 min read",
    date: "8 Jan 2024",
    image: "/images/article_physical_activity.png",
    excerpt:
      "How consistent aerobic and resistance training modulates glucose metabolism, cardiovascular fitness, and overall longevity.",
    content: [
      "Sedentary behavior has emerged as one of the most prominent independent drivers of non-communicable diseases worldwide. The human musculoskeletal and endocrine systems require frequent contraction and metabolic throughput to maintain insulin sensitivity and endothelial health.",
      "Research indicates that breaking prolonged bouts of sitting with as little as 3 minutes of light movement every 30 minutes enhances glucose clearance. Combining aerobic exercises like brisk walking with two sessions of weekly resistance exercise stimulates GLUT-4 transporter translocation independently of insulin.",
      "Beyond metabolic improvements, physical movement lowers resting heart rate, reduces systemic low-grade inflammation, and bolsters cognitive clarity and mood regulation through endorphin and neurotrophic factor release.",
    ],
  },
  {
    id: "community-health-why-it-matters",
    title: "Community Health and Why It Matters",
    category: "Public Health",
    readTime: "7 min read",
    date: "3 Jan 2024",
    image: "/images/article_community.png",
    excerpt:
      "Why health begins long before a hospital consultation—in homes, neighborhoods, work environments, and public spaces.",
    content: [
      "Traditional medical systems often focus predominantly on tertiary rescue care: treating patients when pathology has already taken hold. Community medicine fundamentally shifts the lens upstream.",
      "By assessing the social, environmental, and behavioral determinants of health—clean drinking water, safe public spaces for exercise, maternal nutrition, and accessible neighborhood clinics—we address root vulnerabilities that hospital beds alone can never resolve.",
      "When communities are empowered with health literacy, peer support groups, and proactive screening camps, population-level health outcomes improve drastically while healthcare expenditure decreases.",
    ],
  },
  {
    id: "mhealth-digital-tools-chronic-disease",
    title: "mHealth: How Digital Tools Support Chronic Care",
    category: "Digital Health",
    readTime: "6 min read",
    date: "24 Feb 2024",
    image: "/images/expertise_digitalhealth.png",
    excerpt:
      "Examining the transformative potential of mobile health apps, remote monitoring, and automated reminders in patient compliance.",
    content: [
      "Adherence to long-term medication and dietary regimens in chronic illnesses like diabetes and hypertension is notoriously challenging for patients once they exit the consultation room.",
      "Our research studies on mobile health applications demonstrate that simple, patient-centered digital nudges—timely pill reminders, daily step tracking, and visual feedback on glycemic patterns—lead to statistically significant improvements in both medication adherence and HbA1c control.",
      "The key to scalable mHealth in India lies in designing intuitive, localized user interfaces that function seamlessly across varied digital literacy levels.",
    ],
  },
];

export const podcastData = {
  title: "The Health Conversation",
  description:
    "Conversations about health, prevention, lifestyle and the science behind better healthcare decisions.",
  coverImage: "/images/podcast_cover.png",
  youtubeConfig: {
    channelName: "Prof. Dr. Sandeep Kumar Panigrahi",
    channelHandle: "@DrSandeepKumarPanigrahi",
    channelUrl: "https://youtube.com",
    playlistId: "PL_HealthConversation_Episodes",
    autoSyncNote: "Automatically synced via YouTube Channel RSS / Data API",
  },
  latestEpisode: {
    id: "ep-01",
    number: "Episode 01",
    title: "Why Prevention Matters in Everyday Life",
    duration: "32:15",
    youtubeId: "LXb3EKWsInQ", // Reference YouTube Video ID
    youtubeUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnailUrl: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    description:
      "In this inaugural episode, Dr. Sandeep Kumar Panigrahi discusses why modern medicine must embrace prevention, the everyday lifestyle choices that protect metabolic health, and how families can build health-supportive daily routines.",
    date: "10 Feb 2024",
    views: "1.8K views",
  },
  archiveEpisodes: [
    {
      id: "ep-02",
      number: "Episode 02",
      title: "Decoding Diabetes: Diet, Activity and Sustainable Changes",
      duration: "28:40",
      youtubeId: "yAoLSRbwxL8",
      youtubeUrl: "https://www.youtube.com/watch?v=yAoLSRbwxL8",
      thumbnailUrl: "https://img.youtube.com/vi/yAoLSRbwxL8/hqdefault.jpg",
      date: "24 Feb 2024",
      views: "2.4K views",
      description:
        "Practical guidance on navigating a newly diagnosed type 2 diabetes condition, understanding carbohydrate counting, and staying physically active.",
    },
    {
      id: "ep-03",
      number: "Episode 03",
      title: "Community Medicine: From Field Observations to National Policy",
      duration: "35:10",
      youtubeId: "5qap5aO4i9A",
      youtubeUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      thumbnailUrl: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      date: "10 Mar 2024",
      views: "1.2K views",
      description:
        "Stories and data from public health field programmes, rural clinics, and what it takes to strengthen primary healthcare systems.",
    },
    {
      id: "ep-04",
      number: "Episode 04",
      title: "Digital Health and the Future of Patient Self-Management",
      duration: "30:22",
      youtubeId: "7T7r_oSp0SE",
      youtubeUrl: "https://www.youtube.com/watch?v=7T7r_oSp0SE",
      thumbnailUrl: "https://img.youtube.com/vi/7T7r_oSp0SE/hqdefault.jpg",
      date: "25 Mar 2024",
      views: "3.1K views",
      description:
        "How smartphone apps, teleconsultations, and wearable technologies are redefining how doctors and patients collaborate.",
    },
  ],
  platforms: [
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Spotify", url: "https://spotify.com" },
    { name: "Apple Podcasts", url: "https://podcasts.apple.com" },
  ],
};

export const mediaItems = [
  {
    id: "media-1",
    title: "Public Health in the 21st Century",
    type: "Guest Lecture",
    date: "15 Mar 2024",
    location: "National Health Conclave, New Delhi",
    image: "/images/media_speaking.png",
    featured: true,
    description:
      "Keynote presentation on transitioning public healthcare delivery towards proactive chronic disease prevention and digital monitoring.",
  },
  {
    id: "media-2",
    title: "Innovations in Community-Based Diabetes Care",
    type: "Conference Presentation",
    date: "18 Jan 2024",
    location: "Annual Conference of Community Medicine Specialists",
    image: "/images/expertise_diabetes.png",
    featured: false,
    description:
      "Presenting clinical trial findings regarding mobile application interventions on diabetic patient compliance in eastern India.",
  },
  {
    id: "media-3",
    title: "Strengthening Primary Healthcare & Rural Health Systems",
    type: "Panel Discussion",
    date: "04 Nov 2023",
    location: "State Healthcare Policy Forum, Bhubaneswar",
    image: "/images/expertise_publichealth.png",
    featured: false,
    description:
      "Expert panelist addressing primary healthcare infrastructure, frontline workforce training, and public funding allocation.",
  },
  {
    id: "media-4",
    title: "Lifestyle Medicine and Cardiovascular Disease Risk",
    type: "Webinar",
    date: "22 Sep 2023",
    location: "Online Academic Lecture Series",
    image: "/images/expertise_preventive.png",
    featured: false,
    description:
      "Clinical discussion on evidence-based lifestyle modifications to mitigate dyslipidemia and atherosclerotic vascular disease.",
  },
];

export const academicLinks = [
  {
    name: "Google Scholar",
    label: "View Publications →",
    url: "https://scholar.google.com",
    badge: "G",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    name: "ResearchGate",
    label: "View Profile →",
    url: "https://www.researchgate.net",
    badge: "RG",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    name: "Web of Science",
    label: "View Author Record →",
    url: "https://www.webofscience.com",
    badge: "WoS",
    color: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    name: "LinkedIn",
    label: "View Profile →",
    url: "https://www.linkedin.com",
    badge: "in",
    color: "text-sky-700 bg-sky-50 border-sky-200",
  },
];

export const consultationOptions = [
  {
    type: "in-person",
    title: "In-Person Consultation",
    subtitle: "At IMS & SUM Hospital, Bhubaneswar",
    description:
      "Thorough physical clinical evaluation, detailed diagnostic review, vitals, metabolic screening, and personalized prescription.",
    timing: "Mon - Sat: 9:00 AM – 2:00 PM",
    suitableFor:
      "New patients, comprehensive metabolic workup, chronic condition reviews, diabetic foot/nerve checkups.",
  },
  {
    type: "online",
    title: "Online Video Consultation",
    subtitle: "Secure Telehealth Portal",
    description:
      "Virtual face-to-face consultation, blood report analysis, lifestyle counseling, medication adjustment, and digital e-prescription.",
    timing: "Mon - Sat: 4:30 PM – 7:00 PM",
    suitableFor:
      "Outstation patients, follow-up evaluations, lifestyle & diet adjustments, lab result interpretation.",
  },
  {
    type: "follow-up",
    title: "Follow-Up Consultation",
    subtitle: "In-Person or Digital",
    description:
      "Reviewing treatment progress, HbA1c & lipid biomarker monitoring, medication titration, and ongoing lifestyle goal adjustments.",
    timing: "By prior scheduling",
    suitableFor: "Existing patients within 3 months of initial evaluation.",
  },
];

export const contactDetails = {
  cityState: "Bhubaneswar, Odisha",
  hospital: "IMS & SUM Hospital, SOA University",
  department: "Department of Community Medicine",
  address: "K-8 Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003",
  appointmentDesk: "+91 (0674) 238-6292",
  email: "dr.sandeep@academicphysician.in",
  whatsappNote: "Official consultation inquiries managed through clinical desk",
};

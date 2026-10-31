/* ==========================================================================
   content.js — the single place for repeating content.

   Edit this file to add publications, books, achievements, certificates
   and contact links. main.js reads it and builds the lists on every page,
   in both languages.

   HOW BILINGUAL FIELDS WORK
   Text fields look like:  { en: "English text", ar: "النص العربي" }
     - If one language is missing, set it to null. The page will show the
       other language and mark the entry "Translation needed".
     - Names and titles should never be machine-translated: leave the
       missing language as null until an approved translation exists.
   Plain strings (e.g. "2024") are shown as they are in both languages.

   IMAGE PATHS
   Write image paths from the website root, e.g. "images/books/my-book.webp".
   ========================================================================== */

window.SITE_CONTENT = {

  /* ------------------------------------------------------------------------
     Settings
     ------------------------------------------------------------------------ */
  settings: {
    // The research page shows search + filters only when there are at least
    // this many publications. With fewer, a simple list reads better.
    researchToolsMinItems: 6
  },


  /* ------------------------------------------------------------------------
     Research publications
     Fields (all optional except title):
       title     { en, ar }   publication title in each language
       year      "2024"       used for sorting and grouping
       venue     { en, ar }   journal or conference name
       authors   string or { en, ar }
       category  { en, ar }   research area; used by the filter buttons
       abstract  { en, ar }
       doi       "10.xxxx/xxxxx"  (only the DOI itself, not the full URL)
       url       link to the official publication record
       pdf       link or path to a PDF the professor is permitted to share
       translated "en" or "ar": that language's title is a translation, so only
                 readers of the translation also see the original title beneath it
       featured  true  → also shown on the homepage (keep it to 3–4)
     ------------------------------------------------------------------------ */
  publications: [
    {
      featured: true,
      translated: "en",
      title: { en: "The Impact of Administrative Planning on Institutional Performance: An Applied Study at Onaizah Colleges", ar: "أثر التخطيط الإداري على الأداء المؤسسي (دراسة تطبيقية على كليات عنيزة)" },
      category: { en: "Management", ar: "الإدارة" },
      year: "2026",
      venue: { en: "Journal of Technology in Humanities and Administrative Sciences, Vol. 4, Issue 8, May 2026", ar: "مجلة تكنولوجيا العلوم الإنسانية والإدارية، المجلد الرابع، العدد الثامن، مايو 2026" }
    },
    {
      featured: true,
      translated: "en",
      title: { en: "The Impact of E-Marketing on Saudi Consumer Behaviour: A Case Study of the Community of Onaizah Governorate", ar: "أثر التسويق الإلكتروني على سلوك المستهلك السعودي (دراسة حالة مجتمع محافظة عنيزة)" },
      category: { en: "Marketing", ar: "التسويق" },
      year: "2025",
      venue: { en: "Journal of Technology in Humanities and Administrative Sciences, Vol. 2, Issue 3, February 2025", ar: "مجلة تكنولوجيا العلوم الإنسانية والإدارية، المجلد الثاني، العدد الثالث، فبراير 2025" },
      url: "https://journals.ekb.eg/article_419726.html"
    },
    {
      featured: true,
      title: { en: "The Impact of Green Innovation Orientation on Enhancing the Competitive Advantage of Private Universities: A Perspective from Graduates of Onaizah Colleges, Saudi Arabia", ar: "أثر التوجه نحو الابتكار الأخضر في تعزيز الميزة التنافسية للجامعات الخاصة: من وجهة نظر خريجي كليات عنيزة، المملكة العربية السعودية" },
      category: { en: "Management", ar: "الإدارة" },
      year: "2024",
      venue: { en: "Journal of North African Economies, Vol. 20, Issue 2, pp. 219–242, June 2024", ar: "مجلة اقتصاديات شمال أفريقيا، المجلد 20، العدد 2، ص 219–242، يونيو 2024" },
      authors: "Moussa Mahmoud, Kamel Zuheir",
      url: "https://asjp.cerist.dz/en/article/246341"
    },
    {
      translated: "ar",
      title: { en: "The Role of Internal Audit in Evaluating the Performance Effectiveness in Saudi Arabia's Private Educational Institutions (A Case Study of Onaizh Colleges)", ar: "دور المراجعة الداخلية في تقييم فاعلية الأداء في المؤسسات التعليمية الأهلية بالمملكة العربية السعودية (دراسة حالة كليات عنيزة)" },
      category: { en: "Accounting and Auditing", ar: "المحاسبة والمراجعة" },
      year: "2023",
      venue: { en: "International Journal of Accounting and Financial Management Research and Development (IJAFMRD), Vol. 1, Issue 1, pp. 8–24", ar: "المجلة الدولية لبحوث وتطوير المحاسبة والإدارة المالية (IJAFMRD)، المجلد 1، العدد 1، ص 8–24" },
      authors: "Abu Obida Taha Gbreel Ali, Zohair Mohamed Kamel Dahkoul",
      doi: "10.17605/OSF.IO/2F4XH",
      url: "https://iaeme.com/Home/article_id/IJAFMRD_01_01_002"
    },
    {
      translated: "en",
      title: { en: "Factors Affecting Organisational Loyalty in Non-Profit Organisations in Onaizah Governorate", ar: "العوامل المؤثرة على الولاء التنظيمي لدى المنظمات غير الربحية في محافظة عنيزة" },
      category: { en: "Human Resources", ar: "الموارد البشرية" },
      year: "2022"
    },
    {
      translated: "en",
      title: { en: "The Economic and Social Effects of Economic Liberalisation during the COVID-19 Pandemic", ar: "الآثار الاقتصادية والاجتماعية للتحرير الاقتصادي في ظل جائحة كورونا" },
      category: { en: "Economics", ar: "الاقتصاد" },
      year: "2022",
      venue: { en: "Economic conference, Jordan", ar: "مؤتمر اقتصادي، الأردن" }
    },
    {
      translated: "en",
      title: { en: "The Concept, Objectives and Tools of Economic Liberalisation Policy", ar: "مفهوم وأهداف وأدوات سياسة التحرير الاقتصادي" },
      category: { en: "Economics", ar: "الاقتصاد" },
      year: "2018",
      venue: { en: "Ministry of Justice Journal, Issue 53", ar: "مجلة وزارة العدل، العدد 53" },
      url: "https://search.mandumah.com/Record/1239576"
    },
    {
      translated: "en",
      title: { en: "The Role of Employee Performance in Jordanian Business Organisations", ar: "دور أداء الموظفين في منظمات الأعمال الأردنية" },
      category: { en: "Human Resources", ar: "الموارد البشرية" },
      year: "2018",
      venue: { en: "Journal of Economics, Finance and Accounting, Issue 7", ar: "المجلة البريطانية Journal of Economics, Finance and Accounting، العدد السابع" }
    },
    {
      translated: "en",
      title: { en: "The Economics of Health Services and Their Impact on Economic Growth in Sudan", ar: "اقتصاديات الخدمة الصحية وأثرها على النمو الاقتصادي في السودان" },
      category: { en: "Economics", ar: "الاقتصاد" },
      year: "2018",
      venue: { en: "Forthcoming", ar: "تحت النشر" }
    },
    {
      translated: "en",
      title: { en: "Evaluating the Ethics of Operational Administrative Decisions in Jordanian Industrial Companies", ar: "تقييم أخلاقيات القرار الإداري التشغيلي في الشركات الصناعية الأردنية" },
      category: { en: "Management", ar: "الإدارة" },
      year: "2017",
      venue: { en: "Journal of Commercial Research, Part 1, Zagazig University, Egypt", ar: "مجلة البحوث التجارية، الجزء الأول، جامعة الزقازيق، مصر" }
    },
    {
      translated: "en",
      title: { en: "Management Information Systems and Their Impact on Decision-Making", ar: "نظم المعلومات الإدارية وأثرها على اتخاذ القرارات" },
      category: { en: "Management", ar: "الإدارة" },
      year: "2016",
      venue: { en: "Al-Adl Journal, Issue 47, p. 113", ar: "مجلة العدل، العدد السابع والأربعون، ص 113" }
    },
    {
      translated: "en",
      title: { en: "Job Stress in a Telecommunications Company", ar: "الإجهاد الوظيفي لدى شركة الاتصالات" },
      category: { en: "Human Resources", ar: "الموارد البشرية" },
      year: "2015",
      venue: { en: "Journal of Administrative Sciences, Issue 8, p. 115", ar: "مجلة العلوم الإدارية، العدد الثامن، ص 115" }
    },
    {
      translated: "en",
      title: { en: "The Impact of Work Stress", ar: "أثر ضغوط العمل" },
      category: { en: "Human Resources", ar: "الموارد البشرية" },
      year: "2011",
      venue: { en: "Journal of Administrative Sciences, University of Aden, Issue 6", ar: "مجلة العلوم الإدارية، جامعة عدن، العدد السادس" }
    },
    {
      translated: "en",
      title: { en: "Responsibility Accounting in Yemeni Companies", ar: "محاسبة المسؤولية في الشركات اليمنية" },
      category: { en: "Accounting and Auditing", ar: "المحاسبة والمراجعة" },
      year: "2010",
      venue: { en: "Journal of Administrative Sciences, University of Aden, Issue 3, p. 119", ar: "مجلة العلوم الإدارية، جامعة عدن، العدد الثالث، ص 119" }
    },
    {
      title: { en: "The Impact of Performance Evaluation on Employee Performance, Moderating Role of Organizational Standards", ar: "أثر تقييم الأداء على أداء الموظفين" },
      category: { en: "Human Resources", ar: "الموارد البشرية" },
      venue: { en: "Issue 5", ar: "العدد الخامس" }
    },
    {
      translated: "en",
      title: { en: "The Role of Ready-Made Accounting Software in Reducing Internal Audit Risks", ar: "دور البرامج المحاسبية الجاهزة في الحد من مخاطر المراجعة الداخلية" },
      category: { en: "Accounting and Auditing", ar: "المحاسبة والمراجعة" },
      venue: { en: "Journal of Administrative Sciences, Zagazig University", ar: "مجلة العلوم الإدارية، جامعة الزقازيق" },
      url: "https://zcom.journals.ekb.eg/article_285314.html"
    },
    {
      translated: "en",
      title: { en: "Management by Objectives", ar: "الإدارة بالأهداف" },
      category: { en: "Management", ar: "الإدارة" },
      venue: { en: "Journal of Administrative Sciences, University of Aden", ar: "مجلة العلوم الإدارية، جامعة عدن" }
    }
  ],


  /* ------------------------------------------------------------------------
     Books
     Fields:
       title, publisher, language, description   { en, ar }
       year         "2024"
       cover        image path from the site root (keep the original ratio)
       coverWidth / coverHeight   the image's real pixel size (prevents layout jumps)
       coverAlt     { en, ar }  describe the cover for screen-reader users
       url          publisher or purchase page (only if supplied)
       featured     true → shown on the homepage (three looks best)
     ------------------------------------------------------------------------ */
  books: [
    {
      featured: true,
      title: { en: "Fundamentals of Purchasing and Warehousing", ar: "أساسيات المشتريات والمخازن" },
      year: "2019",
      publisher: { en: "Dar Al-Nashr Al-Dawli (International Publishing House), Riyadh", ar: "دار النشر الدولي، الرياض" },
      cover: "images/books/purchasing-and-warehousing.jpg",
      coverWidth: 424, coverHeight: 593,
      coverAlt: { en: "Cover of Fundamentals of Purchasing and Warehousing", ar: "غلاف كتاب أساسيات المشتريات والمخازن" }
    }
  ],


  /* ------------------------------------------------------------------------
     Achievements: shown on the "Professional Development" page.
     Fields: title, issuer, description { en, ar }, year, featured
     Currently lists training programmes attended; the CV names no awards.
     ------------------------------------------------------------------------ */
  achievements: [
    {
      title: { en: "Seminar: The Role of Islamic Banks in the Economy", ar: "ندوة علمية: دور البنوك الإسلامية في الاقتصاد" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2018"
    },
    {
      title: { en: "Seminar: Islamic Banking and Islamic Economics: Concepts, Relationship and Reality", ar: "ندوة المصرفية الإسلامية والاقتصاد الإسلامي: المفاهيم والعلاقة والواقع" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2018"
    },
    {
      title: { en: "Seminar: Islamic Banking and Islamic Economics", ar: "ندوة المصرفية الإسلامية والاقتصاد الإسلامي" },
      issuer: { en: "Scientific Society for Islamic Banking", ar: "الجمعية العلمية للمصرفية الإسلامية" },
      year: "2017/2018"
    },
    {
      title: { en: "Building and Teaching Online Courses (Basic Level)", ar: "بناء وتدريس المقررات الإلكترونية (المستوى الأساسي)" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2016",
      description: { en: "4 training hours", ar: "4 ساعات تدريبية" }
    },
    {
      title: { en: "Electronic Exams and Their Use in E-Learning", ar: "الاختبارات الإلكترونية وتوظيفها في التعليم الإلكتروني" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2016",
      description: { en: "4 training hours", ar: "4 ساعات تدريبية" }
    },
    {
      title: { en: "Managing Virtual Classrooms", ar: "إدارة الفصول الافتراضية" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2016",
      description: { en: "4 training hours", ar: "4 ساعات تدريبية" }
    },
    {
      title: { en: "E-Learning and Using Blackboard in Teaching, in Line with University Education Quality Standards", ar: "التعليم الإلكتروني وتوظيف البلاك بورد في العملية التعليمية وفق معايير جودة التعليم الجامعي" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2015",
      description: { en: "10 training hours", ar: "10 ساعات تدريبية" }
    },
    {
      title: { en: "Training of Trainers (TOT)", ar: "إعداد المدربين (TOT)" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2014",
      description: { en: "30 training hours", ar: "30 ساعة تدريبية" }
    },
    {
      title: { en: "Learning Outcomes", ar: "نواتج التعلم" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2014",
      description: { en: "15 training hours", ar: "15 ساعة تدريبية" }
    },
    {
      title: { en: "Quality Assurance System", ar: "نظام توكيد الجودة" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2013",
      description: { en: "10 training hours", ar: "10 ساعات تدريبية" }
    },
    {
      title: { en: "Programme Quality Assurance System", ar: "نظام توكيد الجودة البرامجية" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2013",
      description: { en: "10 training hours", ar: "10 ساعات تدريبية" }
    },
    {
      title: { en: "Establishing Quality Systems", ar: "تأسيس أنظمة الجودة" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2012",
      description: { en: "10 training hours", ar: "10 ساعات تدريبية" }
    },
    {
      title: { en: "Workshop: Royal Decrees in the Labour and Housing Sectors: Visions and Mechanisms", ar: "ورشة عمل: القرارات الملكية في قطاعي العمل والإسكان: الرؤى والآليات" },
      issuer: { en: "Qassim University", ar: "جامعة القصيم" },
      year: "2012"
    }
  ],


  /* ------------------------------------------------------------------------
     Certificates (shown as images that open in an accessible lightbox)
     Before adding a scan, cover or crop any private details
     (ID numbers, signatures, home address, date of birth).
     Fields: title, issuer { en, ar }, year, image, width, height, alt { en, ar }
     ------------------------------------------------------------------------ */
  certificates: [],


  /* ------------------------------------------------------------------------
     Contact
     Only publish details the professor has approved for public use.
       email   "name@university.edu"  → becomes a mailto: link. null = placeholder.
       phone   number in international format → becomes a tel: link; display is the text shown.
       links   each { label, url, icon }. icon is optional: a name from ICONS in js/main.js.
               url: null shows a "to be added" placeholder row;
               delete the entry entirely if that profile does not exist.
     ------------------------------------------------------------------------ */
  contact: {
    email: "Zohairkamel1965@gmail.com",
    phone: { number: "+966508174155", display: "+966 50 817 4155" },
    links: [
      { icon: "orcid", label: { en: "ORCID", ar: "ORCID" }, url: "https://orcid.org/0000-0002-7671-8364" }
    ]
  }
};

import { FaBalanceScale, FaGavel, FaLandmark } from "react-icons/fa";
import {
  MdOutlineRealEstateAgent,
  MdOutlineMoney,
  MdAccountBalance,
} from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";

export const navItems = [
  { name: "About LAWCHECK", href: "/#" },
  { name: "Contact Us", href: "/#" },
  { name: "FAQ", href: "/#" },
];

export const OnboardingTexts = {
  heading: "Seasoned attorneys are prepared to assist you.",
  headingTwo:
    "Providing expert guidance through legal challenges with care, understanding, and compassion.",
  subHeading:
    "Our lawyers are passionate, dedicated, and adaptable, ready to meet your needs.",
  subHeadingTwo:
    "We are dedicated to delivering effective legal representation with empathy, understanding, and unwavering commitment to our clients.",
};

export const AboutUsText = {
  companyName: 'Law Check',
  title: "About Us",
  heading:
    "Lawcheck is a comprehensive, multi-service law firm driven by a team of dynamic, intelligent, and forward-thinking professionals. We operate with a well-defined quality management system to ensure excellence and reliability in every service we provide.",
  firstSection: {
    title: "Why Choose Law Check",
    points: [
      {
        value: 95,
        text: "Our dedication and expertise enable our law firm to consistently deliver exceptional efficiency.",
      },
      {
        value: 90,
        text: "We take pride in fostering strong client relationships, ensuring satisfaction and trust at every step.",
      },
      {
        value: 85,
        text: "Through innovative strategies and attention to detail, we achieve reliable and impactful outcomes for our clients.",
      },
    ],
  },
  secondSection: {
    title: "Our Expertise",
    subHeading:
      "Our team specializes in diverse areas of law, including corporate, property, employment, and technology law.",
    points: [
      { icon: <FaBalanceScale />, text: "Corporate Law" },
      { icon: <FaGavel />, text: "Criminal Defense" },
      { icon: <MdOutlineRealEstateAgent />, text: "Property Law" },
      { icon: <BsShieldCheck />, text: "Employment Law" },
      { icon: <FaLandmark />, text: "Intellectual Property" },
      { icon: <MdOutlineMoney />, text: "Financial Litigation" },
      { icon: <GiFamilyHouse />, text: "Family Law" },
      { icon: <MdAccountBalance />, text: "Bankruptcy & Insolvency" },
    ],
  },
};


export const FAQ = {
  heading: "Frequently Asked Questions",
  abbrev: "FAQ",
  text: "Have questions about our legal services, areas of expertise, or how to get started with Lawcheck? Explore our Frequently Asked Questions below for detailed insights. If you need further assistance, feel free to contact us directly!",
  faqData: [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does Lawcheck provide?",
          answer:
            "We specialize in various areas of law, including Corporate Law, Criminal Defense, Property Law, Employment Law, Intellectual Property, Financial Litigation, Family Law, and Bankruptcy & Insolvency.",
        },
        {
          question: "Why should I choose Lawcheck?",
          answer:
            "Lawcheck combines exceptional efficiency, client satisfaction, and innovative strategies to deliver reliable and impactful outcomes. We pride ourselves on maintaining a 95% efficiency rate, 90% client satisfaction, and 85% success in achieving results.",
        },
        {
          question: "Are your attorneys experienced?",
          answer:
            "Yes! Our seasoned attorneys are passionate, dedicated, and adaptable, ready to meet your legal needs with a forward-thinking approach.",
        },
        {
          question: "How can I contact Lawcheck for assistance?",
          answer:
            "You can contact us by visiting the 'Contact Us' section on our website or reaching out via email or phone. Our dedicated team is always ready to assist.",
        },
        {
          question: "Can I schedule a consultation with an attorney?",
          answer:
            "Absolutely! Simply fill out the contact form on our website or call us directly to schedule a consultation. Our team will guide you through the process.",
        },
      ],
    },
    {
      category: "Corporate Law",
      questions: [
        {
          question: "What is Corporate Law, and how can you assist?",
          answer:
            "Corporate Law deals with the formation, operation, and compliance of businesses. Our team provides legal guidance on contracts, mergers, acquisitions, and other corporate matters.",
        },
        {
          question: "Do you offer legal advice for startups?",
          answer:
            "Yes, we specialize in helping startups navigate legal complexities, including business registration, partnership agreements, and intellectual property protection.",
        },
      ],
    },
    {
      category: "Property Law",
      questions: [
        {
          question: "Can you assist with real estate disputes?",
          answer:
            "Absolutely. Our Property Law experts handle real estate transactions, disputes, and landlord-tenant matters with attention to detail and professionalism.",
        },
        {
          question: "Do you offer services for property purchase agreements?",
          answer:
            "Yes, we provide legal advice and draft agreements to ensure your property purchases are secure and legally compliant.",
        },
      ],
    },
    {
      category: "Employment Law",
      questions: [
        {
          question: "What Employment Law services do you provide?",
          answer:
            "We provide assistance with workplace disputes, employment contracts, wrongful termination claims, and compliance with labor laws.",
        },
        {
          question: "Can you help with creating employee contracts?",
          answer:
            "Yes, we draft comprehensive employee contracts that comply with labor laws and protect the interests of both employers and employees.",
        },
      ],
    },
    {
      category: "Family Law",
      questions: [
        {
          question: "What Family Law services do you offer?",
          answer:
            "Our Family Law team handles divorce proceedings, child custody cases, prenuptial agreements, and more with care and sensitivity.",
        },
        {
          question: "Can you assist with child custody cases?",
          answer:
            "Yes, we work diligently to resolve child custody cases, focusing on the best interests of the child and ensuring fair outcomes.",
        },
      ],
    },
    {
      category: "Criminal Defense",
      questions: [
        {
          question: "Do you handle criminal defense cases?",
          answer:
            "Yes, we provide expert criminal defense services, representing clients in cases ranging from misdemeanors to serious felony charges.",
        },
        {
          question: "What is your approach to criminal cases?",
          answer:
            "We thoroughly investigate each case, build a strong defense strategy, and advocate passionately to ensure the best possible outcome for our clients.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "Are my personal details secure with Lawcheck?",
          answer:
            "Yes, we adhere to strict confidentiality and data protection practices to ensure your personal information remains secure.",
        },
        {
          question: "Are your services compliant with legal regulations?",
          answer:
            "Absolutely. We comply with all applicable legal regulations and maintain the highest ethical standards in our practice.",
        },
      ],
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing depends on the complexity of your case and the legal services required. Contact us for a personalized quote.",
        },
        {
          question: "Do you offer a free consultation?",
          answer:
            "Yes, we offer free initial consultations for most legal matters to understand your needs and discuss how we can assist.",
        },
        {
          question: "What support do you provide during legal proceedings?",
          answer:
            "We provide comprehensive support, including case strategy, legal representation, and consistent communication throughout your legal proceedings.",
        },
      ],
    },
    {
      category: "Contact & Assistance",
      questions: [
        {
          question: "How can I contact your team?",
          answer:
            "You can reach us via email at support@lawcheck.com, call us at (123) 456-7890, or use the contact form on our website.",
        },
        {
          question: "Do you offer assistance outside of office hours?",
          answer:
            "Yes, our team is available to assist with urgent legal matters outside of regular office hours. Contact us for more details.",
        },
        {
          question: "Where is Lawcheck located?",
          answer:
            "Our offices are located at [Insert Address]. We also serve clients virtually to accommodate their needs.",
        },
      ],
    },
  ],
};

export const Testimonials = [
  {
    name: "Jane R., Business Owner",
    feedback:
      "Lawcheck saved my company from a major financial dispute. Their Corporate Law team is efficient, reliable, and truly cares about their clients. I couldn’t be happier with the results!",
  },
  {
    name: "Michael T., Software Developer",
    feedback:
      "When I needed assistance with Intellectual Property matters, Lawcheck delivered exceptional service. Their expertise and professionalism gave me peace of mind throughout the process.",
  },
  {
    name: "Sarah M., Homeowner",
    feedback:
      "The Property Law team at Lawcheck helped me resolve a complex real estate issue with ease. Their attention to detail and commitment to excellence is unmatched.",
  },
  {
    name: "David L., HR Manager",
    feedback:
      "I worked with Lawcheck on an employment law case, and they exceeded all my expectations. Their ability to combine legal expertise with a personal touch is remarkable!",
  },
  {
    name: "Emily K., Entrepreneur",
    feedback:
      "Lawcheck’s team was instrumental in helping me navigate a bankruptcy case. They provided clear guidance and unwavering support during a challenging time.",
  },
];


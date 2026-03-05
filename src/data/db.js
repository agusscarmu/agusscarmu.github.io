import { FaJava, FaPython, FaJs, FaReact, FaDatabase, FaDocker, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSpringboot, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiMysql, SiPostgresql } from 'react-icons/si';

export const personalInfo = {
    name: "Agustin Carmusciano",
    titles: ["Medical Doctor", "Software Developer"],
    tagline: "Bridging the gap between Clinical Medicine and Advanced Technology.",
    bio: "Specializing in HealthTech optimization and currently pursuing a PhD in Atrial Fibrillation prediction using single-lead ECG analysis.",
    social: [
        { name: "GitHub", url: "https://github.com/agusscarmu", icon: FaGithub },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/agustin-carmusciano-a63005221/", icon: FaLinkedin },
        { name: "Email", url: "mailto:agustincarmu99@gmail.com", icon: FaEnvelope }
    ]
};

export const skills = [
    {
        category: "Core Languages",
        items: [
            { name: "Java", icon: FaJava, color: "#e76f00" },
            { name: "Python", icon: FaPython, color: "#3776ab" },
            { name: "JavaScript", icon: FaJs, color: "#f7df1e" }
        ]
    },
    {
        category: "Frontend & Backend",
        items: [
            { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
            { name: "React", icon: FaReact, color: "#61dafb" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
        ]
    },
    {
        category: "Data Science & AI",
        items: [
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
            { name: "Scikit-Learn", icon: SiScikitlearn, color: "#f7931e" },
            { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" }
        ]
    }
];

export const projects = [
    {
        title: "DeepMed Vision",
        description: "DeepMed Vision V2 is a medical imaging application for healthcare professionals that transforms DICOM studies into interactive 3D models, enabling advanced visualization and diagnostic analysis.",
        tags: ["Python", "PyDicom", "React"],
        github: "#",
        demo: null
    }
];

export const research = {
    futureResearch: {
        title: "Future PhD Research Focus: Atrial Fibrillation Prediction",
        description: "Exploring the application of deep learning algorithms to predict the onset of Atrial Fibrillation using single-lead ECGs. This future research aims to contribute to early detection methodologies using wearable technology.",
        tags: ['Signal Processing', 'Deep Learning', 'Cardiology', 'Time-Series Analysis']
    },
    collaborations: [
        {
            title: "Cardiovascular Risk in People Living with the Human Immunodeficiency Virus and Risk Estimators in Clinical Practice",
            authors: "Dra. Marina Grand, Agustín Carmusciano, Rocío Mella Araya, Antonella Cordillo, Prof. Dr. Alejandro Díaz",
            role: "Data Collection & Analysis",
            journal: "Cardiology/Infectious Diseases Study",
            year: "2024",
            description: "Analysis of cardiovascular risk factors in patients living with HIV, comparing effectiveness of different risk estimators (D:A:D, Framingham) vs general population models. Focused on metabolic comorbidities and ART impact.",
            link: "https://drive.google.com/file/d/1JlCXzy7ln2qN-4sjjfamBS_Wu6oG1nwM/view"
        }
    ],
    congresses: [
        {
            name: "IV Congreso A.P.S.",
            role: "Attendee",
            date: "Oct 2025",
            location: "Olavarria, Buenos Aires, Argentina"
        },
        {
            name: "CAIS 2025 - Congreso Argentino de Informatica y Salud",
            role: "Speaker",
            date: "Aug 2025",
            location: "Remote"
        },
        {
            name: "SADI 2025 - Sociedad Argentina de Infectología",
            role: "Attendee",
            date: "Jun 2025",
            location: "Mar del Plata, Buenos Aires, Argentina"
        },
        {
            name: "XIV Congreso Argentino de Bioinformatica y Biologia Computacional",
            role: "Attendee",
            date: "Nov 2024",
            location: "La Plata, Buenos Aires, Argentina"
        }
    ]
};

export const courses = [
    {
        name: "Health Data Science",
        institution: "UNCPBA",
        date: "Nov 2025",
        description: "Specialized training in applying data science methodologies to healthcare datasets."
    },
    {
        name: "SNOMED CT Fundamentals",
        institution: "SNOMED International",
        date: "Oct 2025",
        description: "Core principles of Simple Clinical Terminology (SNOMED CT) and interoperability standards."
    },
    {
        name: "Advanced Bioinformatics",
        institution: "UBA",
        date: "Nov 2024",
        description: "Advanced computational methods for biological data analysis."
    },
    {
        name: "Data & Cybersecurity",
        institution: "Coursera",
        date: "Aug 2024",
        description: "Network security, cyber defense, and cybersecurity principles."
    },
    {
        name: "Clinical Genomics",
        institution: "UBA",
        date: "Jun 2024",
        description: "Study of genomic data application in clinical settings and personalized medicine."
    },
    {
        name: "Fundamentals of Data Science in Precision Medicine",
        institution: "Stanford University School of Medicine",
        date: "Mar 2024",
        description: "Data Science, Statistics, Bioinformatics, Medical Imaging, and Health IT applications."
    },
    {
        name: "Fundamentals of IA/ML in Precision Medicine",
        institution: "Stanford University School of Medicine",
        date: "Mar 2024",
        description: "Deep Learning, CNNs, and Machine Learning applications in healthcare."
    },
    {
        name: "Python for Data Science",
        institution: "IBM",
        date: "Nov 2023",
        description: "Data Science fundamentals using Python."
    },
    {
        name: "Bioinformatics for Beginners",
        institution: "Coursera",
        date: "Feb 2023",
        description: "Biology Meets Programming: Introduction to bioinformatics algorithms."
    }
];

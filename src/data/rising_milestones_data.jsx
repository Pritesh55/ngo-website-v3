import { BarChart3, Users, Heart, Activity, Stethoscope, Lightbulb, Home, Shield } from 'lucide-react'

export const rising_Milestones_sections = [
    {
        id: 0,
        slug: "Employment-generation",
        title_name: 'Employment generation',
        description: 'Empowering individuals through specialized training, liaison, and placement support to facilitate employment and start-up ventures.',
        icon: BarChart3,
        iconBgColor: 'bg-teal-100',
        iconTextColor: 'text-teal-700',
        heading_text_color: 'text-teal-900',
        description_text_color: 'text-teal-800',
        borderColor: 'border-teal-200',
        bgColorGradient: "from-teal-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Implemented Projects:",
        initiatives: [
            'Entrepreneurship development program under PMEGP scheme',
            'Saksham kvk 2.0',
            'PMKVY',
            'Training under Scheme - 6',
            'Integrated Skill Development Scheme (ISDS)',
            'Ambedkar Hastshilp Vikas Yojana (AHVY)',
        ],
        activity_images: [
            '/images/our-projects/Saksham-KVK-2/WhatsApp%20Image%202026-06-08%20at%202.54.38%20PM%20(1).jpeg',
            '/images/our-projects/Development-Commissioner-Handicrafts/20180807_163734.jpg',
            '/images/our-projects/Training-under-scheme-06/Training-under-scheme-06-02.jpg',
            '/images/G05-Skill-Traiing-Programs/img8.jpg',
            '/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13482.JPG',
            '/images/our-projects/Development-Commissioner-Handicrafts/20180807_163138.jpg'

        ]
    },
    {
        id: 1,
        slug: "women-empowerment",
        title_name: 'Women Empowerment',
        description: 'The program\'s main objective is to upskill women in order to support them in becoming financially independent and raising their dignity in the process.',
        icon: Users,
        iconBgColor: 'bg-teal-100',
        iconTextColor: 'text-teal-700',
        heading_text_color: 'text-teal-900',
        description_text_color: 'text-teal-800',
        borderColor: 'border-teal-200',
        bgColorGradient: "from-teal-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Initiated Projects:",
        initiatives: [
            'SWA-SHAKTI',
            'Women Livelihood Restoration Project (WLRP)',
            'NORAD Project',
            'Workshops in rural Gujarat on women rights, societal issues and assistance',
            'Establishing common facility centers for women',
            'Skill development courses for women',
        ],
        activity_images: [
            // '/images/Woman-Empowernment/02---pdf_20230112_160443_-046.jpg',
            // '/images/Woman-Empowernment/02---pdf_20230112_160443_-047.jpg',
            // '/images/Woman-Empowernment/02---pdf_20230112_160443_-048.jpg',
            // '/images/Woman-Empowernment/02---pdf_20230112_160443_-049.jpg',
            // '/images/Woman-Empowernment/02---pdf_20230112_160443_-050.jpg',
            'https://web.archive.org/web/20170318125543im_/http://mktngo.org/gallery/gl-5.jpg',

            'https://web.archive.org/web/20170318003745im_/http://mktngo.org/gallery/gallery%20-4.jpg',

            'https://web.archive.org/web/20170318070731im_/http://mktngo.org/gallery/gl-3.jpg',

            'https://web.archive.org/web/20170318060135im_/http://mktngo.org/gallery/gl-2.jpg',

            'https://web.archive.org/web/20170318065153im_/http://mktngo.org/gallery/gallery.jpg',

            '/images/Woman-Empowernment/02---pdf_20230112_160443_-051.jpg',
        ]
    },

    {
        id: 2,
        slug: "socio-economic-development-activities",
        title_name: 'Socio-Economic Development Activities',
        description: 'Give someone the right employment opportunities if you want to empower them. Another crucial factor to think about is financial inclusion.',
        icon: BarChart3,
        iconBgColor: 'bg-green-100',
        iconTextColor: 'text-green-700',
        heading_text_color: 'text-green-900',
        description_text_color: 'text-green-800',
        borderColor: 'border-green-200',
        bgColorGradient: "from-green-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Initiated Programs:",
        bottom_description: "Through comprehensive entrepreneurship programs, MKT has fostered economic independence across rural and urban areas, enabling individuals to establish sustainable enterprises that generate employment and contribute to broader economic development.",
        initiatives: [
            'Entrepreneurship Development Programme',
            'Group Enterpreneur Development Programme',
            'Techno Rural Entrepreneur Development Programme',
            'Rural Employment Generating Programme',
            'Prime minister\'s Employment Generating Programme',
        ],
        activity_images: [
            '/images/socio-economic-development-activities/02---pdf_20230112_160443_-052.jpg',
            '/images/socio-economic-development-activities/02---pdf_20230112_160443_-053.jpg',
            '/images/socio-economic-development-activities/02---pdf_20230112_160443_-054.jpg',
            '/images/socio-economic-development-activities/02---pdf_20230112_160443_-055.jpg',
            // '/images/socio-economic-development-activities/02---pdf_20230112_160443_-056.jpg',
            'https://web.archive.org/web/20170318005732im_/http://mktngo.org/gallery/gl-6.jpg',
            '/images/socio-economic-development-activities/02---pdf_20230112_160443_-057.jpg',
        ]
    },

    {
        id: 3,
        slug: "community-health-programme",
        title_name: 'Community Health Programme',
        description: 'The main aim of the health programme is to target the under-privileged families who lack the financial means to seek medical attention.',
        icon: Heart,
        iconBgColor: 'bg-blue-100',
        iconTextColor: 'text-blue-700',
        heading_text_color: 'text-blue-900',
        description_text_color: 'text-blue-800',
        borderColor: 'border-blue-200',
        bgColorGradient: "from-blue-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Initiated Projects:",
        bottom_description: "Through comprehensive health initiatives, MKT ensures that medical care reaches those most in need, particularly in rural areas where access to healthcare is limited. Our programs focus on preventive care, awareness, and treatment for vulnerable populations.",
        projects: [
            { name: 'NACP Project/AIDS Prevention (Tejaswini Saptah)', icon: Activity },
            { name: 'Rural Health Camps', icon: Stethoscope },
            { name: 'Eye Care Camps', icon: Heart },
        ],
        activity_images: [
            '/images/Community-health-Programs/02---pdf_20230112_160443_-059.jpg',
            '/images/Community-health-Programs/02---pdf_20230112_160443_-060.jpg',
            'https://web.archive.org/web/20170318125558im_/http://mktngo.org/gallery/gl-14.jpg',
            '/images/Community-health-Programs/02---pdf_20230112_160443_-062.jpg',
        ]
    },

    {
        id: 4,
        slug: "science-innovation",
        title_name: 'Science & Innovation',
        description: 'Aimed at students/Youth to explore global Technology world for innovation and advancement in science and technology.',
        icon: Lightbulb,
        iconBgColor: 'bg-purple-100',
        iconTextColor: 'text-purple-700',
        heading_text_color: 'text-purple-900',
        description_text_color: 'text-purple-800',
        borderColor: 'border-purple-200',
        bgColorGradient: "from-purple-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Initiated Projects:",
        bottom_description: "By fostering scientific curiosity and technological awareness among youth, MKT bridges the gap between classroom learning and real-world innovation. Our programs inspire the next generation of scientists, engineers, and problem-solvers.",
        projects: [
            'Information & Technology Awareness Project',
            'Vigyan Jatha Activity',
            'Disaster Management',
            'Vermi Composed Training',
        ],
        activity_images: [
            'https://web.archive.org/web/20170318073615im_/http://mktngo.org/gallery/gallery%20-11.jpg',
            'https://web.archive.org/web/20170318020629im_/http://mktngo.org/gallery/gl-16.jpg',
            'https://web.archive.org/web/20170318070747im_/http://mktngo.org/gallery/gallery%20-%2041.jpg',
            'https://web.archive.org/web/20170318073657im_/http://mktngo.org/gallery/gl-15.jpg',
        ]
    },

    {
        id: 5,
        slug: "salt-workers-welfare",
        title_name: 'Welfare Activities for Salt Workers',
        description: 'Special welfare activities are required to uplift the economic conditions of salt workers and ensure their dignity and safety.',
        icon: Shield,
        iconBgColor: 'bg-cyan-100',
        iconTextColor: 'text-cyan-700',
        heading_text_color: 'text-cyan-900',
        description_text_color: 'text-cyan-800',
        borderColor: 'border-cyan-200',
        bgColorGradient: "from-cyan-50 to-slate-50",
        projects_heading: "Manav Kalyan Trust Initiated Projects:",
        bottom_description: "Salt workers, often among the most marginalized communities, require focused support for livelihood improvement, housing security, and workplace safety. MKT's comprehensive welfare programs address these critical needs through housing schemes and awareness initiatives.",
        projects: [
            {
                name: 'Namak Maidoor Awas Yojna',
                description: 'Housing scheme for salt Workers',
                icon: Home,
            },
            {
                name: 'Awareness Camps',
                description: 'Safety Measures of Salt Workers',
                icon: Shield,
            },
            {
                name: 'Community Support',
                description: 'Welfare and livelihood assistance',
                icon: Users,
            },
        ],
        activity_images: [
            '/images/salt-workers/02---pdf_20230112_160443_-067.jpg',
            '/images/salt-workers/02---pdf_20230112_160443_-068.jpg',
            '/images/salt-workers/02---pdf_20230112_160443_-069.jpg',
            '/images/salt-workers/02---pdf_20230112_160443_-070.jpg',
        ]
    }
];

export const Employment_generation_activity_data = rising_Milestones_sections.find(s => s.slug === "Employment-generation");
export const Women_Empowerment_activity_data = rising_Milestones_sections.find(s => s.slug === "women-empowerment");
export const Socio_Economic_activity_data = rising_Milestones_sections.find(s => s.slug === "socio-economic-development-activities");
export const Community_Health_activity_data = rising_Milestones_sections.find(s => s.slug === "community-health-programme");
export const Science_Innovation_activity_data = rising_Milestones_sections.find(s => s.slug === "science-innovation");
export const Salt_Workers_Welfare_activity_data = rising_Milestones_sections.find(s => s.slug === "salt-workers-welfare");
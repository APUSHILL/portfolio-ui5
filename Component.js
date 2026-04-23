sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("portfolio.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            
            // Set portfolio data model
            var oPortfolioData = {
                personal: {
                    name: "Arpan Kumar Shill",
                    title: "Software Engineer & Full Stack Developer",
                    subtitle: "B.Tech. Computer Science and Engineering | SAP Labs Scholar",
                    phone: "+91-8159975522",
                    email: "arpanshill2019@gmail.com",
                    github: "https://github.com/arpanshill",
                    linkedin: "https://linkedin.com/in/arpanshill"
                },
                objective: "To work with maximum potential in dynamic and challenging environments, with an opportunity to work with diverse groups of people and enhance my professional skills with learning and experience for my career growth.",
                stats: [
                    { title: "CGPA", value: "9.3" },
                    { title: "Problems Solved", value: "300+" },
                    { title: "Years Experience", value: "2+" }
                ],
                education: [
                    {
                        degree: "B.Tech. Computer Science and Engineering",
                        institution: "Narula Institute of Technology, Kolkata",
                        period: "2021-2025",
                        grade: "CGPA: 9.3",
                        type: "Success"
                    },
                    {
                        degree: "Senior Secondary",
                        institution: "Midnapore Collegiate School, WBCHSE Board",
                        period: "2021",
                        grade: "Percentage: 91.4%",
                        type: "Information"
                    },
                    {
                        degree: "Secondary",
                        institution: "Patna Vivekananda Sikshaniketan, WBBSE Board",
                        period: "2019",
                        grade: "Percentage: 93.7%",
                        type: "Information"
                    }
                ],
                experience: {
                    position: "Scholar First Phase Rotation",
                    company: "SAP Labs, India",
                    period: "September 2025 - April 2026",
                    responsibilities: [
                        "Designed and implemented 'Login as Another User' functionality using JWT-based impersonation (iuid, ieid), enabling secure admin-level user context switching for support and testing.",
                        "Developed a reusable employee context resolution utility to dynamically determine effective user identity with fallback handling.",
                        "Implemented role-based access control logic for 'MY' filter to ensure secure and personalized data access.",
                        "Developed and executed JUnit test cases across core services in Relationship Manager and Sales Target Plan modules to ensure code reliability.",
                        "Conducted manual, regression, and end-to-end testing in Staging and Pre-Production environments, ensuring feature stability and release readiness.",
                        "Automated API validation using Newman, covering Sales Unit, Territory, Account, and Volume-based target planning workflows.",
                        "Diagnosed and resolved a critical defect related to Email/Calendar count inconsistency by redesigning cache mechanisms, introducing composite keys, and correcting data aggregation logic.",
                        "Enhanced Sync Monitoring Service by improving update mechanisms and ensuring accurate tracking of sync and processing counts."
                    ]
                },
                projects: [
                    {
                        title: "Movie Recommendation System",
                        period: "Jan - Feb 2024",
                        description: "Created a movie recommendation system using Python and machine learning techniques. It utilizes the Count Vectorizer to convert text data into a numerical format and calculates cosine similarity between movies. Based on their content tags, the system recommends the top 5 movies similar to a given movie.",
                        technologies: ["Python", "Machine Learning", "Count Vectorizer", "Cosine Similarity"],
                        github: "#"
                    },
                    {
                        title: "Detection of Phishing Websites using ML",
                        period: "May - July 2024",
                        description: "Developed and deployed a comprehensive machine learning model to classify phishing and legitimate websites, utilizing Python, Pandas, NumPy, Scikit-learn, and cloud services such as Streamlit. Responsibilities encompassed data collection, preprocessing, exploratory data analysis, model training, evaluation, and deployment for real-time detection.",
                        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
                        github: "#"
                    }
                ],
                skills: {
                    technical: ["Core Java", "Spring Boot", "Python", "SQL", "Docker", "Kubernetes", "AWS"],
                    tools: ["IntelliJ IDEA", "Git", "Jupyter Notebook", "Google Colab", "Claude", "GitHub Copilot"],
                    libraries: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
                    databases: ["MySQL"],
                    soft: ["Problem-Solving", "Self-learning", "Adaptability", "Time-Management"]
                },
                certifications: [
                    {
                        title: "Core Java",
                        provider: "Internshala",
                        description: "Core Java training from Internshala"
                    },
                    {
                        title: "Machine Learning",
                        provider: "Udemy",
                        description: "Completed Machine Learning course from Udemy"
                    },
                    {
                        title: "Python Programming",
                        provider: "Micro-Pro",
                        description: "Basic Python Programming from Micro-Pro"
                    }
                ],
                achievements: [
                    {
                        title: "Research Publication",
                        description: "Published a research paper: 'Innovative Technologies For Effective Teaching Strategies in 2022'"
                    },
                    {
                        title: "Problem Solving",
                        description: "Solved 300+ problems on various coding platforms like GeeksforGeeks, LeetCode, etc."
                    }
                ]
            };

            var oModel = new JSONModel(oPortfolioData);
            this.setModel(oModel, "portfolio");
        },

        createContent: function () {
            return sap.ui.view({
                viewName: "portfolio.view.App",
                type: sap.ui.core.mvc.ViewType.JS
            });
        }
    });
});
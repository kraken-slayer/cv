import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "James R. Gregg",
  initials: "JRG",
  location: "Phoenix, Arizona, USA",
  locationLink: "https://www.google.com/maps/place/Phoenix,+AZ/",
  about:
    "Experienced DevOps Architect with a passion for creating secure, scalable, and reliable software solutions. Bringing a strong proficiency in automation tools and scripting along with cloud infrastructure services (AWS, Azure, IBM) including a security-focused mindset and a commitment to quality.  Specializing in infrastructure automation, CI/CD (Cloudbees CI / Jenkins, GitHub Actions) and containerization technologies (Docker, Kubernetes) and delivering customer-first services that ensure both operational and cost efficiencies, along with security best practices.",
    // "20 year Intel career with a strong background in DevOps, Enterprise Architecture, IT Operations and Software Engineering. Specializing in implementing cloud infrastructure, pipeline automation, building scalable microservices, and real-time collaboration systems. Passionate about Secure Software Development Lifecycle (SDL) practices, and Developer Experience in support of building applications running at the Edge. Experienced in mentoring others, continuous learning and building strong skills and promoting opportunities for growth. Recognized for strong remote team leadership, capable of building highly successful teams.",
  summary: (
    <>
      DevOps Architect and Software Engineer specializing in automation and pipeline development. Experienced in technical architecture, secure software development, remote team
      leadership and cross-functional collaboration.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/12350797?s=400&u=3d09b3f5506b149d912bfa4b9aa012c5758e7bd5&v=4",
  personalWebsiteUrl: "https://jamesrgregg.github.io/cv/",
  contact: {
    email: "james.r.gregg@cox.net",
    tel: "+4807487888",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jamesrgregg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/james-gregg-a4418710/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jamesrgregg",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Arizona State University",
      degree: "Bachelor's Degree (BS)",
      start: "1989",
      end: "1992",
    },
  ],
  work: [
    {
      company: "Intel Corporation",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: ["Cloudbees CI", "Jenkins", "GitHub Actions", "AWS", "Azure"],
      title: "DevOps Architect",
      logo: ConsultlyLogo,
      start: "Apr 2024",
      end: "Sept 2024",
      description: (
        <>
          Leading DevOps pipeline development and technical architecture in support of software development teams across Intel.
          <ul className="list-inside list-disc">
            <li>
              Architecting build automation pipelines and establishing industry standards for improved software delivery, 
              performance, cost efficiency, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Intel Corporation",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: [
        "AWS",
        "Azure",
        "Wiz.io",
        "Telemetry",
        "Python",
        "GitHub",
        "Jira",
      ],
      title: "Infrastructure and DevOps Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Technical Lead, Scrum Master, Contributor, 1Source GitHub Migration Lead for the Internet of Things Group (IOTG).
          <ul className="list-inside list-disc">
            <li>
            Led a DevOps focused working group (Tools and Infrastructure) for DevOps teams related to topics related to
standardization of the tool chain used across all the projects which supported software development. Reduced
toolchain from 40 to 10 tools which resulted in reduced licensing / maintenance and technical debt.
            </li>
            <li>
              Implemented software engineering best practices: PR automation, code review
              guidelines, documentation and workflows
            </li>
            <li>
              Working group chair for the DevOps working group for the organization and technical lead representing the group
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Intel Corporation",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: [
        "AWS",
        "Azure",
        "Wiz.io",
        "Telemetry",
        "Python",
        "GitHub",
        "Jira",
      ],
      title: "Software Solutions Architect → Cloud Software Engineer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Cloud Software Engineer within Internet of Things Group / Retail Solutions Division. DevOps technical lead and cloud
          solutions architect responsible for multiple cloud accounts (AWS, Azure, IBM, Google).
          <ul className="list-inside list-disc">
            <li>
            Led DevOps team across multiple successful software development projects
            </li>
            <li>
            Led DevOps team across multiple successful software development projects
            </li>
            <li>
              Built and established a high performing DevOps Engineering team
              Recognized for establishing build automation, SDL practices and infrastructure
              Built pipelines in support of multiple successful software development projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Intel Corporation",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: ["Enterprise Architecture", "Portfolio Management"],
      title: "Enterprise Architect",
      logo: JojoMobileLogo,
      start: "2011",
      end: "2017",
      description: (
        <>
          Enterprise Architect responsible for the strategic and solution architecture supporting Intel Corporate Services
          application portfolio which encompassed a broad range of capabilities.
          <ul className="list-inside list-disc">
            <li>
            Designed and integrated Enterprise solutions, project review and governance of all Corporate Services
architecture. Drove architectural assessment of 3rd Party vendor solutions and challenged purchase of
software which didn’t meet business requirements - avoided multi-million dollar purchase.
            </li>
            <li>Played a key role in IT strategies related to emerging technologies, adoption and proliferation of
            service-oriented architecture, data management, business intelligence, and mobile application development.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Intel Corporation",
      link: "https://www.intel.com",
      badges: ["Business Objects", "Windows", "SQL", ".NET", "Agile", "FogBugz"],
      title: "Sr. Systems Analyst",
      logo: NSNLogo,
      start: "2004",
      end: "2011",
      description:
        "Owned applications and infrastructure supporting software development teams and projects which supported Corporate Services application portfolio.",
    },
  ],
  skills: [
    "Collaboration",
    "Communication",
    "Problem Solving",
    "Design Systems",
    "Cross-functional Team Leadership",
    "Agile Methodologies",
    "Requirements Analysis",
    "Technical Architecture",
    "Cost Optimization",
    "System Monitoring",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Gregg IT Consulting LLC",
      techStack: ["Web Design", "SEO", "Email Marketing"],
      description:
        "Web application development and managed cloud hosting for customers offering services and retail products",
      logo: MonitoLogo,
      link: {
        label: "barlonsalon.com",
        href: "http://barlonsalon.com/",
      },
    },
    {
      title: "Arena Si DevOps LLC",
      techStack: [
        "DevOps Consulting",
        "Training",
      ],
      description:
        "DevOps as a Service Consulting and Implementation for consultations with a focus on chip manufacturers and the semiconductor industry",
      logo: ConsultlyLogo,
      link: {
        label: "arenasidevops.com",
        href: "https://www.arenasidevops.com/",
      },
    },
    {
      title: "EdgeX Foundry",
      techStack: ["DevOps", "Docker", "Open Source", "Go", "Security, Software Development, IoT, Edge Computing"],
      description:
        "DevOps Working Group Chair for Linux Foundation - EdgeX Foundry Project",
      logo: MonitoLogo,
      link: {
        label: "EdgeX Foundry",
        href: "https://docs.edgexfoundry.org/1.2/",
      },
    },
  ],
} as const;

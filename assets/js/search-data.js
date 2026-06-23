// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-cover-art-associated-with-the-manuscript-deformation-of-nanoporous-carbons-induced-by-multicomponent-adsorption-insight-from-the-saft-dft-model-has-been-selected-as-a-front-cover-for-the-journal-of-physical-chemistry-c-see-cover",
          title: 'Our cover art associated with the manuscript, Deformation of Nanoporous Carbons Induced By...',
          description: "",
          section: "News",},{id: "news-njc-won-the-1st-place-best-poster-award-for-saft-dft-studies-of-nanoporous-carbon-deformation-induced-by-multicomponent-adsorption-presented-at-the-9th-characterization-of-porous-materials-conference",
          title: 'NJC won the 1st-place best poster award for “SAFT-DFT Studies of Nanoporous Carbon...',
          description: "",
          section: "News",},{id: "news-njc-appointed-as-a-full-time-teaching-instructor-in-the-department-of-chemical-and-biochemical-engineering-at-rutgers-university",
          title: 'NJC appointed as a full-time Teaching Instructor in the Department of Chemical and...',
          description: "",
          section: "News",},{id: "news-njc-successfully-defends-his-dissertation-titled-coupling-structural-adsorption-and-mechanical-properties-of-nanoporous-carbons-using-advanced-molecular-simulation-methods",
          title: 'NJC successfully defends his dissertation titled “Coupling Structural, Adsorption, and Mechanical Properties of...',
          description: "",
          section: "News",},{id: "news-njc-is-awarded-the-rutgers-university-engineering-governing-council-professor-of-the-year-award-for-the-third-year-in-a-row",
          title: 'NJC is awarded the Rutgers University Engineering Governing Council Professor of the Year...',
          description: "",
          section: "News",},{id: "news-njc-is-awarded-rutgers-university-cbe-gso-researcher-scholar-award-for-the-second-year-in-a-row",
          title: 'NJC is awarded Rutgers University CBE-GSO Researcher-Scholar Award for the second year in...',
          description: "",
          section: "News",},{id: "news-njc-presents-the-talk-from-model-pores-to-3d-structures-recent-advances-in-classical-density-functional-theory-for-adsorption-and-deformation-predictions-a-love-letter-to-classical-dft-at-the-15th-fundamentals-of-adsorption-conference",
          title: 'NJC presents the talk From Model Pores to 3D Structures: Recent Advances in...',
          description: "",
          section: "News",},{id: "news-njc-is-promoted-to-assistant-teaching-professor-in-the-department-of-chemical-and-biochemical-engineering-at-rutgers-university",
          title: 'NJC is promoted to Assistant Teaching Professor in the Department of Chemical and...',
          description: "",
          section: "News",},{id: "news-njc-is-awarded-the-graduate-student-research-award-for-adsorption-amp-amp-ion-exchange-by-the-separations-division-of-the-american-institute-of-chemical-engineers-at-the-aiche-annual-meeting",
          title: 'NJC is awarded the Graduate Student Research Award for Adsorption &amp;amp;amp; Ion Exchange...',
          description: "",
          section: "News",},{id: "news-njc-presents-the-talk-accelerated-prediction-of-adsorption-induced-deformation-in-nanoporous-carbons-using-classical-density-functional-theory-at-the-2025-aiche-annual-meeting",
          title: 'NJC presents the talk Accelerated Prediction of Adsorption-Induced Deformation in Nanoporous Carbons Using...',
          description: "",
          section: "News",},{id: "projects-3d-carbon-models-for-adsorption-characterization",
          title: '3D Carbon Models for Adsorption Characterization',
          description: "Developed 3D molecular models to predict adsorption of fluids and hydrocarbons on nanoporous carbons",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_3DCarbons/";
            },},{id: "projects-predicting-coal-deformation-during-gas-adsorption",
          title: 'Predicting Coal Deformation During Gas Adsorption',
          description: "Developed thermodynamic models to predict coal swelling during CO2-enhanced methane recovery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_coal_deformation/";
            },},{id: "projects-hybrid-mc-md-simulations-of-carbon-deformation",
          title: 'Hybrid MC/MD Simulations of Carbon Deformation',
          description: "Developed novel simulation approach combining Monte Carlo and Molecular Dynamics to predict how nanoporous carbons deform during gas adsorption",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_hybrid/";
            },},{id: "projects-saft-dft-modeling-of-deformation-during-binary-gas-adsorption",
          title: 'SAFT-DFT Modeling of Deformation During Binary Gas Adsorption',
          description: "Developed models integrating SAFT-DFT and GCMC simulations to predict carbon deformation during CO₂/CH₄ adsorption",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_saft_deformation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%63%68%6F%6C%61%73.%63%6F%72%72%65%6E%74%65@%72%75%74%67%65%72%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/njcorrente", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/njcorrente", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5765-1806", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=G7dbblQAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://cbe.rutgers.edu/people/nicholas-corrente", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/njcorrente", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

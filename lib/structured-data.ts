export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pedro Santos",
    jobTitle: "Software Engineer",
    description:
      "Software engineer shipping production React and Next.js by day, building Melro.io on the side. Open to full-time and contract work.",
    url: "https://pedrosantos.dev",
    sameAs: [
      "https://github.com/pedrocarlos-ti",
      "https://linkedin.com/in/pedro-santos",
      "https://x.com/pcgs_tsx",
    ],
    email: "pedrocarlos.ti@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belmonte",
      addressCountry: "PT",
    },
    worksFor: {
      "@type": "Organization",
      name: "Melro.io",
      url: "https://melro.io",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Developer Experience",
      "Software Engineering",
      "React Native",
      "Tauri",
      "Cross-platform Development",
      "Desktop Applications",
    ],
  };
}

export function generateWebSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "pedrosantos.dev",
    url: "https://pedrosantos.dev",
    description:
      "Software engineer shipping production React and Next.js by day, building Melro.io on the side. Open to full-time and contract work.",
    author: {
      "@type": "Person",
      name: "Pedro Santos",
    },
  };
}

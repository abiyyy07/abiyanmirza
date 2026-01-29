export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  tags: string[];
  type: string;
  description: string;
  detailLink: string;
  externalLink?: string;
  linkType?: 'drive' | 'web' | 'playstore';
  isPrivate?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "blog-afareza",
    title: "Afareza Studio Blog",
    image: "/projek/blog-afareza.png",
    type: "Web App",
    tags: ["Web App", "Next JS", "Company Blog"],
    description: "fareza Studio comes with a different perspective but a common goal. We present the Afareza Blog, aiming to share experiences, tutorials, tips and tricks on technology, programming, frameworks, and development progress.",
    detailLink: "/project/blog-afareza",
    linkType: 'web',
    externalLink: "https://blog.afarezastudio.com/",
  },
  {
    id: "invitya",
    title: "Invitya - Digital Invitation",
    image: "/projek/invitya.png",
    type: "Web App",
    tags: ["Web App", "Next JS", "Digital Invitation"],
    description: "An online platform that helps people easily create digital invitations for various events. You can customize existing themes to suit your event's structure. You can also manage guests and attendance features, as well as manage staff or committee members to help you manage guest attendance data.",
    detailLink: "/project/invitya",
    linkType: 'web',
    externalLink: "https://invitya.afarezastudio.com/",
  },
  {
    id: "afarezastudio",
    title: "Afareza Studio",
    image: "/projek/afarezastudio.png",
    type: "Web App",
    tags: ["Web App", "Next JS", "Company Profile"],
    description: "Afareza Studio is a creative tech based on Surabaya, dedicated to bridging the gap between complex visionary ideas and simple, functional digital realities. We don't just write code, we build digital innovations that provide easy solutions for the masses.",
    detailLink: "/project/afarezastudio",
    linkType: 'web',
    externalLink: "https://afarezastudio.com/",
  },
  {
    id: "rid",
    title: "Record and Identification",
    image: "/projek/rid.jpg",
    type: "Web App",
    tags: ["Web App", "Next JS", "Manage App"],
    description: "A website functionally for manage any record and license who used for Police Department RID SSRP.",
    detailLink: "/project/rid",
    isPrivate: true,
  },
  {
    id: "attauhid",
    title: "At-Tauhid Mosque",
    image: "/projek/attauhid.png",
    type: "Web App",
    tags: ["Web App", "Next JS", "Mosque/Social App"],
    description: "At-Tauhid Mosque is located in Pakal, West Surabaya. This website contains content and information about the mosque and religious events.",
    detailLink: "/project/attauhid",
    linkType: 'web',
    externalLink: "https://masjidattauhid.or.id/",
  },
  {
    id: "ammat",
    title: "AMMAT",
    image: "/projek/ammat.jpg",
    type: "Mobile App",
    tags: ["Mobile App", "Flutter", "Mosque/Social App"],
    description: "Mobile app who functionally manage mosque system like member, event, or any data who needed for digital.",
    detailLink: "/project/ammat",
    isPrivate: true,
  },
  {
    id: "afago",
    title: "Afago",
    image: "/projek/afago.jpg",
    type: "Mobile App",
    tags: ["Mobile App", "Flutter", "Rent App"],
    description: "Mobile app who functionally for easy rent vehicle with payment gateway (midtrans). Available two type of vehicle.",
    detailLink: "/project/afago",
    linkType: 'drive',
    externalLink: "https://drive.google.com/drive/folders/16PHZAcxSLc2cXdYQY6V1UJ-u_AsjiUHY?usp=drive_link",
  },
  {
    id: "bahasa-bridge",
    title: "Bahasa Bridge",
    image: "/projek/bb.jpg",
    type: "Mobile App",
    tags: ["Mobile App", "Flutter", "Education App"],
    description: "Mobile app platform for learning English using a fun quiz-based method. There are 5 types of quizzes.",
    detailLink: "/project/bahasa-bridge",
    linkType: 'drive',
    externalLink: "https://drive.google.com/drive/folders/1FO1fm-M3j6wJAOPTr6SrNSufJmLyIe2T?usp=drive_link",
  },
  {
    id: "afarush",
    title: "Afa Rush",
    image: "/projek/afarush.jpg",
    type: "Mobile App",
    tags: ["Mobile App", "Flutter", "Typing App"],
    description: "Typing competition app to improve typing speed. Includes solo mode, versus match, and a ranking system.",
    detailLink: "/project/afarush",
    linkType: 'drive',
    externalLink: "https://drive.google.com/drive/folders/1OiHnBpRHBTK7T2bnPCAJLdVZtBd5B1k-?usp=drive_link",
  },
  {
    id: "geofarezly",
    title: "GeoFarezly",
    image: "/projek/geofarezly.jpg",
    type: "Mobile App",
    tags: ["Mobile App", "Flutter", "Realtime Location"],
    description: "Location sharing app that allows you and your friends to see each others positions on a map.",
    detailLink: "/project/geofarezly",
    linkType: 'drive',
    externalLink: "https://drive.google.com/drive/folders/1FcLYCvseIDw2djrOyRTj48dtF22O3u_M?usp=drive_link",
  },
];
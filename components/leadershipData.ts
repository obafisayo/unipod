import { nanoid } from "nanoid";

const widths = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3040];
const make = (src: string) => widths.map((w) => ({ src, width: w }));

const leadershipData = [
    {
        id: nanoid(),
        imgsources: make('/assets/sheittima.jpeg'),
        src: '/assets/sheittima.jpeg',
        name: `His Excellency, Senator Kashim Shettima`,
        title: `Vice President, Federal Republic of Nigeria`,
        para1: `His Excellency, Senator Kashim Shettima is the Vice President of Nigeria and a strong advocate for digital transformation, artificial intelligence, and youth-led innovation.`,
        para2: `As a forward-thinking leader, Vice President Shettima has consistently championed initiatives that position Nigeria at the forefront of the Fourth Industrial Revolution, supporting the establishment of innovation hubs like the AI Unipod to harness the creative potential of Nigerian youth.`,
        para3: `A seasoned banker and former Governor of Borno State, he has a proven track record of prioritizing education, technology, and economic empowerment as catalysts for national development.`,
        para4: `His vision: a digitally empowered Nigeria where young innovators have the tools, skills, and institutional backing to build solutions that solve local challenges and compete on the global stage.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/sanwolu.jpeg'),
        src: '/assets/sanwolu.jpeg',
        name: `His Excellency, Babajide Sanwo-Olu`,
        title: `Executive Governor of Lagos State`,
        para1: `His Excellency, Babajide Sanwo-Olu is the Governor of Lagos State and a relentless champion for transforming Lagos into Africa's premier smart city and technology hub.`,
        para2: `Under his THEMES agenda, Governor Sanwo-Olu has heavily invested in broadband infrastructure, tech startup funding, and educational innovation, creating an enabling environment that allows transformative projects like the AI Unipod at UNILAG to thrive.`,
        para3: `With a background in banking, public service, and urban planning, he has consistently driven policies that foster public-private partnerships, digital skills development, and creative enterprise.`,
        para4: `His vision: to establish Lagos not just as the commercial nerve center of Nigeria, but as the technology and innovation capital of Africa.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/ogunsola.jpg'),
        src: '/assets/ogunsola.jpg',
        name: `Prof. Folasade T. Ogunsola`,
        title: `Vice-Chancellor, UNILAG (OON, FAS)`,
        para1: `Professor Folasade T. Ogunsola is the Vice-Chancellor of the University of Lagos and the executive champion of the AI Unipod.`,
        para2: `Professor Ogunsola championed the Unipod from the very first conversation, committing UNILAG as Nigeria's pioneer AI innovation university and securing the institutional backing that turned an idea into a fully-equipped hub.`,
        para3: `A globally respected medical microbiologist and academic leader, she has spent her career building world-class research capacity at the University of Lagos.`,
        para4: `Her vision: that a student in Akoka should have the same access to tools and opportunity as a student anywhere in the world.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/attafauh.jpg'),
        src: '/assets/attafauh.jpg',
        name: `Elsie G. Attafuah`,
        title: `Resident Representative, UNDP Nigeria`,
        para1: `Elsie G. Attafuah is the UNDP Resident Representative in Nigeria and a driving force behind the national Unipod programme.`,
        para2: `Ms. Attafuah has led UNDP Nigeria's partnership with UNILAG — signing the MOU and co-leading the national Unipod activation strategy that positions Nigeria as a continental leader in university-led innovation.`,
        para3: `She brings decades of development leadership focused on innovation, digital transformation and inclusive growth across Africa.`,
        para4: `Her work connects the Unipod to UNDP's pan-African network of innovation hubs and the timbuktoo initiative.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/yinka-banjo.jpg'),
        src: '/assets/yinka-banjo.jpg',
        name: `Prof. Chika Yinka-Banjo`,
        title: `Pioneer Director, AI Unipod`,
        para1: `Professor Chika Yinka-Banjo is the Pioneer Director of the AI Unipod at the University of Lagos.`,
        para2: `Head of Department and Professor/Researcher in the Department of Computer Sciences at UNILAG, she leads the hub's academic direction, mentorship programmes and research agenda in AI and robotics.`,
        para3: `Her research spans artificial intelligence, robotics and autonomous systems, with a focus on solutions built for African contexts.`,
        para4: `She works directly with student founders to take projects from proposal to working prototype to venture.`,
    },
];
export default leadershipData;

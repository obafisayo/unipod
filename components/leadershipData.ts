import { nanoid } from "nanoid";

const widths = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3040];
const make = (src: string) => widths.map((w) => ({ src, width: w }));

const leadershipData = [
    {
        id: nanoid(),
        imgsources: make('/assets/entrance-mural.jpg'),
        src: '/assets/entrance-mural.jpg',
        name: `Prof. Folasade T. Ogunsola`,
        title: `Vice-Chancellor, UNILAG (OON, FAS)`,
        para1: `Professor Folasade T. Ogunsola is the Vice-Chancellor of the University of Lagos and the executive champion of the AI Unipod.`,
        para2: `Professor Ogunsola championed the Unipod from the very first conversation, committing UNILAG as Nigeria's pioneer AI innovation university and securing the institutional backing that turned an idea into a fully-equipped hub.`,
        para3: `A globally respected medical microbiologist and academic leader, she has spent her career building world-class research capacity at the University of Lagos.`,
        para4: `Her vision: that a student in Akoka should have the same access to tools and opportunity as a student anywhere in the world.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/mezzanine.jpg'),
        src: '/assets/mezzanine.jpg',
        name: `Elsie G. Attafuah`,
        title: `Resident Representative, UNDP Nigeria`,
        para1: `Elsie G. Attafuah is the UNDP Resident Representative in Nigeria and a driving force behind the national Unipod programme.`,
        para2: `Ms. Attafuah has led UNDP Nigeria's partnership with UNILAG — signing the MOU and co-leading the national Unipod activation strategy that positions Nigeria as a continental leader in university-led innovation.`,
        para3: `She brings decades of development leadership focused on innovation, digital transformation and inclusive growth across Africa.`,
        para4: `Her work connects the Unipod to UNDP's pan-African network of innovation hubs and the timbuktoo initiative.`,
    },
    {
        id: nanoid(),
        imgsources: make('/assets/robotics-lab.jpg'),
        src: '/assets/robotics-lab.jpg',
        name: `Prof. Chika Yinka-Banjo`,
        title: `Pioneer Director, AI Unipod`,
        para1: `Professor Chika Yinka-Banjo is the Pioneer Director of the AI Unipod at the University of Lagos.`,
        para2: `Head of Department and Professor/Researcher in the Department of Computer Sciences at UNILAG, she leads the hub's academic direction, mentorship programmes and research agenda in AI and robotics.`,
        para3: `Her research spans artificial intelligence, robotics and autonomous systems, with a focus on solutions built for African contexts.`,
        para4: `She works directly with student founders to take projects from proposal to working prototype to venture.`,
    },
];
export default leadershipData;

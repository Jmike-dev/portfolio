import { ProjectModal } from "./index.modal";

export const projects: ProjectModal[] = [
    {
        image: './assets/images/recessEdTech.png',
        github: 'https://github.com/recesskenya',
        liveDemo: 'https://recess.co.ke/',
        discription:
            'At recess I assisted them build their website as well as verious application with in the eco-system. The recess tech team decided to use react vite build the app first and used firebase to manage the hosting.  ',
        title: 'Recess EdTech website',
    },
    {
        image: './assets/images/recipeProject.png',
        github: 'https://github.com/Jmike-dev/hidden_gems.git',
        liveDemo: 'https://food-website-2cb33.web.app/home',
        discription:
            'The app was build with Angular, deployed to Firebase and fetches data from the spooncular API.In this app you can easily search for a meal and their recipes.  ',
        title: 'Food Website',
    },
    {
        image: './assets/images/project2.png',
        github: 'https://github.com/Jmike-dev/qr-code-generator',
        liveDemo: 'https://qr-code-generator-flax.vercel.app/',
        discription:
            'The app was build using using Angular and hosted in Versel. quick and easy way to create a QR Code for website links as well as phone numbers.  ',
        title: 'QR Code Generator',
    },
];
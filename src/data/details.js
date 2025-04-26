import resume_builder from '../assets/image.jpg'

// storing some  dummy data to be placed as placeholder in input 
export const Details = {
    bio: {
        profile_image: resume_builder,
        first_name: "Anurag",
        last_name: "Affection",
        role: "Software Developer",
        description: "As Captain America, I aim to leverage my leadership skills and dedication to serve, transitioning into a Full Stack Developer role to contribute to technological advancements.",
    },
    address: {
        postal_code: "101010",
        city: "Brooklyn",
        state: "New York",
        country: "USA",
        phone: "+91 9876543xxx",
        email: "steve.rogers@avengers.com",
    },
    experience: [
        {
            id: 1,
            job_title: "Super Soldier",
            organization_name: "Avengers",
            start_year: "1941",
            end_year: "Present",
        },
       
    ],
    projects: [
        {
            id: 1,
            project_name: "Resume Builder",
            tech_stack: "MERN & Tailwind",
            github_link: "https://github.com/anuragaffection/resume_builder",
            live_link: "https://resume-builder-anurag.vercel.app",
            description: "A User Friendly Resume Builder app empowering users to craft professional resumes effortlessly."
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.Tech",
            domain: "SuperHero Technology",
            university: "Stark Industries",
            start_year: "1941",
            end_year: "1945",
        },
    ],
    key_skills: ["Leadership", "Combat",  "Strategy", "Teamwork", "Technology"],
};

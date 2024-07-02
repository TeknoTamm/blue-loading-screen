const config = {
    autoSlideInterval: 3000, // Automatic slide transition time (ms)
    autoPlay: true, // Boolean value to control autoplay
    musicVolume: 0.05, // Default volume level (0 = 0%; 0.5 = 50%; 1 = 100%)

    background: {
        type: "video", // "image" or "video"
        url: "0zLiPEJTA0A", // YouTube video ID or image file path
        videoProvider: "youtube" // Only for YouTube videos
    },

    socialMedia: [
        // Maximum of 4 items
        { name: "Web", icon: "/public/images/web.svg", link: "https://discord.gg/5CZX9RJ2YV" },
        { name: "Discord", icon: "/public/images/discord.svg", link: "https://discord.gg/5CZX9RJ2YV" },
        { name: "YouTube", icon: "/public/images/youtube.svg", link: "https://discord.gg/5CZX9RJ2YV" },
        { name: "Instagram", icon: "/public/images/insta.svg", link: "https://discord.gg/5CZX9RJ2YV" }
    ],

    images: [
        '/public/images/images_1.png',
        '/public/images/images_2.png',
        '/public/images/images_3.png',
        '/public/images/images_4.png',
        // You can add more images
    ],

    songs: [
        // You can add more songs
        {
            title: 'SleepWalking',
            artist: 'The Chain Gang Of 1974',
            src: '/public/music/Chain-Gang-of-1974-Sleepwalking.mp3',
            img: '/public/images/sleepwalking.jpg'
        },
        {
            title: 'The Setup',
            artist: 'Favored Nations',
            src: '/public/music/The-Setup.mp3',
            img: '/public/images/the-setup.jpg'
        },
        {
            title: 'Welcome The Los Santos',
            artist: 'Oh No',
            src: '/public/music/Welcome-To-Los-Santos.mp3',
            img: '/public/images/welcome-lst.jpg'
        },
    ],

    locales: {
        headerTitle: "BETA STUDIO RP", // Header title
        headerSubtitles: [
            "Welcome to this unique rp server",
            "Experience the ultimate roleplay adventure",
            "Join our immersive RP world",
            // You can add more subtitles
        ],
        cardTitles: [
            "Welcome To Beta Studio Roleplay",
            "Explore Our Unique Roleplay Server",
            "Join Our Exciting Roleplay Community"
            // You can add more titles
        ],
        cardDescriptions: [
            "Welcome to Beta Studio Rp! We have places for all kinds of professions. You can contact us on Discord for realistic, unusual scripts, cars and special sounds, the best server for realistic role-playing and your questions - we have an active team just waiting for you (24/7)! If you have waited really long for a quality server and have not found it until now, we promise you will enjoy every moment with us. We will make sure to give you the best experience. Thank you for joining us on the server.",
            "Discover a new world of roleplaying at Beta Studio! Our server offers a variety of professions and realistic experiences. Join our active community and experience roleplaying like never before.",
            "Looking for the best roleplay server? You've found it! At Beta Studio, we provide the most immersive roleplay experience with realistic scripts, custom cars, and dedicated support. Join us now and start your adventure!"
            // You can add more descriptions
        ],
        serverGalleryTitle: "Server Gallery", // Title for the server gallery section
        serverGalleryDescription: "Specially selected for you", // Description for the server gallery section
        socialMediaText: "Don't forget to visit", // Text for social media section
        socialMediaLinkText: "Beta Studio", // Link text for social media section
        socialMediaLinkURL: "https://discord.gg/5CZX9RJ2YV", // Link URL for social media section
    },
};

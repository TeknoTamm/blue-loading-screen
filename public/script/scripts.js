
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider');
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImg = document.querySelector('.fullscreen-img');
    const closeBtn = document.querySelector('.close-btn');
    let currentIndex = 0;
    const images = config.images; 

    let autoSlideInterval;

    function loadImages() {
        slidesContainer.innerHTML = '';
        sliderContainer.innerHTML = ''; 

        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.addEventListener('click', () => openFullscreen(index)); 
            slidesContainer.appendChild(img);
        });

        updateDots(currentIndex);
        showImage(currentIndex);
        startAutoSlide();
    }

    function showImage(index) {
        const images = slidesContainer.querySelectorAll('img');
        images.forEach((img, i) => {
            img.classList.remove('active', 'previous', 'next');
            if (i === index) {
                img.classList.add('active');
            } else if (i === (index - 1 + images.length) % images.length) {
                img.classList.add('previous');
            } else if (i === (index + 1) % images.length) {
                img.classList.add('next');
            }
        });

        const slideWidth = slidesContainer.children[0].clientWidth + 20;
        const offset = (index * slideWidth) - ((slidesContainer.clientWidth - slideWidth) / 2);
        slidesContainer.style.transform = `translateX(-${offset}px)`;

        updateDots(index);
    }

    function updateDots(index) {
        sliderContainer.innerHTML = '';

        const totalDots = images.length;
        const dotsToShow = 4;
        let start = Math.max(index - Math.floor(dotsToShow / 2), 0);
        let end = Math.min(start + dotsToShow, totalDots);

        if (end - start < dotsToShow) {
            start = Math.max(end - dotsToShow, 0);
        }

        for (let i = start; i < end; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === index) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = i;
                showImage(currentIndex);
                resetAutoSlide();
            });
            sliderContainer.appendChild(dot);
        }
    }

    function openFullscreen(index) {
        fullscreenImg.src = images[index];
        fullscreenOverlay.style.display = 'flex';
    }

    function closeFullscreen() {
        fullscreenOverlay.style.display = 'none';
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        resetAutoSlide();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextImage();
        }, config.autoSlideInterval); 
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    closeBtn.addEventListener('click', closeFullscreen);

    loadImages();


    const backgroundElement = document.getElementById('background');
    const headerTitleElement = document.getElementById('headerTitle');
    const headerSubtitleElement = document.getElementById('headerSubtitle');
    const cardTitleElement = document.getElementById('cardTitle');
    const cardDescriptionElement = document.getElementById('cardDescription');
    const serverGalleryTitleElement = document.getElementById('serverGalleryTitle');
    const serverGalleryDescriptionElement = document.getElementById('serverGalleryDescription');
    const socialMediaTextElement = document.getElementById('socialMediaText');
    const socialMediaLinkElement = document.getElementById('socialMediaLink');
    const socialMediaLinksElement = document.getElementById('socialMediaLinks');

    const { headerSubtitles, cardTitles, cardDescriptions, serverGalleryTitle, serverGalleryDescription, socialMediaText, socialMediaLinkText, socialMediaLinkURL } = config.locales;

   
    const randomHeaderSubtitleIndex = Math.floor(Math.random() * headerSubtitles.length);
    const randomHeaderSubtitle = headerSubtitles[randomHeaderSubtitleIndex];

   
    const randomIndex = Math.floor(Math.random() * cardTitles.length);
    const randomTitle = cardTitles[randomIndex];
    const randomDescription = cardDescriptions[randomIndex];

    headerSubtitleElement.textContent = randomHeaderSubtitle;

    cardTitleElement.textContent = randomTitle;
    cardDescriptionElement.textContent = randomDescription;

    serverGalleryTitleElement.textContent = serverGalleryTitle;
    serverGalleryDescriptionElement.textContent = serverGalleryDescription;
    socialMediaTextElement.textContent = socialMediaText;
    socialMediaLinkElement.textContent = socialMediaLinkText;
    socialMediaLinkElement.href = socialMediaLinkURL;

    config.socialMedia.forEach(media => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = "#"; 
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navigator.clipboard.writeText(media.link).then(function() {
                showCopiedMessage(link, media.name);
            });
        });
        const icon = document.createElement('img');
        icon.src = media.icon;
        icon.alt = media.name;
        link.appendChild(icon);
        listItem.appendChild(link);
        socialMediaLinksElement.appendChild(listItem);
    });

    if (config.background.type === "video") {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${config.background.url}?autoplay=1&mute=1&loop=1&playlist=${config.background.url}`;
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        backgroundElement.appendChild(iframe);
    } else {
        backgroundElement.style.backgroundImage = `url(${config.background.url})`;
        backgroundElement.style.backgroundSize = "cover";
        backgroundElement.style.backgroundPosition = "center";
        backgroundElement.style.position = "absolute";
        backgroundElement.style.width = "100%";
        backgroundElement.style.height = "100%";
        backgroundElement.style.top = "0";
        backgroundElement.style.left = "0";
    }

    function showCopiedMessage(element, name) {
        const message = document.createElement('div');
        message.textContent = `${name} link copied!`;
        message.style.position = 'absolute';
        message.style.top = '-20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.padding = '5px 10px';
   
        message.style.color = 'white';
        message.style.borderRadius = '5px';
        message.style.fontSize = '7px';
        element.parentElement.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 2000);
    }

});






const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const songTitleElem = document.querySelector('.song-info h2');
const songArtistElem = document.querySelector('.song-info p');
const albumArtImg = document.getElementById('album-art-img');
const volumeRange = document.getElementById('volume'); 

let isPlaying = false;
let autoPlay = config.autoPlay
let currentSongIndex = 0;

const musicVolume = config.musicVolume
const songs = config.songs

const audio = new Audio(songs[currentSongIndex].src);
audio.volume = musicVolume;

document.addEventListener('DOMContentLoaded', () => {
    if (autoPlay) {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        isPlaying = true;
    }
    else {
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
        isPlaying = true;
    }
    updateSongDetails();


});

playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    isPlaying = true;
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    isPlaying = false;
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    switchSong();
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    switchSong();
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progress.value = (currentTime / duration) * 100;
    currentTimeElem.textContent = formatTime(currentTime);
    durationElem.textContent = formatTime(duration);
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
    
    updateVolumeDisplay(volume.value);
});

function updateVolumeDisplay(value) {
   
    volumeRange.value = value;
}

function switchSong() {
    audio.src = songs[currentSongIndex].src;
    audio.play();
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    updateSongDetails();
}

function updateSongDetails() {
    songTitleElem.textContent = songs[currentSongIndex].title;
    songArtistElem.textContent = songs[currentSongIndex].artist;
    albumArtImg.src = songs[currentSongIndex].img;
    albumArtImg.onload = updateAlbumArtShadow();
}

function updateAlbumArtShadow() {
    const img = new Image();
    img.src = songs[currentSongIndex].img;
    img.onload = function () {
        Vibrant.from(img).getPalette()
            .then(palette => {
                const vibrantColor = palette.Vibrant.hex;
                albumArtImg.style.filter = `drop-shadow(0 0px 10.5px ${vibrantColor})`;
            })
            .catch(err => console.error(err));
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}



function setHeaderText() {
    document.getElementById('header-title').innerText = config.locales.headerTitle;
    document.getElementById('header-subtitle').innerText = config.locales.headerSubtitle;
}

function setCardText() {
    document.getElementById('card-title').innerText = config.locales.cardTitle;
    document.getElementById('card-description').innerText = config.locales.cardDescription;
}

function setServerGalleryText() {
    document.getElementById('server-gallery-title').innerText = config.locales.serverGalleryTitle;
    document.getElementById('server-gallery-description').innerText = config.locales.serverGalleryDescription;
}

function setSocialMediaText() {
    const socialMediaPrefix = document.getElementById('social-media-prefix');
    const socialMediaLink = document.getElementById('social-media-link');
    const socialMediaSuffix = document.getElementById('social-media-suffix');

    socialMediaPrefix.innerText = config.locales.socialMediaText;
    socialMediaLink.innerText = config.locales.socialMediaLinkText;
    socialMediaLink.href = config.locales.socialMediaLinkURL;
    socialMediaSuffix.innerText = '.';
}

function setSocialMediaLinks() {
    const socialMediaList = document.querySelector('.social-media-list');
    socialMediaList.innerHTML = '';

    config.locales.socialMedia.forEach(social => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const icon = document.createElement('img');

        icon.src = social.icon;
        icon.alt = social.name;
        link.href = social.link;
        link.target = "_blank";

        link.appendChild(icon);
        listItem.appendChild(link);
        socialMediaList.appendChild(listItem);
    });
}

setHeaderText();
setCardText();
setServerGalleryText();
setSocialMediaLinks();


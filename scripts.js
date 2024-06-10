document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { date: '08-06-24', venue: 'Bar Mundo (Fuengirola)', url: 'https://example.com/event1' },
        { date: '22-06-24', venue: 'Song Release', url: 'https://example.com/event2' },
        { date: '29-06-24', venue: 'Bar Mundo (Fuengirola)', url: 'https://example.com/event3' },
    ];

    const eventList = document.getElementById('event-list');

    events.forEach(event => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = event.url;
        a.textContent = `${event.date} - ${event.venue}`;
        a.target = '_blank'; // Opens the link in a new tab
        li.appendChild(a);
        eventList.appendChild(li);
    });

    const media = [
        { type: 'video', src: 'media/video3.mp4' },
        { type: 'image', src: 'media/image4.jpg' },
        { type: 'video', src: 'media/video4.mp4' },
        { type: 'image', src: 'media/image2.jpg' },
        { type: 'image', src: 'media/image1.jpg' },
        { type: 'video', src: 'media/video1.mp4' },
        { type: 'image', src: 'media/image3.jpg' },
        { type: 'video', src: 'media/video2.mp4' },
        //newmedia
        //{ type: 'video', src: 'media/video5.mp4' },
        //{ type: 'video', src: 'media/video6.mp4' },
        { type: 'image', src: 'media/image5.jpg' },
        { type: 'image', src: 'media/image6.jpg' },
        { type: 'image', src: 'media/image7.jpg' },
        { type: 'image', src: 'media/image8.jpg' },
        { type: 'image', src: 'media/image9.jpg' },
        { type: 'image', src: 'media/image10.jpg' },
        { type: 'image', src: 'media/image11.jpg' },
        { type: 'image', src: 'media/image12.jpg' },

        

        // Add new media here
    ];

    const backgroundMediaGrid = document.querySelector('.background-media-grid');

    media.forEach((item) => {
        const mediaElementWrapper = document.createElement('div');
        mediaElementWrapper.className = 'media-element-wrapper';

        const mediaElement = document.createElement(item.type === 'video' ? 'video' : 'img');
        mediaElement.src = item.src;
        if (item.type === 'video') {
            mediaElement.autoplay = true;
            mediaElement.muted = true;
            mediaElement.loop = true;
        }

        if (item.type === 'image' && item.src === 'image1.jpg') {
            const clickableArea = document.createElement('a');
            clickableArea.href = 'https://www.youtube.com/@alexashing1';
            clickableArea.target = '_blank';
            clickableArea.className = 'clickable-area';

            mediaElementWrapper.appendChild(mediaElement);
            mediaElementWrapper.appendChild(clickableArea);
        } else {
            mediaElementWrapper.appendChild(mediaElement);
        }

        backgroundMediaGrid.appendChild(mediaElementWrapper);
    });

    // Event listener for Events button
    document.getElementById('eventsButton').addEventListener('click', () => {
        toggleContainer('events-container');
    });

    // Event listener for Close button
    document.getElementById('closeEventsButton').addEventListener('click', () => {
        toggleContainer('events-container');
    });

    // Event listener for Contact button
    document.getElementById('contactButton').addEventListener('click', () => {
        toggleContainer('contact-container');
    });

    // Event listener for Close Contact button
    document.getElementById('closeContactButton').addEventListener('click', () => {
        toggleContainer('contact-container');
    });

    // Event listener for Merch button
    document.getElementById('merchButton').addEventListener('click', () => {
        window.location.href = 'merch.html';
    });
});

function toggleContainer(containerId) {
    const container = document.getElementById(containerId);
    container.classList.toggle('visible');
    container.classList.toggle('hidden');
}

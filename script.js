const movies = [
    {
        title: "Venom: The Last Dance",
        year: 2024,
        director: "Kelly Marcel",
        writers: "Kelly Marcel, Tom Hardy",
        poster: "source/venom.jpg",
        synopsis: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance."
    },
    {
        title: "Sonic the Hedgehog 3",
        year: 2024,
        director: "Jeff Fowler",
        writers: "Pat Casey, Josh Miller, John Whittington",
        poster: "source/sonic.jpg",
        synopsis: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance."
    },
    {
        title: "Joker: Folie à Deux",
        year: 2024,
        director: "Todd Phillips",
        writers: "Scott Silver",
        poster: "source/joker.jpg",
        synopsis: "Failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while in Arkham State Hospital. Upon release, the pair embark on a doomed romantic misadventure."
    },
    {
        title: "Lembayung",
        year: 2024,
        director: "Baim Wong",
        writers: "Ruben Adrian, Emilka Chaidir, El Shinta Pica",
        poster: "source/lembayung.jpg",
        synopsis: "Pica and Arum were still doing practical field work (PFW) at that time. They underwent PFW at the dental clinic in a small hospital in Central Java."
    },
    {
        title: "Home Sweet Loan",
        year: 2024,
        director: "Sabrina Rochelle Kalangie",
        writers: "Widya Arifianti, Almira Bastari, Sabrina Rochelle Kalangie",
        poster: "source/home-sweet-loan.jpg",
        synopsis: "A middle-class worker named Kaluna. He still lives with his parents and older siblings who are married."
    }
];

function showMovieDetails(index) {
    document.getElementById("poster").setAttribute("src", movies[index].poster);
    document.getElementById("title").textContent = movies[index].title;
    document.getElementById("year").textContent = "Year: " + movies[index].year;
    document.getElementById("director").textContent = "Director: " + movies[index].director;
    document.getElementById("writers").textContent = "Writers: " + movies[index].writers;
    document.getElementById("synopsis").textContent = "Synopsis: " + movies[index].synopsis;
}


function generateMovieImages() {
    const movieImagesContainer = document.getElementById('movie-images-container');
    movieImagesContainer.innerHTML = ''; 

    movies.forEach((movie, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = movie.poster;
        imgElement.alt = movie.title;
        imgElement.onclick = () => showMovieDetails(index); 
        movieImagesContainer.appendChild(imgElement); 
    });
}


generateMovieImages();
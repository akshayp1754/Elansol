import React from 'react';

const LandingPage = () => {
  const movies = [
    { title: "The Shawshank Redemption", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/deadpool-and-wolverine-et00341295-1718018322.jpg", rating: "9.3" },
    { title: "The Godfather", image: "godfather.jpg", rating: "9.2" },
    { title: "The Dark Knight", image: "dark-knight.jpg", rating: "9.0" },
    { title: "Pulp Fiction", image: "pulp-fiction.jpg", rating: "8.9" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Movie Tickets Online</h1>
        <p className="text-lg md:text-xl mb-6">Easy, Fast, and Secure way to book your favorite movies</p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-lg">
          Get Started
        </button>
      </section>

      {/* Movies Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold text-center mb-10">Now Showing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies.map((movie, index) => (
              <div key={index} className="text-center">
                <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-400">Rating: {movie.rating}/10</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-red-600 p-4 inline-block rounded-full mb-4">
                🎥
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Movies</h3>
              <p>Access to the latest blockbuster movies with just a few clicks.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 p-4 inline-block rounded-full mb-4">
                💳
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p>Your transactions are safe with our advanced security features.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 p-4 inline-block rounded-full mb-4">
                ⭐
              </div>
              <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
              <p>Check out ratings and reviews before booking your tickets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 MovieBooking, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

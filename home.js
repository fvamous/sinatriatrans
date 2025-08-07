import React, { useState, useEffect } from 'react';
// The original code had imports for FontAwesomeIcon which caused a compilation error.
// We are now using standard HTML <i> tags with Font Awesome classes, assuming a CDN is loaded globally.

// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [message, setMessage] = useState('');
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [packageTypeFromUrl, setPackageTypeFromUrl] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true); // New state for login status, set to true for demonstration

    // Dummy data for demonstration (will be replaced by API calls)
    const featuredTravels = [
        {
            id: 'harian',
            title: 'Paket Harian',
            description: 'Jenis layanan ini adalah sewa mobil dengan jangka waktu berdasarkan pemakaian harian atau perhari. Minimal jangka adalah per 12 jam. Pada layanan jenis ini, Anda dapat memilih menggunakan jasa sopir yang telah kami sediakan ataupun lepas kunci. Jika Anda menggunakan jasa sopir, maka kerusakan kendaraan menjadi tanggung jawab perusahaan rental sepenuhnya. Namun, jika tanpa supir tanggung jawab sepenuhnya ada pada Anda sebagai pengguna.',
            imageUrl: 'https://placehold.co/600x400/D1E7DD/0F5132?text=Paket+Harian',
            price: 'Mulai Rp 3.5 Juta',
        },
        {
            id: 'mingguan',
            title: 'Paket Mingguan',
            description: 'Rental mobil mingguan merupakan jenis layanan penyewaan kendaraan dengan jangka waktu satu minggu. Bisa menggunakan jasa sopir atau tanpa sopir. Layanan ini umumnya diperuntukkan bagi pihak perusahaan yang ingin melakukan sewa mobil mingguan ataupun untuk personal. Kami akan melakukan perawatan kendaraan secara berkala, seperti penggantian oli ataupun pergantian sparepart.',
            imageUrl: 'https://placehold.co/600x400/D4EDDA/155724?text=Paket+Mingguan',
            price: 'Mulai Rp 1.8 Juta',
        },
        {
            id: 'bulanan',
            title: 'Paket Bulanan',
            description: 'Layanan ini adalah penyewaan kendaraan untuk jangka waktu lama, yaitu bulan hingga tahun. Jenis layanan khusus untuk perusahaan yang mencari rental mobil buat operasional tertentu. Pada layanan ini kamipun akan melakukan perawatan rutin terhadap kendaraan secara berkala.',
            imageUrl: 'https://placehold.co/600x400/CCE5FF/004085?text=Paket+Bulanan',
            price: 'Mulai Rp 2.2 Juta',
        },
    ];

    const featuredRentals = [
        {
            id: 'avanza',
            title: 'Toyota Avanza',
            description: 'Mobil keluarga nyaman dan irit untuk perjalanan Anda.',
            imageUrl: 'https://placehold.co/600x400/FFF3CD/856404?text=Avanza',
            pricePerDay: '350.000',
            passengers: 7,
            transmission: 'Manual/Matic',
        },
        {
            id: 'brio',
            title: 'Honda Brio',
            description: 'Mobil kota yang lincah dan hemat bahan bakar.',
            imageUrl: 'https://placehold.co/600x400/FFF3CD/856404?text=Brio',
            pricePerDay: '250.000',
            passengers: 4,
            transmission: 'Matic',
        },
        {
            id: 'innova',
            title: 'Toyota Innova Reborn',
            description: 'Kenyamanan premium untuk perjalanan jarak jauh.',
            imageUrl: 'https://placehold.co/600x400/D1ECF1/0C5460?text=Innova+Reborn',
            pricePerDay: '500.000',
            passengers: 7,
            transmission: 'Matic',
        },
    ];

    // Function to show custom message box
    const displayMessageBox = (msg) => {
        setMessage(msg);
        setShowMessageBox(true);
    };

    // Function to close custom message box
    const closeMessageBox = () => {
        setShowMessageBox(false);
        setMessage('');
    };

    // Effect to handle URL parameters for booking page
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const pkg = urlParams.get('package');
        if (pkg) {
            setPackageTypeFromUrl(pkg);
            setCurrentPage('booking'); // Navigate to booking page if package param exists
            // Clear the URL parameter after reading it to prevent re-triggering on refresh
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    // Logout function
    const handleLogout = () => {
        setIsLoggedIn(false);
        displayMessageBox('Anda telah berhasil logout.');
        setCurrentPage('home');
    };

    // Navbar Component
    const Navbar = () => (
        <nav className="bg-gradient-to-r from-primary to-secondary p-4 shadow-lg fixed w-full z-50 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" onClick={() => setCurrentPage('home')} className="flex items-center space-x-3">
                    <img src="http://googleusercontent.com/file_content/2" alt="Tugu Yogyakarta Logo" className="h-10 w-auto object-contain" />
                    <span className="text-white text-3xl font-bold tracking-wider hover:text-gray-100 transition duration-300">
                        Sinatriatrans
                    </span>
                </a>
                <div className="lg:hidden">
                    <button id="mobile-menu-button" className="text-white focus:outline-none p-2 rounded-md hover:bg-blue-700 transition duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path id="mobile-menu-icon-open" className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            <path id="mobile-menu-icon-close" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div id="desktop-menu" className="hidden lg:flex items-center space-x-8">
                    <ul className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
                        <li><a href="#" onClick={() => setCurrentPage('home')} className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Beranda</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('travel-packages')} className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Paket Travel</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('rental-list')} className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Rental Mobil</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('booking')} className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Pemesanan</a></li>
                    </ul>
                    <div className="flex items-center space-x-4 ml-6">
                        {isLoggedIn ? (
                            <>
                                {/* Keranjang Saya (Cart) */}
                                <button
                                    onClick={() => displayMessageBox('Ini adalah halaman keranjang saya.')}
                                    className="relative text-white hover:text-gray-200 transition duration-300"
                                    aria-label="Keranjang Saya"
                                >
                                    <i className="fas fa-shopping-cart text-xl"></i>
                                    {/* Dummy cart item count */}
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        3
                                    </span>
                                </button>
                                {/* Profil Akun */}
                                <button
                                    onClick={() => displayMessageBox('Ini adalah halaman profil akun saya.')}
                                    className="text-white hover:text-gray-200 transition duration-300"
                                    aria-label="Profil Akun"
                                >
                                    <i className="fas fa-user-circle text-xl"></i>
                                </button>
                                {/* Tombol Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-2 text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded-full transition duration-300"
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : (
                            // Tombol Login jika belum login
                            <button
                                onClick={() => setCurrentPage('login')}
                                className="text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-6 rounded-full transition duration-300"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile menu overlay remains the same */}
        </nav>
    );

    // Footer Component
    const Footer = () => (
        <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-4">Sinatriatrans</h3>
                <p className="text-gray-400 mb-2">Jl. Semail No.RT.03, Mredo, Bangunharjo, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55185</p>
                <p className="text-gray-400 mb-4">Email: info@sinatriatrans.com</p>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i><span className="sr-only">Facebook</span></a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram"></i><span className="sr-only">Instagram</span></a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i><span className="sr-only">Twitter</span></a>
                </div>
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Sinatriatrans. All rights reserved.</p>
            </div>
        </footer>
    );

    // Custom Message Box Component
    const MessageBox = ({ message, onClose }) => (
        <>
            <div className="message-box-overlay" style={{ display: showMessageBox ? 'block' : 'none' }}></div>
            <div className="message-box" style={{ display: showMessageBox ? 'block' : 'none' }}>
                <p className="text-lg font-semibold mb-4">{message}</p>
                <button onClick={onClose} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                    Tutup
                </button>
            </div>
        </>
    );

    // Home Page Component
    const HomePage = () => (
        <main className="pt-20">
            {/* Hero Section */}
            <section
                id="home"
                className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
                style={{ backgroundImage: `url('http://googleusercontent.com/file_content/2')`, backgroundAttachment: 'fixed' }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Jelajahi Dunia, Berkendara Nyaman
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                        Layanan travel dan rental mobil terpercaya untuk petualangan tak terlupakan Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#" onClick={() => setCurrentPage('travel-packages')} className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Lihat Paket Travel
                        </a>
                        <a href="#" onClick={() => { setCurrentPage('booking'); setPackageTypeFromUrl('rental-mobil'); }} className="bg-accent hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Sewa Mobil Sekarang
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Travel Packages */}
            <section id="travel-packages" className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Paket Travel Unggulan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTravels.map(travel => (
                        <div key={travel.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={travel.imageUrl}
                                alt={travel.title}
                                className="w-full h-48 object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Travel+Image'; }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{travel.title}</h3>
                                <p className="text-gray-600 mb-4 text-base">{travel.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-primary text-xl font-bold">{travel.price}</span>
                                    <a href="#" onClick={() => { setCurrentPage('detail-package'); setPackageTypeFromUrl(travel.id); }} className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">
                                        Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" onClick={() => setCurrentPage('travel-packages')} className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Lihat Semua Paket Travel
                    </a>
                </div>
            </section>

            {/* Featured Car Rentals */}
            <section id="car-rentals" className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg shadow-inner mb-16">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Pilihan Rental Mobil Terbaik
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredRentals.map(rental => (
                        <div key={rental.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={rental.imageUrl}
                                alt={rental.title}
                                className="w-full h-48 object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Car+Image'; }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{rental.title}</h3>
                                <p className="text-gray-600 mb-4 text-base">{rental.description}</p>
                                <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm mb-4">
                                    <div>
                                        <span className="font-semibold">Penumpang:</span> {rental.passengers}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Transmisi:</span> {rental.transmission}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-primary text-xl font-bold">Rp {rental.pricePerDay}/hari</span>
                                    <a href="#" onClick={() => { setCurrentPage('booking'); setPackageTypeFromUrl('rental-mobil'); }} className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">
                                        Sewa Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" onClick={() => setCurrentPage('rental-list')} className="bg-accent hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Lihat Semua Mobil Rental
                    </a>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Mengapa Memilih Sinatriatrans?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                        <div className="text-primary text-5xl mb-4"><i className="fas fa-star"></i></div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Layanan Terbaik</h3>
                        <p className="text-gray-600">Kami berkomitmen memberikan pengalaman terbaik dengan layanan profesional dan ramah.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                        <div className="text-accent text-5xl mb-4"><i className="fas fa-car"></i></div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Armada Terawat</h3>
                        <p className="text-gray-600">Pilihan mobil terbaru dan terawat untuk kenyamanan dan keamanan perjalanan Anda.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                        <div className="text-secondary text-5xl mb-4"><i className="fas fa-map-marked-alt"></i></div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Destinasi Impian</h3>
                        <p className="text-gray-600">Berbagai paket travel menarik ke destinasi populer di seluruh Indonesia.</p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Tentang Kami - Sinatriatrans
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Sinatriatrans adalah penyedia layanan travel dan rental mobil terkemuka yang berdedikasi untuk memberikan pengalaman perjalanan yang tak terlupakan bagi setiap pelanggan. Didirikan dengan visi untuk menjadi mitra perjalanan terpercaya Anda, kami menawarkan berbagai paket wisata menarik dan pilihan armada mobil yang lengkap dan terawat.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Kami memahami bahwa setiap perjalanan adalah unik. Oleh karena itu, kami selalu berusaha untuk menyediakan layanan yang personal dan fleksibel, disesuaikan dengan kebutuhan dan preferensi Anda. Dari petualangan solo hingga liburan keluarga besar, Sinatriatrans siap menemani setiap langkah perjalanan Anda dengan aman, nyaman, dan menyenangkan.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Misi Kami</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                            <li>Menyediakan layanan travel dan rental mobil berkualitas tinggi dengan harga kompetitif.</li>
                            <li>Mengutamakan kepuasan dan keamanan pelanggan di setiap aspek layanan.</li>
                            <li>Terus berinovasi dalam menghadirkan destinasi dan armada terbaru.</li>
                            <li>Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan dan integritas.</li>
                        </ul>

                        {/* DOKUMEN PERUSAHAAN */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">DOKUMEN PERUSAHAAN</h2>
                        <div className="text-lg text-gray-700 leading-relaxed mb-6">
                            <p><span className="font-semibold">Nama Perusahaan:</span> SINATRIA TRANSPOT</p>
                            <p><span className="font-semibold">Alamat Perusahaan:</span> Jl. Semail No.RT.03, Mredo, Bangunharjo, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55185</p>
                            <p><span className="font-semibold">Bidang Usaha:</span> Sewa Mobil</p>
                            <p><span className="font-semibold">Telepon/WA:</span> 0813-8562-8082</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Tim Kami</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Tim Sinatriatrans terdiri dari profesional berpengalaman di bidang pariwisata dan transportasi. Dengan pengetahuan mendalam tentang destinasi lokal dan internasional, serta komitmen terhadap pelayanan prima, kami siap membantu Anda merencanakan dan mewujudkan perjalanan impian Anda.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact-us" className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Hubungi Kami
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, permintaan khusus, atau ingin memesan layanan kami.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
                                <div className="space-y-4 text-gray-700">
                                    <p className="flex items-center">
                                        <i className="fas fa-map-marker-alt text-primary mr-3 text-xl"></i>
                                        Jl. Semail No.RT.03, Mredo, Bangunharjo, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55185
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fab fa-whatsapp text-primary mr-3 text-xl"></i>
                                        +62 813-8562-8082
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-envelope text-primary mr-3 text-xl"></i>
                                        info@sinatriatrans.com
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Kirim Pesan</h2>
                                <form onSubmit={(e) => { e.preventDefault(); displayMessageBox('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.'); e.target.reset(); }} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                                        <input type="text" id="name" name="name" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="Nama Anda" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                        <input type="email" id="email" name="email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="email@example.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
                                        <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="Subjek pesan Anda" required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan</label>
                                        <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-y" placeholder="Tulis pesan Anda di sini..." required></textarea>
                                    </div>
                                    <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">Kirim Pesan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

    // Travel Packages Page Component
    const TravelPackagesPage = () => (
        <main className="pt-20 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                    Semua Paket Travel
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTravels.map(travel => (
                        <div key={travel.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={travel.imageUrl}
                                alt={travel.title}
                                className="w-full h-48 object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Travel+Image'; }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{travel.title}</h3>
                                <p className="text-gray-600 mb-4 text-base">{travel.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-primary text-xl font-bold">{travel.price}</span>
                                    <a href="#" onClick={() => { setCurrentPage('detail-package'); setPackageTypeFromUrl(travel.id); }} className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">
                                        Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" onClick={() => setCurrentPage('home')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300">
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </main>
    );

    // Rental List Page Component
    const RentalListPage = () => (
        <main className="pt-20 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                    Daftar Mobil Rental
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredRentals.map(rental => (
                        <div key={rental.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={rental.imageUrl}
                                alt={rental.title}
                                className="w-full h-48 object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Car+Image'; }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{rental.title}</h3>
                                <p className="text-gray-600 mb-4 text-base">{rental.description}</p>
                                <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm mb-4">
                                    <div>
                                        <span className="font-semibold">Penumpang:</span> {rental.passengers}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Transmisi:</span> {rental.transmission}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-primary text-xl font-bold">Rp {rental.pricePerDay}/hari</span>
                                    <a href="#" onClick={() => { setCurrentPage('booking'); setPackageTypeFromUrl('rental-mobil'); }} className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">
                                        Sewa Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" onClick={() => setCurrentPage('home')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300">
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </main>
    );

    // Detail Package Page Component
    const DetailPackagePage = ({ packageId }) => {
        const pkg = featuredTravels.find(p => p.id === packageId);

        if (!pkg) {
            return (
                <main className="pt-20 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Paket tidak ditemukan.</h1>
                        <button onClick={() => setCurrentPage('travel-packages')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300">
                            Kembali ke Paket Travel
                        </button>
                    </div>
                </main>
            );
        }

        return (
            <main className="pt-20 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Detail {pkg.title}
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                        <img src={pkg.imageUrl} alt={pkg.title} className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-md" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Package+Image'; }} />
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{pkg.title}</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {pkg.description}
                            </p>
                            <p className="text-2xl font-bold text-primary mb-6">Harga: {pkg.price}</p>
                            <a href="#" onClick={() => { setCurrentPage('booking'); setPackageTypeFromUrl(pkg.id); }} className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" onClick={() => setCurrentPage('travel-packages')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300">
                            Kembali ke Paket Travel
                        </a>
                    </div>
                </div>
            </main>
        );
    };

    // Booking Page Component
    const BookingPage = () => {
        const [formData, setFormData] = useState({
            packageType: packageTypeFromUrl || '',
            fullName: '',
            email: '',
            whatsapp: '',
            startDate: '',
            endDate: '',
            additionalMessage: ''
        });

        useEffect(() => {
            if (packageTypeFromUrl) {
                setFormData(prev => ({ ...prev, packageType: packageTypeFromUrl }));
            }
        }, [packageTypeFromUrl]);

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            displayMessageBox('Pemesanan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
            // In a real application, you would send this data to a server via API
            // Example fetch call (replace with your actual API endpoint):
            /*
            try {
                const response = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (response.ok) {
                    displayMessageBox(result.message || 'Pemesanan berhasil dibuat.');
                    setFormData({ // Reset form after successful submission
                        packageType: '', fullName: '', email: '', whatsapp: '',
                        startDate: '', endDate: '', additionalMessage: ''
                    });
                } else {
                    displayMessageBox(result.message || 'Gagal membuat pemesanan. Silakan coba lagi.');
                }
            } catch (error) {
                console.error('Error during booking submission:', error);
                displayMessageBox('Terjadi kesalahan jaringan. Silakan coba lagi nanti.');
            }
            */
            setFormData({ // Reset form after dummy submission
                packageType: packageTypeFromUrl || '', fullName: '', email: '', whatsapp: '',
                startDate: '', endDate: '', additionalMessage: ''
            });
        };

        return (
            <main className="pt-20 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Formulir Pemesanan
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            Isi formulir di bawah ini untuk melakukan pemesanan paket travel atau rental mobil.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="packageType" className="block text-gray-700 text-sm font-bold mb-2">Jenis Paket</label>
                                <select
                                    id="packageType"
                                    name="packageType"
                                    value={formData.packageType}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    required
                                >
                                    <option value="">Pilih Jenis Paket</option>
                                    <option value="harian">Paket Harian</option>
                                    <option value="mingguan">Paket Mingguan</option>
                                    <option value="bulanan">Paket Bulanan</option>
                                    <option value="rental-mobil">Rental Mobil</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="Nama Lengkap Anda" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="email@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-bold mb-2">Nomor Telepon/WhatsApp</label>
                                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="+62 812-3456-7890" required />
                            </div>
                            <div>
                                <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Mulai Sewa</label>
                                <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Selesai Sewa</label>
                                <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="additionalMessage" className="block text-gray-700 text-sm font-bold mb-2">Pesan Tambahan (opsional)</label>
                                <textarea id="additionalMessage" name="additionalMessage" rows="4" value={formData.additionalMessage} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-y" placeholder="Contoh: Saya membutuhkan mobil dengan sopir, atau preferensi mobil tertentu."></textarea>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">Kirim Pemesanan</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    };

    // Login Page Component
    const LoginPage = () => {
        const [passwordType, setPasswordType] = useState('password');

        const togglePasswordVisibility = () => {
            setPasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const usernameEmail = e.target['username-email'].value;
            const password = e.target.password.value;

            // Simple hardcoded login for demonstration
            if (usernameEmail === 'user@example.com' && password === 'password123') {
                displayMessageBox('Login Berhasil! Selamat datang.');
                setIsLoggedIn(true); // Set login status to true
                setCurrentPage('home'); // Redirect to home page after login
            } else {
                displayMessageBox('Login Gagal. Nama pengguna/email atau kata sandi salah.');
            }
        };

        return (
            <main className="pt-20 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Login ke Akun Anda
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="username-email" className="block text-gray-700 text-sm font-bold mb-2">Nama Pengguna atau Email</label>
                                <input type="text" id="username-email" name="username-email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="Nama Pengguna atau Email Anda" required />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi</label>
                                <input
                                    type={passwordType}
                                    id="password"
                                    name="password"
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Kata Sandi Anda"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-7" onClick={togglePasswordVisibility}>
                                    <i className={`fas ${passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'} text-gray-500 hover:text-gray-700`}></i>
                                </span>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">Login</button>
                            <p className="text-center text-gray-600 text-sm mt-4">
                                Belum punya akun? <a href="#" onClick={() => setCurrentPage('register')} className="text-primary hover:underline">Daftar Sekarang</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        );
    };

    // Register Page Component
    const RegisterPage = () => {
        const [passwordType, setPasswordType] = useState('password');
        const [confirmPasswordType, setConfirmPasswordType] = useState('password');

        const togglePasswordVisibility = (field) => {
            if (field === 'password') {
                setPasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
            } else if (field === 'confirm-password') {
                setConfirmPasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const fullName = e.target['full-name'].value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target['confirm-password'].value;

            if (password !== confirmPassword) {
                displayMessageBox('Kata sandi dan konfirmasi kata sandi tidak cocok.');
                return;
            }

            displayMessageBox(`Pendaftaran berhasil untuk ${fullName} (${email})! Silakan login.`);
            // In a real app, you would send this data to a server via API
            // setCurrentPage('login'); // Redirect to login page after successful registration
        };

        return (
            <main className="pt-20 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                        Daftar Akun Baru
                    </h1>
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                                <input type="text" id="full-name" name="full-name" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="Nama Lengkap Anda" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" placeholder="email@example.com" required />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi</label>
                                <input
                                    type={passwordType}
                                    id="password"
                                    name="password"
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Minimal 6 karakter"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-7" onClick={() => togglePasswordVisibility('password')}>
                                    <i className={`fas ${passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'} text-gray-500 hover:text-gray-700`}></i>
                                </span>
                            </div>
                            <div className="relative">
                                <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Konfirmasi Kata Sandi</label>
                                <input
                                    type={confirmPasswordType}
                                    id="confirm-password"
                                    name="confirm-password"
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Ulangi Kata Sandi Anda"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-7" onClick={() => togglePasswordVisibility('confirm-password')}>
                                    <i className={`fas ${confirmPasswordType === 'password' ? 'fa-eye' : 'fa-eye-slash'} text-gray-500 hover:text-gray-700`}></i>
                                </span>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">Daftar</button>
                            <p className="text-center text-gray-600 text-sm mt-4">
                                Sudah punya akun? <a href="#" onClick={() => setCurrentPage('login')} className="text-primary hover:underline">Login di sini</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        );
    };

    // Render current page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'travel-packages':
                return <TravelPackagesPage />;
            case 'rental-list':
                return <RentalListPage />;
            case 'detail-package':
                return <DetailPackagePage packageId={packageTypeFromUrl} />;
            case 'booking':
                return <BookingPage />;
            case 'login':
                return <LoginPage />;
            case 'register':
                return <RegisterPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
            <Navbar />
            {renderPage()}
            <Footer />
            <MessageBox message={message} onClose={closeMessageBox} />
        </div>
    );
};

export default App;

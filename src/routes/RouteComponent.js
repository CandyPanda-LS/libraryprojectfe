import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//common
import NavbarComponent from '../Components/NavbarComponent';
import CTAComponent from '../Components/CTAComponent';
import FooterComponent from '../Components/FooterComponent';
//Pages
import HomePageComponent from '../Pages/HomePageComponent';
import LoginPageComponent from '../Pages/LoginPageComponent';
import RegistrationPageComponent from '../Pages/RegistrationPageComponent';
import DigitalLibraryPageComponent from '../Pages/DigitalLibraryPageComponent';
import DigitalLibrarySingleDigitalBookComponent from '../Pages/DigitalLibrarySingleDigitalBookComponent';
import ContactUsPageComponent from '../Pages/ContactUsPageComponent';
import ProfilePageComponent from '../Pages/ProfilePageComponent';
import BookDonationPageComponent from '../Pages/BookDonationPageComponent';
import BookBurrowPageComponent from '../Pages/BookBurrowPageComponent';
import DigitalLibrarySingleAudioBookPage from '../Pages/DigitalLibrarySingleAudioBookPage';

function RouteComponent() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path='/bookhub' element={<HomePageComponent />} />
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/login' element={<LoginPageComponent />} />
          <Route path='/register' element={<RegistrationPageComponent />} />
          <Route path='/digital-library' element={<DigitalLibraryPageComponent />} />
          <Route
            path='/digitalbook/:bookid'
            element={<DigitalLibrarySingleDigitalBookComponent />}
          />
          <Route path='/audiobook/:bookid' element={<DigitalLibrarySingleAudioBookPage />} />
          <Route path='/contact-us' element={<ContactUsPageComponent />} />
          <Route path='/profile' element={<ProfilePageComponent />} />
          <Route path='/donate' element={<BookDonationPageComponent />} />
          <Route path='/burrow' element={<BookBurrowPageComponent />} />
        </Routes>

        <CTAComponent />
        <FooterComponent />
      </div>
    </Router>
  );
}

export default RouteComponent;

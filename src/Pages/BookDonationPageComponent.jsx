import { React } from 'react';
import { useSelector } from 'react-redux';
import regBannerImg from '../assets/regBannerImg.png';
import AudioBookDonationComponent from '../Components/DonationComponents/AudioBookDonationComponent';
import DigitalBookDonationComponent from '../Components/DonationComponents/DigitalBookDonationComponent';
import PaperDonationComponent from '../Components/DonationComponents/PaperDonationComponent';
import PhysicalBookDonationComponent from '../Components/DonationComponents/PhysicalBookDonationComponent';

function BookDonationPageComponent() {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <section id='hero'>
        <div className='m-5'>
          <div className='container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
            <div className='my-5 md:mx-10 md:w-3/4'>
              <h1 className='text-white text-2xl md:text-4xl mb-4 md:text-left'>Donate here</h1>
              <p className='text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block'>
                Bookhub is an online platform that connects book lovers and encourages the sharing
                and donation of books. Our goal is to make knowledge and learning accessible to
                everyone, regardless of their financial or physical constraints. With a diverse
                selection of books from around the world, our platform provides an opportunity for
                people to donate, share, and discover books of all genres. We believe that books are
                a valuable tool for learning and growth, and our mission is to promote literacy and
                education for all. Thank you for choosing Bookhub, where you're sure to find a book
                you love.
              </p>
              <p className='text-white text-[10px] md:text-xs mb-4 text-justify'>
                Bookhub is a unique and innovative platform that brings together book lovers from
                all walks of life. Our platform provides a space for individuals to not only
                discover new books and genres, but also to give back to the community by donating
                and sharing books. Our mission is to break down barriers and make books accessible
                to everyone, regardless of their financial or physical limitations. We believe that
                books hold immense power and are a vital tool for learning, growth, and personal
                development. By providing access to books, we aim to encourage literacy and promote
                a love for reading and learning. Whether you're an avid reader, a student, or just
                someone who appreciates the power of books, Bookhub is the perfect place for you.
              </p>
            </div>
            {/* <!-- Image --> */}
            <div className='md:w-1/4'>
              <img className='rounded-xl mx-auto' src={regBannerImg} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section id='DonationForm' className='p-5'>
        <div className='container shadow rounded-xl border-2 borer-grey'>
          {user?.role === 'user' && (
            <>
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'></div>
              </div>
              <PhysicalBookDonationComponent />
            </>
          )}

          {user?.role === 'admin' && (
            <>
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200'></div>
                </div>
              </div>
              <PaperDonationComponent />
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200'></div>
                </div>
              </div>
              <AudioBookDonationComponent />
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200'></div>
                </div>
              </div>
              <DigitalBookDonationComponent />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default BookDonationPageComponent;

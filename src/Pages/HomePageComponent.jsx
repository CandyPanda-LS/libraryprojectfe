import React from 'react';
import illustration from '../assets/illustration.png';

function HomePageComponent() {
  return (
    <div>
      <h1>
        {/* <!-- Hero Section --> */}
        <section id='hero'>
          {/* <!-- Flex Container --> */}
          <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
            {/* <!-- Left item --> */}
            <div className='flex flex-col  space-y-12 md:w-1/2'>
              <h1 className='max-w-md text-3xl font-bold text-center md:text-5xl md:text-left'>
                Bring everyone together to build better future for our children
              </h1>
              <p className='max-w-sm text-xs	text-justify text-center text-darkGrayishBlue md:text-left'>
                Bookhub is an online platform that enables to donate and share books. We provide a
                platform for people to donate, share, and explore books of all genres. Through our
                platform, you can donate books to people in need, share books with other readers,
                and explore a wide range of books from all around the world. At Bookhub, we believe
                that books are a powerful tool for knowledge and understanding. We are committed to
                providing access to books to everyone, regardless of their financial or physical
                limitations. With our platform, we strive to promote learning and literacy for all.
                Thank you for visiting Bookhub and we hope you will find something you love!
              </p>
              <div className='flex justify-center md:justify-start'>
                <a
                  href='/'
                  className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
                >
                  Get Started
                </a>
              </div>
            </div>
            {/* <!-- Image --> */}
            <div className='md:w-1/2'>
              <img width='110%' className='rounded-3xl' src={illustration} alt='' />
            </div>
          </div>
        </section>

        {/* <!-- Features Section --> */}
        <section id='features'>
          {/* <!-- Flex container --> */}
          <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
            {/* <!-- What's Different --> */}
            <div className='flex flex-col space-y-12 md:w-1/2'>
              <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                What's different about BookHub?
              </h2>
              <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                At Bookhub, we believe that books are a powerful tool for knowledge and
                understanding. We are committed to providing access to books to everyone, regardless
                of their financial or physical limitations. With our platform, we strive to promote
                learning and literacy for all. Our platform provides : Access to books in the open
                domain, Access to past papers, Ability to donate stationary and books for the
                needful, Ability to Burrow and share books with friends
              </p>
            </div>

            {/* <!-- Numbered List --> */}
            <div className='flex flex-col space-y-8 md:w-1/2'>
              {/* <!-- List Item 1 --> */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* <!-- Heading --> */}
                <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>01</div>
                  </div>
                </div>

                <div>
                  <h3 className='hidden mb-4 text-lg font-bold md:block'>
                    Donate and Recieve Books
                  </h3>
                  <p className='text-darkGrayishBlue'>
                    "BookHub" is a program that allows individuals to donate books in exchange for
                    receiving books. This program helps to promote literacy and the sharing of
                    knowledge while reducing waste by repurposing used books. It is a win-win
                    situation for both the donor and the recipient as the donor gets to clear their
                    space while the recipient gets to expand their library.
                  </p>
                </div>
              </div>

              {/* <!-- List Item 2 --> */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* <!-- Heading --> */}
                <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>02</div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>Digital library</h3>
                  </div>
                </div>

                <div>
                  <h3 className='hidden mb-4 text-lg font-bold md:block'>Digital library</h3>
                  <p className='text-darkGrayishBlue'>
                    A digital library that contains soft copies of books in the public domain is a
                    collection of digitized books that are free for anyone to access, use, and
                    distribute. These books are no longer under copyright protection and are
                    available to be downloaded in electronic format. The purpose of a digital
                    library of open-domain books is to provide access to knowledge and information
                    to a wider audience, promoting education and learning opportunities.
                  </p>
                </div>
              </div>

              {/* <!-- List Item 3 --> */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* <!-- Heading --> */}
                <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>03</div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Everything you need in one place
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className='hidden mb-4 text-lg font-bold md:block'>
                    Everything you need in one place
                  </h3>
                  <p className='text-darkGrayishBlue'>
                    Stop jumping from one service to another to communicate, store files, track
                    tasks and share documents. Manage offers an all-in-one team productivity
                    solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section id='testimonials'>
          {/* <!-- Container to heading and testm blocks --> */}
          <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            {/* <!-- Heading --> */}
            <h2 className='text-4xl font-bold text-center'>Meet the team behind the project</h2>
            {/* <!-- Testimonials Container --> */}
            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
              {/* <!-- Testimonial 1 --> */}
              <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                <img
                  src='https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/311304146_1826491177689758_7759219415339233677_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=Jxp00mqXGXUAX8ViStW&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfAatKBvwqVZkEXRRwLfVtS_a6BDjmd60cMU3YCBvwJF1Q&oe=63E6762C'
                  className='w-16 -mt-14 rounded-full'
                  alt=''
                />
                <h5 className='text-lg font-bold'>Shalika Pramod</h5>
                <p className='text-sm text-darkGrayishBlue'>
                  "The good of a book donation project lies in its ability to promote literacy,
                  share knowledge, and foster a love for reading, all while reducing waste and
                  creating a positive impact on communities and individuals."
                </p>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
                <img
                  src='https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/303116441_862583885126583_4062530546096845958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NLyVop0Et-4AX-98bgv&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfDQcBoeAfHn10DMiyuOPYgEcgcdXDnl1F-MYGH_J1A4LQ&oe=63E66850'
                  className='w-16 -mt-14 rounded-full'
                  alt=''
                />
                <h5 className='text-lg font-bold'>Yasuri Wickramasinghe</h5>
                <p className='text-sm text-darkGrayishBlue'>
                  "BookHub has the power to enrich lives and communities by promoting literacy,
                  encouraging a love of learning, and providing access to knowledge and information
                  to those who may not have had it otherwise."
                </p>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
                <img
                  src='https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-1/322401289_1362493651173275_8919209046353325038_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bCbG9kK85FUAX9Ecg-L&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfBFk9AaUd61YTb2gQ-mqP2EV6CtA1Ur_oleznFUbG9YYg&oe=63E6B120'
                  className='w-16 -mt-14 rounded-full'
                  alt=''
                />
                <h5 className='text-lg font-bold'>Lasal Hettiarachchi</h5>
                <p className='text-sm text-darkGrayishBlue'>
                  "Bookhub is a philanthropic endeavor that has the potential to improve lives and
                  communities. By sharing the gift of knowledge and literature, it promotes
                  education, creativity, and cultural understanding. Book donations can help build
                  libraries, provide access to information for those in need, and promote literacy
                  and lifelong learning."
                </p>
              </div>
            </div>
            {/* <!-- Button --> */}
            <div className='my-16'>
              <a
                href='/'
                className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
}

export default HomePageComponent;

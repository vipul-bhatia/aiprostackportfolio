import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import FeatImage04 from '@/public/images/features-03-image-04.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">Crafting Masterpieces, One Project at a Time!</h1>
            <p className="text-xl text-gray-400">Dive into our portfolio and witness the seamless blend of creativity, precision, and passion. Each project stands as a testament to our commitment to excellence, showcasing the diverse talents and unparalleled dedication of our freelance professionals. Join our growing list of satisfied clients who've transformed their visions into tangible results.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

{/* 1st item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Crash Detection Project" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
    <div className="md:pr-4 lg:pr-12 xl:pr-16">
      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Innovation That Saves Lives</div>
      <h3 className="h3 mb-3">ResQNotify: A Game-Changer in Safety</h3>
      <p className="text-xl text-gray-400 mb-4">Our standout project integrates advanced video analysis from dashcams or helmet-mounted GoPros to detect accidents. In the unfortunate event of a crash, immediate notifications are dispatched to loved ones, hospitals, and police stations, ensuring rapid response when seconds count.</p>
      <ul className="text-lg text-gray-400 -mb-2">
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Real-time Crash Detection & Reporting</span>
        </li>
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Immediate Alerts to Relatives & Close Ones</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Coordination with Nearby Hospitals & Police Stations</span>
        </li>
      </ul>
    </div>
  </div>
</div>


           {/* 2nd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Personal News Concierge" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Tailored News, Delivered!</div>
      <h3 className="h3 mb-3">Your Personal News Concierge</h3>
      <p className="text-xl text-gray-400 mb-4">Experience a uniquely curated News Recommendation System that aligns with your personal interests and reading habits. Say goodbye to irrelevant content; welcome news that truly resonates with you.</p>
      <ul className="text-lg text-gray-400 -mb-2">
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>AI-driven Personalization for Perfect Alignment</span>
        </li>
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Adaptive Feed: Daily Refreshes for Trending Stories</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Multiple APIs & Web Scraping for Holistic Coverage</span>
        </li>
      </ul>
    </div>
  </div>
</div>


         {/* 3rd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Parking System" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
    <div className="md:pr-4 lg:pr-12 xl:pr-16">
      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Automated Parking Solution</div>
      <h3 className="h3 mb-3">Smart License Plate Recognition</h3>
      <p className="text-xl text-gray-400 mb-4">We are shaping the future of parking with an innovative system that intelligently identifies vehicle license plates. It not only allocates parking spots, but also guides users seamlessly to their designated space through an app, powered by an advanced beacon system.</p>
      <ul className="text-lg text-gray-400 -mb-2">
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>License plate recognition for automated parking</span>
        </li>
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>App-guided navigation to designated spots</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Beacon system for real-time location tracking</span>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* 4th item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Disaster-Relevant Tweets Analysis" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Innovative Data Analysis</div>
      <h3 className="h3 mb-3">Disaster-Relevant Tweets Analysis</h3>
      <p className="text-xl text-gray-400 mb-4">Integration of advanced NLP models to identify and categorize tweets relating to disaster assistance. Simplifying data management and user experience with top-notch tools and frameworks.</p>
      <ul className="text-lg text-gray-400 -mb-2">
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Seamless Integration of NLP Model</span>
        </li>
        <li className="flex items-center mb-2">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>MongoDB for Efficient Data Storage and Retrieval</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>React Web Interface & FastAPI Integration</span>
        </li>
      </ul>
    </div>
  </div>
</div>



          </div>

        </div>
      </div>
    </section>
  )
}

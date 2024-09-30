import React from 'react'
import Image from 'next/image'

const OurServices = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-background">
      {/* Hero Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Crafting the Future of Technology
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Innovative solutions designed to accelerate your business.
        </p>
      </div>

      {/* Grid-like Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        
        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/technology.png" alt="Technology" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Cutting-Edge Technology
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We use the latest tools and technologies to create robust, scalable, and efficient solutions.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/innovation.png" alt="Innovation" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Innovation at Core
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our team thrives on innovation, delivering unique and creative solutions to complex problems.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/expert_team.png" alt="Expert Team" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Expert Team
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our professionals have deep expertise in various domains, bringing your vision to life.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/strategy.png" alt="Strategy" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Data-Driven Strategy
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We make decisions based on data to ensure your business growth and success.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/growth.png" alt="Growth" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Scalability & Growth
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our solutions are built with growth in mind, enabling seamless scalability.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image src="/images/support.png" alt="Support" width={64} height={64} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            24/7 Support
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We provide continuous support to ensure your business operations run smoothly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurServices

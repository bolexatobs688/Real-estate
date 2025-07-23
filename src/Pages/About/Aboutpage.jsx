import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Footer from "../../components/footer/Footer";

const Aboutpage = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center overflow-hidden w-full px-4 md:px-20 lg:px-32"
        style={{
          backgroundImage: "url(/header_img.png)",
        }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C9A041] mb-4 pt-20">
            Our Vision
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            To become the most trusted and innovative real estate brokerage in
            Nigeria, known for exceptional service delivery and client
            satisfaction.
          </p>
        </div>
      </div>

      <div className="bg-[#152515] py-16 px-4 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Right Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/build2_img.jpeg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Left Side Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#C9A041] mb-4">
              Our Mission
            </h2>
            <p className="text-white text-lg leading-relaxed">
              To deliver expert-driven property solutions through seamless
              transactions, personalized service, and long-term relationship
              building with clients and stakeholders.
            </p>
          </div>
        </div>
      </div>
      <section className="relative bg-[#152515] text-white py-20 px-6 md:px-20 lg:px-32 overflow-hidden">
        {/* Watermark Background Logo - Smaller */}
        <img
          src="/logo_img.png"
          alt="Hands Holding Mark Sign"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               opacity-5 w-60 h-60 object-contain z-0 pointer-events-none"
        />

        {/* Content Overlay */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center text-[#C9A041] mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-12 text-right">
              <div>
                <h3 className="text-2xl font-semibold text-[#C9A041] mb-2">
                  INTEGRITY
                </h3>
                <p>
                  Utilizing modern tools, market intelligence, and technology to
                  deliver smart property solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#C9A041] mb-2">
                  COLLABORATIONS
                </h3>
                <p>
                  Working hand-in-hand with clients and partners to achieve
                  shared success.
                </p>
              </div>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:block" />

            {/* Right Column */}
            <div className="flex flex-col gap-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-[#C9A041] mb-2">
                  INNOVATIONS
                </h3>
                <p>
                  We build trust through honesty, fairness, and transparency.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#C9A041] mb-2">
                  EXCELLENCE
                </h3>
                <p>
                  Committed to delivering exceptional results in every
                  transaction, big or small.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#152515] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex flex-col items-center gap-6">
            {/* Top Gold Bar with Text */}
            <div className="w-full bg-[#C9A041] py-3 text-center rounded-t-lg">
              <p className="text-black font-semibold text-lg uppercase">
                Thank You
              </p>
            </div>

            {/* Center Image */}
            <img
              src="/our mission.jpeg" // Replace with your image path
              alt="Thank You"
              className="w-full h-auto object-contain max-w-sm"
            />

            {/* Bottom Gold Bar without Text */}
            <div className="w-full bg-[#C9A041] h-8 rounded-b-lg" />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Top Line */}
            {/* Top Line */}
            <div className="h-1 w-60 bg-[#C9A041]" />

            {/* Contact Info */}
            <h2 className="text-3xl font-bold text-[#C9A041]">Get in Touch</h2>
            <div className="space-y-4 text-white text-lg">
              <p>
                📞 Call:{" "}
                <span className="text-[#C9A041]">+234 801 234 5678</span>
              </p>
              <p>
                ✉️ Email:{" "}
                <span className="text-[#C9A041]">info@clientpoint.ng</span>
              </p>
              <p>
                🌐 Website:{" "}
                <span className="text-[#C9A041]">www.clientpoint.ng</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center w-full bg-[#152515] text-white py-14 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image */}
          <img
            src="/background_img.jpeg"
            alt="About Client Point"
            className="w-full sm:w-1/2 max-w-lg rounded-lg"
          />

          {/* Content */}
          <div className="flex flex-col items-center md:items-start max-w-xl">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full mb-8">
              <div>
                <p className="text-4xl font-semibold text-[#C9A041]">10+</p>
                <p className="text-white">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#C9A041]">12+</p>
                <p className="text-white">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#C9A041]">20+</p>
                <p className="text-white">Mn.sq. ft. Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#C9A041]">25+</p>
                <p className="text-white">Ongoing Projects</p>
              </div>
            </div>

            {/* About Company Text */}
            <p className="text-white leading-relaxed">
              Client Point Properties is a full-service real estate brokerage
              firm dedicated to helping individuals and organizations navigate
              the real estate market with confidence. We specialize in the
              sales, leasing, and acquisition of premium residential and
              commercial properties, as well as investment advisory, joint
              ventures, and property consulting.
              <br />
              <br />
              Whether you're buying your dream home, investing in properties, or
              looking to lease a space, we ensure your journey is smooth,
              profitable, and transparent. At Client Point, we combine deep
              market knowledge with a client-first approach, making every
              transaction a partnership built on trust, integrity, and results.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="mt-8 inline-block px-6 py-3 rounded-full font-semibold 
              bg-[#152515] text-white border-2 border-[#C9A041] 
              hover:bg-[#1f3b1f] hover:border-[#d9aa45] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6 px-4 md:px-20 lg:px-32">
        <section className="bg-[#152515] text-white py-16 px-6 md:px-20 lg:px-32">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Client Point Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box 1 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                ✅ Client-Centric Approach
              </h3>
              <p>
                We listen, we understand, and we deliver solutions tailored to
                your unique real estate needs.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                ✅ Professional Expertise
              </h3>
              <p>
                Our team is composed of experienced brokers, property
                consultants, and valuation experts committed to excellence.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                ✅ Maximum Market Visibility
              </h3>
              <p>
                We leverage both digital platforms and traditional marketing to
                ensure your property reaches the right audience.
              </p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                ✅ Transparency & Efficiency
              </h3>
              <p>
                We simplify the process, maintain open communication, and
                provide updates every step of the way.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#152515] text-white py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property Valuation & Investment Advisory
            </h3>
            <p>
              Providing accurate property valuation and guiding investment
              decisions with clarity and confidence.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property & Facility Management
            </h3>
            <p>
              Ensuring that your assets are well-managed, maintained, and
              delivering long-term returns.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property Sales & Leasing
            </h3>
            <p>
              Connecting buyers and tenants with the right properties while
              maximizing value for owners.
            </p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Real Estate Brokerage
            </h3>
            <p>
              Expert representation in property transactions, whether you're
              buying, selling, or renting.
            </p>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Joint Venture Advisory
            </h3>
            <p>
              Facilitating strategic collaborations between landowners,
              investors, and developers.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Back to Home Link */}
      <div className="text-center my-12">
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Aboutpage;

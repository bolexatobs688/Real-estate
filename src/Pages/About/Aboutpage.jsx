import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Watermark = () => (
  <img
    src="Client_black_Logo png.png"
    alt="Watermark Logo"
    className="absolute bottom-4 left-4 opacity-10 w-32 h-32 object-contain z-0 pointer-events-none"
  />
);

const Aboutpage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden w-full px-4 md:px-20 lg:px-32"
        style={{ backgroundImage: "url(/header_img.png)" }}
        id="Header"
      >
        <Watermark />
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 z-10 relative">
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

      {/* Our Mission Section (No watermark here) */}
      <div className="bg-[#152515] py-20 px-4 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/build2_img.jpeg"
              alt="Our Mission"
              className="w-full h-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#C9A041] mb-4">
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

      {/* Core Values Section */}
      <section className="relative bg-[#152515] text-white py-20 px-6 md:px-20 lg:px-32 overflow-hidden">
        <Watermark />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center text-[#C9A041] mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
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

            <div className="hidden md:block" />

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

      {/* About Company Section */}
      <div className="relative w-full bg-[#152515] text-white py-16 md:px-20 lg:px-32">
        <Watermark />
        <h2 className="text-4xl font-bold text-center text-[#C9A041] mb-12">
          About Our Company
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <img
            src="/background_img.jpeg"
            alt="About Client Point"
            className="w-full sm:w-1/2 max-w-lg h-[500px] object-cover rounded-lg shadow-lg"
          />

          <div className="flex flex-col items-center md:items-start max-w-xl">
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

      {/* Why Choose Us Section */}
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between gap-6 px-4 md:px-20 lg:px-32">
        <Watermark />
        <section className="bg-[#152515] text-white py-16 px-6 md:px-20 lg:px-32 w-full">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Client Point Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold">
                ✅ Client-Centric Approach
              </h3>
              <p>
                We listen, understand, and tailor real estate solutions for your
                needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                ✅ Professional Expertise
              </h3>
              <p>
                Our team brings years of experience and deep market insight to
                every deal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                ✅ Maximum Market Visibility
              </h3>
              <p>
                Your property gets optimal exposure across all marketing
                platforms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                ✅ Transparency & Efficiency
              </h3>
              <p>
                We ensure smooth transactions with clear, constant
                communication.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Core Services */}
      <section className="relative bg-[#152515] text-white py-16 px-6 md:px-20 lg:px-32">
        <Watermark />
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property Valuation & Investment Advisory
            </h3>
            <p>Accurate valuation and data-driven investment guidance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property & Facility Management
            </h3>
            <p>Long-term care and optimization of your assets.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Property Sales & Leasing
            </h3>
            <p>Maximize value whether buying, selling, or renting.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Real Estate Brokerage
            </h3>
            <p>Expert representation for stress-free deals.</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[#C9A041]">
              Joint Venture Advisory
            </h3>
            <p>We facilitate strategic partnerships between stakeholders.</p>
          </div>
        </div>
      </section>

      {/* Thank You Section (No watermark) */}
      <section className="bg-[#152515] text-white py-28 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="w-full bg-[#C9A041] py-6 text-center rounded-t-lg">
              <p className="text-black font-bold text-2xl uppercase">
                Thank You
              </p>
            </div>

            <img
              src="/our mission.jpeg"
              alt="Thank You"
              className="w-full h-[450px] object-cover max-w-3xl rounded-lg shadow-lg"
            />

            <div className="w-full bg-[#C9A041] h-10 rounded-b-lg" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="h-1 w-72 bg-[#C9A041]" />
            <h2 className="text-4xl font-bold text-[#C9A041]">Get in Touch</h2>
            <div className="space-y-6 text-white text-lg">
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

      {/* Back to Home */}
      <div className="text-center my-12">
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutpage;


function About() {
  return (
    <section className="bg-green-50 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">
          About FreshCo 🌱
        </h1>



        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          FreshCo is a trusted organic food platform dedicated to bringing
          farm-grown, chemical-free vegetables and fruits directly to your
          doorstep. We collaborate closely with local farmers who follow
          sustainable and eco-friendly farming practices, ensuring that every
          product you receive is fresh, safe, and nutritious.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Our mission is to promote healthier lifestyles by making organic food
          accessible and affordable for everyone. From daily essentials to
          seasonal produce, FreshCo ensures fair pricing, premium quality,
          and timely delivery—supporting both farmers and conscious consumers.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At FreshCo, we believe that healthy living begins with mindful
          food choices. By choosing organic and locally grown produce,
          you are not only investing in your health but also supporting
          sustainable agriculture and a greener future.
        </p>


        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Free Delivery */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
         
            <div className="text-4xl mb-4"><img className="w-9 h-9 flex mx-auto items-center justify-center" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-delivery-van-postal-service-flaticons-flat-flat-icons-2.png" /></div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Free Delivery
            </h3>
            <p className="text-gray-600">
              We offer free and reliable delivery so you can enjoy fresh
              produce without worrying about extra costs or delays.
            </p>
          </div>

          {/* Always Fresh */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          
            <div className="text-4xl mb-4"><img className="w-9 h-9 flex mx-auto items-center justify-center" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/external-lettuce-fruits-and-vegetables-wanicon-lineal-color-wanicon.png" /></div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Always Fresh
            </h3>
            <p className="text-gray-600">
              Our products are harvested daily and delivered directly from
              farms to ensure maximum freshness and natural taste.
            </p>
          </div>

          {/* Premium Quality */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          
            <div className="text-4xl mb-4"><img className="w-9 h-9 flex mx-auto items-center justify-center" src="https://img.icons8.com/arcade/50/star.png" /></div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Every item goes through quality checks to meet our high standards,
              guaranteeing premium organic produce for your family.
            </p>
          </div>

        </div>


      </div>
    </section>
  );
}

export default About;
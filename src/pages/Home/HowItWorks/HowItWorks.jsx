import icon from "../../../assets/bookingIcon.png"
const HowItWorks = () => {
    return (
        <section className="mx-auto max-w-6xl py-16 px-4 md:px-10 bg-white rounded-2xl">
      <div className="max-w-4xl  mb-10">
        <h2 className="text-3xl font-bold mb-2">How It Works</h2>
      </div>

      <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white shadow-2xl rounded-2xl p-6  hover:shadow-lg  hover:bg-primary transition-all duration-300">
      <div className="text-4xl  mb-4">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl text-secondary font-semibold mb-2 ">Booking Pick & Drop</h3>
      <p className="text-#rgba(96, 96, 96, 1)">From personal packages to business shipments — we deliver on time, every time.</p>
    </div>
        <div className="bg-white shadow-2xl rounded-2xl p-6  hover:shadow-lg  hover:bg-primary transition-all duration-300">
      <div className="text-4xl  mb-4">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl text-secondary font-semibold mb-2 ">Cash On Delivery</h3>
      <p className="text-#rgba(96, 96, 96, 1)">From personal packages to business shipments — we deliver on time, every time.</p>
    </div>
        <div className="bg-white shadow-2xl rounded-2xl p-6  hover:shadow-lg  hover:bg-primary transition-all duration-300">
      <div className="text-4xl  mb-4">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl text-secondary font-semibold mb-2 ">Delivery Hub</h3>
      <p className="text-#rgba(96, 96, 96, 1)">From personal packages to business shipments — we deliver on time, every time.</p>
    </div>
        <div className="bg-white shadow-2xl rounded-2xl p-6  hover:shadow-lg  hover:bg-primary transition-all duration-300">
      <div className="text-4xl  mb-4">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl text-secondary font-semibold mb-2 ">Booking SME & Corporate</h3>
      <p className="text-#rgba(96, 96, 96, 1)">From personal packages to business shipments — we deliver on time, every time.</p>
    </div>
      </div>
    </section>
    );
};

export default HowItWorks;
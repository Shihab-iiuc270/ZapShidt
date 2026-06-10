
const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg  hover:bg-primary transition-all duration-300">
      <div className="text-4xl  mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className="text-#rgba(96, 96, 96, 1)">{description}</p>
    </div>
  );
};

export default ServiceCard;
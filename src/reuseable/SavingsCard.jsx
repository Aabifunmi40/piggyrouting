
const SavingsCard = ({ title, description, linkText, onClick ,icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md w-72 h-[90vh] w-[40%]">
    <h2 className="text-xl font-bold text-blue-800">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
    <a href="#" className="text-blue-500 mt-4 inline-block" onClick={onClick}> {icon} { linkText}  </a>
  </div>
);

export default SavingsCard;
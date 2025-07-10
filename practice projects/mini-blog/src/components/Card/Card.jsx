const Card = ({ icon: Icon, iconClassName, title, description }) => {
  return (
    <div className="bg-[#F7F7F7] p-8 rounded-xl text-center hover:translate-y-2 transition-transform flex flex-col items-center gap-2">
      <div className={`text-4xl mb-4 ${iconClassName}`}>
        {typeof Icon === "function" ? <Icon /> : Icon}
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
      <p className="text-[#1A1A1A]/70">{description}</p>
    </div>
  );
};

export default Card;

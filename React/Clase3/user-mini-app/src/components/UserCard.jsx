function UserCard({ name, email, image, country, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer p-6 group"
    >
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <img
            src={image}
            alt={`${name} - Miembro del equipo`}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-200 
                       group-hover:ring-blue-300 transition-all duration-300"
          />
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full 
                          border-2 border-white flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-slate-800 mb-1 line-clamp-1">
          {name}
        </h3>

        {/* Subtitle/Role */}
        {subtitle && (
          <p className="text-sm text-blue-600 font-medium mb-2">{subtitle}</p>
        )}

        {/* Country */}
        <p className="text-sm text-slate-500 mb-3 flex items-center">
          <span className="inline-block w-4 h-4 mr-1">🌍</span>
          {country}
        </p>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          onClick={(e) => e.stopPropagation()}
          className="text-sm text-slate-600 hover:text-blue-600 transition-colors 
                     truncate w-full px-2"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

export default UserCard;

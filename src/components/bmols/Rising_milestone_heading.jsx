import React from 'react'

const Rising_milestone_heading = ({ title_name, description, icon, iconBgColor, iconTextColor, className }) => {
    return (
        <>
            <div className={`bg-linear-to-r from-teal-50 to-slate-50 rounded-xl border-2 border-teal-200 p-8 mb-8 ${className}`}>
                <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 ${iconBgColor} rounded-lg shrink-0 ${iconTextColor}`}>
                        {icon && React.createElement(icon, { className: "w-8 h-8" })}
                    </div>
                    <div className="flex-1">
                        <h3 className="max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-teal-900 mb-3">
                            {title_name}
                        </h3>
                        <p className="text-lg text-teal-800 mb-4 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rising_milestone_heading
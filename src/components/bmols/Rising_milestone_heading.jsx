import React from 'react'

const Rising_milestone_heading = ({ title_name, description, icon, iconBgColor, iconTextColor, bgColorGradient, borderColor, heading_text_color, description_text_color, className }) => {
    return (
        <>
            <div className={`bg-linear-to-r ${bgColorGradient} rounded-xl border-2 ${borderColor} p-8 mb-8 ${className}`}>
                <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 ${iconBgColor} rounded-lg shrink-0 ${iconTextColor}`}>
                        {icon && React.createElement(icon, { className: "w-8 h-8" })}
                    </div>
                    <div className="flex-1">
                        <h3 className={`max-xs:text-lg xs:text-xl sm:text-3xl font-bold ${heading_text_color} mb-3`}>
                            {title_name}
                        </h3>
                        <p className={`text-lg ${description_text_color} mb-4 leading-relaxed`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rising_milestone_heading
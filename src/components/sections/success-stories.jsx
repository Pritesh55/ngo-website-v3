import { Card } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Star, IndianRupee } from 'lucide-react';

export function SuccessStoriesSection() {
    const stories = [
        {
            name: 'Anitaben Sheth',
            role: 'Women Entrepreneur',
            year: '2014-15',
            title: 'Manufacturing Innovation in Khakhra',
            description:
                'Anitaben pursued her entrepreneurial dreams with MKT support, establishing a successful Khakhra manufacturing unit in Khakhra in 2014-15.',
            metrics: [
                { label: 'Employment Generated', value: '26+', icon: Users },
                { label: 'Annual Turnover', value: '68,00,000+', icon: TrendingUp },
                { label: 'Wage Paid', value: '18,70,000+', icon: IndianRupee },
            ],
            achievement: 'Awarded by State office KVIC, A\'bad',
            background: 'from-emerald-50 to-slate-50',
            accentColor: 'emerald',
            iconColorClass: 'text-emerald-600',
            textColorClass: 'text-emerald-700',
            badgeBg: 'bg-emerald-100',
            badgeBorder: 'border-emerald-200',
            badgeText: 'text-emerald-700',
        },
        {
            name: 'Saiyed Mohmad Ayaz',
            role: 'Minority Entrepreneur',
            year: '2010-11',
            title: 'Ready-Made Apparels Manufacturing',
            description:
                'Saiyed established a ready-made apparels manufacturing unit in 2010-11 with MKT support, creating sustainable livelihoods and economic growth.',
            metrics: [
                { label: 'Employment Generated', value: '40+', icon: Users },
                { label: 'Annual Turnover', value: '1,20,00,000+', icon: TrendingUp },
                { label: 'Wage Paid', value: '28,00,000+', icon: IndianRupee },
            ],
            achievement: 'Awarded by MSME National Award',
            background: 'from-blue-50 to-slate-50',
            accentColor: 'blue',
            iconColorClass: 'text-blue-600',
            textColorClass: 'text-blue-700',
            badgeBg: 'bg-blue-100',
            badgeBorder: 'border-blue-200',
            badgeText: 'text-blue-700',
        },
    ];

    return (
        <section className="py-20 px-4 bg-glow-cool border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                        <Star className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">IMPACT & TRANSFORMATION</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Changing Lives with MKT
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Real stories of transformation. Meet the entrepreneurs who have built thriving businesses with support from Manav Kalyan Trust, creating jobs and changing their communities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {stories.map((story, index) => (
                        <div key={index} className="group">
                            <Card
                                className={`bg-linear-to-br ${story.background} border-slate-200 hover:border-slate-300 overflow-hidden h-full transition-all duration-300 hover:shadow-xl`}
                            >
                                <div className="p-8">
                                    {/* Header */}
                                    <div className="mb-6 pb-6 border-b border-slate-200">
                                        <p className="text-sm font-bold text-slate-500 capitalize tracking-wider mb-2">
                                            Success Story {index + 1} • {story.year}
                                        </p>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                            {story.name}
                                        </h3>
                                        <p className={story.textColorClass + ' text-sm font-semibold'}>
                                            {story.role}
                                        </p>
                                    </div>

                                    {/* Story Title and Description */}
                                    <div className="mb-6">
                                        <h4 className="max-xs:text-sm xs:text-base sm:text-lg font-bold text-slate-900 mb-2">
                                            {story.title}
                                        </h4>
                                        <p className="text-slate-700 leading-relaxed">
                                            {story.description}
                                        </p>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="flex flex-wrap justify-evenly gap-6 mb-6 p-4 bg-white rounded-lg border border-slate-200">
                                        {story.metrics.map((metric, idx) => {
                                            const MetricIcon = metric.icon;
                                            return (
                                                <div key={idx} className="text-center">
                                                    <div className="flex justify-center mb-2">
                                                        <MetricIcon className={story.iconColorClass} style={{ width: '20px', height: '20px' }} />
                                                    </div>
                                                    <p className={`text-sm font-bold ${story.textColorClass} mb-1`}>
                                                        {metric.value}
                                                    </p>
                                                    <p className="text-xs text-slate-600 text-wrap">
                                                        {metric.label}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Achievement Badge */}
                                    <div
                                        className={`inline-flex items-center gap-2 px-4 py-2 ${story.badgeBg} rounded-lg border ${story.badgeBorder}`}
                                    >
                                        <Star className={story.iconColorClass} style={{ width: '16px', height: '16px' }} />
                                        <span className={`text-sm font-semibold ${story.badgeText}`}>
                                            {story.achievement}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Impact Summary */}
                <Card className="bg-linear-to-r from-orange-50 via-white to-red-50 text-slate-900 border-orange-100 p-8 shadow-md">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-4xl font-extrabold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-2">66+</p>
                            <p className="text-slate-600 font-medium">Total Employment Created</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-2">1.88 Cr+</p>
                            <p className="text-slate-600 font-medium">Combined Annual Turnover</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-2">46.7 L+</p>
                            <p className="text-slate-600 font-medium">Total Wages Distributed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-2">2</p>
                            <p className="text-slate-600 font-medium">National Awards Won</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}


import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { TrendingUp, Package, AlertTriangle, DollarSign } from 'lucide-react';

export default function Dashboard() {
    // Mock stats for valid visuals before backend connection is populated
    const [stats, setStats] = useState([
        { label: 'Total Sales Today', value: '$1,234', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Low Stock Items', value: '5', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-100' },
        { label: 'Total Products', value: '142', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Revenue Growth', value: '+12%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
    ]);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                <p className="text-gray-500">Welcome back, here is what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${stat.bg} p-3 rounded-xl`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className="text-sm font-medium text-gray-400">Today</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Sales Mockup */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Sales</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                                        #{i}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Customer #{100 + i}</p>
                                        <p className="text-xs text-gray-500">2 mins ago</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800">$45.00</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Low Stock Alert Mockup */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Low Stock Alerts</h3>
                    <div className="space-y-4">
                        {['Paracetamol', 'Amoxicillin'].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                                <div className="flex items-center gap-4">
                                    <AlertTriangle className="text-red-500 w-5 h-5" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{item}</p>
                                        <p className="text-xs text-red-500">Only 5 left</p>
                                    </div>
                                </div>
                                <button className="text-xs bg-white text-red-600 px-3 py-1.5 rounded-lg border border-red-200 font-medium hover:bg-red-50">
                                    Restock
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

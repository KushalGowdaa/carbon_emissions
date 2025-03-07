import React, {useState, useEffect} from "react";
import { DashboardData } from "../components/API";
import Chart from "chart.js/auto";
import {Line, Bar, Pie} from 'react-chartjs-2';
import GapAnalysis from "./GapAnalysis";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        DashboardData().then((data) => setDashboardData(data));
    }, []);

    if (!dashboardData) return <p>Loading...</p>;

    const emissionData = dashboardData.emission_breakdown || {};

    const emissionsBreakdownData = {
        labels: ['Excavation', 'Transportation', 'Fuel Usage', 'Electricity'],
        datasets: [
            {
                label: 'emissions (kg CO2e)',
                data: [
                    emissionData.excavation_tonnes || 0,
                    emissionData.transportation_cost || 0,
                    emissionData.fuel_usage_liters || 0,
                    emissionData.electricity_usage_kwh || 0,
                ],
                backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
            },
        ],
    };

    const carbonSinkVersusEmissionData = {
        labels: ["Carbon Sink", "Emissions Gap"],
        datasets: [
            {
                label: "Comparison (kg CO2e)",
                data: [
                    dashboardData.carbon_sink_capacity || 0,
                    dashboardData.gap_value || 0,
                ],
                backgroundColor: ["#2ecc71", "#e74c3c"],
            },
        ],
    };

    const printReport = () => {
        window.print();
    };

    return (
        <div className="d-flex justify-content-center flex-column" style={{
            background: "linear-gradient(135deg, #f0fdf4, #d9f7be)",
        }}>
        <div className="container d-flex justify-content-center flex-column" >
            <div className="bg-white p-4">
                <h1 className="d-flex justify-content-center text-success">QuantC</h1>
                <p className="text-success d-flex justify-content-center">Quantification of Carbon emissions</p>
            </div>
            <div className="row">
                <div className="col card m-3">
                    <div>
                        <h2 className="d-flex justify-content-center text-success m-3">Emission Breakdown</h2>
                        <Bar className="card m-3 h-100" data={emissionsBreakdownData} />
                    </div>
                </div>
                <div className="col card m-3">
                    <h2 className="d-flex justify-content-center text-success m-3">Carbon Sinks vs Emissions Gap</h2>
                    <Pie className="card m-3" data={carbonSinkVersusEmissionData} />
                </div>
            </div>


            <div className="card ">
                <GapAnalysis></GapAnalysis>
            </div>

            <div className="d-flex felx-column justify-content-center m-3">
                <button className="btn btn-success text-white w-50 fw-bold" onClick={printReport}>Print Summary Report</button>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;

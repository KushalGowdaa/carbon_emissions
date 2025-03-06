import React, {useState, useEffect} from "react";
import { getCarbonSink, createCarbonSinkRecord } from "../components/API";
import {useNavigate} from 'react-router-dom';

const CarbonSink = () => {

  const navigate = useNavigate();

    const [sinks, setSinks] = useState([]);
    const [newSink, setNewSink] = useState({
        mine_location: 'other',
        forest_area_hectares: '',
    });

    useEffect(()=>{
        getCarbonSink().then(data => setSinks(data));
    }, []);

    const handleChange = (e) => {
      const {name, value} = e.target
        setNewSink({
            ...newSink,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          console.log("Submitting Data:", newSink);  // Debug Payload
          await createCarbonSinkRecord(newSink);
          const data = await getCarbonSink();
          setSinks(data);
          alert("Carbon Sink record created successfully!");
          navigate('/Dashboard');
      } catch (error) {
          console.error("Error Details:", error.response.data);  // Django Error Details
          alert("Failed to create Carbon Sink record.");
      }
    };

    return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #f0fdf4, #d9f7be)"
      }}
    >
      {/* Project Name */}
      <h1 className="text-success text-center display-3 mb-4">
        QuantC
      </h1>

      {/* Responsive Card Container */}
      <div className="card shadow w-50">
        <div className="card-header bg-white text-success text-center" style={{ borderRadius: "15px 15px 0 0"}}>
          <h2>Carbon Sink Estimation</h2>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>

            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="mine_location"
                name="mine_location"
                onChange={handleChange}
                required
              >
                <option value="">Select Mine Location</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="assam">Assam</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="mine_type">Mine Location</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="areaHectares"
                name="forest_area_hectares"
                placeholder="forest area in hectares"
                onChange={handleChange}
                required
              />
              <label htmlFor="areaHectares">Forest area (Hectares)</label>
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold">
              Calculate Carbon Sink
            </button>
          </form>
        </div>
        <div className="card-body p-4">
        <h2>Existing Carbon Sinks</h2>
            <ul>
                {sinks.map((sink) => (
                    <li key={sink.id}>
                        <strong>Location:</strong> {sink.mine_location.toUpperCase()} | 
                        <strong> Area:</strong> {sink.forest_area_hectares} ha | 
                        <strong> Sequestration Rate:</strong> {sink.sequestration_rate} kg CO2e/ha/year |
                        <strong> Total Sequestration:</strong> {sink.total_sequestration} kg CO2e
                    </li>
                ))}
            </ul>
        </div>
        </div>
    </div>
    );
};

export default CarbonSink;
import React, {useState, useEffect} from "react";
import { getEmissions, CreateEmissionRecord } from "../components/API";
import {useNavigate} from 'react-router-dom';

const Emissions = () =>{

    const navigate = useNavigate();

    const [emissions, setEmissions] = useState([]);
    const [newEmission, setNewEmission] = useState({
        excavation_tonnes: '',
        excavation_hours: '',
        transportation_cost: '',
        fuel_usage_liters:'',
        electricity_usage_kwh: '',
    });

    useEffect(()=> {
        getEmissions().then(data => setEmissions(data));
    }, []);

    const handleChange = (e) => {
        setNewEmission({
            ...newEmission,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await CreateEmissionRecord(newEmission);
        getEmissions().then(data => setEmissions(data));

        navigate('/CarbonSink');
    };

    return (
      <div className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #f0fdf4, #d9f7be)"
      }}
      >
        <h1 className="text-success text-center display-3 mb-4">
          QuantC
        </h1>

        <div className="card shadow w-50">
          <div className="card-header bg-white text-success text-center" style={{ borderRadius: "15px 15px 0 0"}}>
            <h2>Enter Emission Details</h2>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                type="number"
                className="form-control"
                id="excavationTonnes"
                name="excavation_tonnes"
                placeholder="Excavation in tonnes"
                onChange={handleChange}
                required
                />
                <label htmlFor="excavationTonnes">Excavation (Tonnes)</label>
              </div>

              <div className="form-floating mb-3">
                <input
                type="number"
                className="form-control"
                id="excavationHours"
                name="excavation_hours"
                placeholder="Excavation in tonnes"
                onChange={handleChange}
                required
                />
                <label htmlFor="excavationHours">Excavation time (hours)</label>
              </div>
              
              <div className="form-floating mb-3">
                <input type="number"
                className="form-control"
                id="fuelUsage"
                name="fuel_usage_liters"
                placeholder="Fuel Usage in Liters"
                onChange={handleChange}
                required/>
                <label htmlFor="fuelUsage">Fuel usage (Liters)</label>
              </div>

              <div className="form-floating mb-3">
                <input
                type="number"
                className="form-control"
                id="transportationCost"
                name="transportation_cost"
                placeholder="Cost for transport"
                onChange={handleChange}
                required
                />
                <label htmlFor="transportationCost">Transport (km)</label>
              </div>

              <div className="form-floating mb-3">
                <input
                type="number"
                className="form-control"
                id="ElectricityCost"
                name="electricity_usage_kwh"
                placeholder="Electricity Used"
                onChange={handleChange}
                required
                />
                <label htmlFor="transportationCost">Electricity Usage (kwh)</label>
              </div>

              <button type="submit" className="btn btn-success w-100 fw-bold">
                Submit
              </button>
            </form>

            <h2>Emission Records</h2>
            <ul className="list-group">
                {emissions.map((emission) => (
                    <li className="list-group-item" key={emission.id}>
                        Record #{emission.id}: {emission.total_emissions_kg} kg CO2e
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
    );
};

export default Emissions;
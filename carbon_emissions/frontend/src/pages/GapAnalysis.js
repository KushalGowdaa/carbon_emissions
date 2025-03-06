import React, {useState} from "react";
import { performGapAnalysis } from "../components/API";

const GapAnalysis = () => {
    const [gapResult, setGapResult] = useState(null);

    const handlePerformAnalysis = async () => {
        const result = await performGapAnalysis();
        setGapResult(result);
    };

    return (
        <div className="d-flex justify-content-center flex-column align-items-center m-3">
            <h1 className="text-success">Gap Analysis</h1>
            <button className="btn btn-success w-50 fw-bold m-3" onClick={handlePerformAnalysis}>Perform Gap Analysis</button>

            {gapResult && (
                <div className="container card d-flex justify-content-center shadow w-100 m-3">
                    <h2 className="d-flex justify-content-center fw-bold m-4">Gap Analysis Result</h2>
                    <ul className="list-group row">
                    <li className="list-group-item">
                        <p className="d-flex justify-content-center"><strong className="text-success"><h2>Gap&nbsp;</h2></strong></p> <p className="d-flex justify-content-center">{gapResult.gap_value} kg CO2e</p>
                    </li>
                    <li className="list-group-item">
                        <p className="d-flex justify-content-center"><strong className="text-success"><h2>Recommendations</h2></strong></p> <p className="d-flex justify-content-center">{gapResult.recommendations}</p>
                    </li>

                    <li className="list-group-item">
                        <p className="d-flex justify-content-center text-success fw-bold"><h2>Shortfall Areas</h2></p>
                        {gapResult.shortfall_areas.length > 0 ? (
                            <ul className="list-group">
                                {gapResult.shortfall_areas.map((area, index) => (
                                    <li className="list-group-item" key={index}>
                                        <p><strong className="text-success">Area:&nbsp;</strong> {area.area}</p>
                                        <p><strong className="text-success">Issue:&nbsp;</strong> {area.issue}</p>
                                        <p><strong className="text-success">Suggestion:&nbsp;</strong> {area.suggestion}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No shortfalls detected.</p>
                        )}
                    </li>

                    </ul>
                </div>
            )}
        </div>
    );
};

export default GapAnalysis;
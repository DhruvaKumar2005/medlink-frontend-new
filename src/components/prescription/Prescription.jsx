import React from "react";
import { FileText, Activity, Stethoscope, Pill } from "lucide-react";
import "./prescription.css";

const Prescription = () => {
  return (
    <div className="prescription-container">
      <div className="header">
        <h2>Prescriptions &gt; Add new</h2>
        <button className="template-type">Template Type</button>
      </div>

      <div className="prescription-card">
        <div className="doctor-info">
          <div>
            <h3>Dr Rashid Khan</h3>
            <p>MBBS, FCPS, PGT (Diploma)</p>
            <p>Assistant professor, Medicine</p>
            <p>Popular diagnostic center and hospital, Mirpur 10</p>
            <p>Email: doctor@example.com</p>
            <p>Cell: +01923347324, +01923347324</p>
            <p>BMDC: De8674</p>
          </div>
          <div className="hospital-logo">
            <img src="/api/placeholder/100/100" alt="Hospital Logo" />
            <p>MedLinkRx</p>
          </div>
        </div>

        <div className="patient-info">
          <p>Patient: Abdus Sattar Rahim, Age: 35 years, Weight: 55kg</p>
          <p>Date: 13 September, 2022 Time: 10:20 am</p>
        </div>

        <div className="prescription-content">
          <div className="left-column">
            <section>
              <h4>
                <FileText size={18} /> Chief Complaints
              </h4>
              <ul>
                <li>Chest pain & uncertain (for 5 days)</li>
                <li>Pain irregular</li>
                <li>No angina (for 10 days)</li>
                <li>Tiredness (for 1 month)</li>
                <li>Most of the time</li>
              </ul>
            </section>

            <section>
              <h4>
                <Activity size={18} /> History
              </h4>
              <ul>
                <li>DM (for 5 days)</li>
                <li>HTN/CAD (for 10 days)</li>
                <li>Cholesterol (for 1 month)</li>
                <li>Most of the time</li>
              </ul>
            </section>

            <section>
              <h4>
                <Stethoscope size={18} /> Diagnosis
              </h4>
              <ul>
                <li>Pop smear</li>
                <li>Pain irregular</li>
                <li>Lumbar puncture</li>
              </ul>
            </section>

            <section>
              <h4>
                <Activity size={18} /> Investigation
              </h4>
              <ul>
                <li>CBC</li>
                <li>Note here</li>
                <li>Blood grouping</li>
                <li>RBC Count</li>
                <li>Show note of the investigation</li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            <section>
              <h4>
                <Pill size={18} /> Medicine (Rx)
              </h4>
              <ol>
                <li>Tab. Pantonix 40 mg ---- bd PR</li>
                <li>In. Oserill 100 mg (Capsule) ---- 1+1 Pcs</li>
                <li>Tab. Pantonix 40 mg ---- bd PR</li>
              </ol>
            </section>

            <section>
              <h4>Advice</h4>
              {/* Add advice content here */}
            </section>

            <section>
              <h4>Follow up</h4>
              {/* Add follow up content here */}
            </section>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="save-send">Save & Send</button>
        <button>Preview</button>
        <button>Save as Template</button>
        <button onClick={window.print}>Print</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Prescription;

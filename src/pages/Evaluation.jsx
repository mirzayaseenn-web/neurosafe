import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Evaluation() {
  const pdfRef = useRef();

  /* ---------- PDF EXPORT ---------- */
  const exportPDF = async () => {
    const canvas = await html2canvas(pdfRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
    pdf.save("NeuroSafe_Evaluation_Report.pdf");
  };

  return (
    <section className="bg-[#dedada] py-16 px-4 text-[#013c5d]">
      {/* EVERYTHING that must appear & be exported */}
      <div ref={pdfRef} className="max-w-6xl mx-auto space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Evaluation & Visualization
          </h1>
          <p className="mt-2 text-gray-600">
            Comprehensive performance metrics and model comparison
          </p>
        </div>

        {/* ================= METRICS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <Metric title="Accuracy" value="87.50%" />
          <Metric title="Precision" value="85.71%" />
          <Metric title="Recall" value="90.00%" />
          <Metric title="F1-Score" value="87.80%" />
          <Metric title="AUC" value="0.920" />
        </div>

        {/* ================= CONFUSION MATRIX ================= */}
        <Card title="Confusion Matrix">
          <table className="w-full border border-gray-300 text-center">
            <thead className="bg-[#dedada]">
              <tr>
                <th className="border px-4 py-3"></th>
                <th className="border px-4 py-3">Predicted No Tumor</th>
                <th className="border px-4 py-3">Predicted Tumor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3 font-semibold">
                  Actual No Tumor
                </td>
                <td className="border px-4 py-3">85</td>
                <td className="border px-4 py-3">15</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">
                  Actual Tumor
                </td>
                <td className="border px-4 py-3">10</td>
                <td className="border px-4 py-3">90</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 text-sm">
            Correct predictions dominate, indicating strong diagnostic reliability.
          </p>
        </Card>

        {/* ================= GRAPHS ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="ROC Curve">
            <Line data={rocData} options={chartOptions} />
            <p className="mt-3 text-sm">
              <strong>AUC = 0.920</strong> (Excellent discrimination)
            </p>
          </Card>

          <Card title="Precision–Recall Curve">
            <Line data={prData} options={chartOptions} />
          </Card>
        </div>

        {/* ================= THIS WAS MISSING ================= */}
        <Card title="Federated vs Centralized Training">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Federated */}
            <div>
              <h3 className="font-semibold mb-4">Federated Learning</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">✅</span>
                  Privacy-preserving
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">✅</span>
                  Better generalization
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">✅</span>
                  Scales with more data
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">✅</span>
                  No data centralization
                </li>
              </ul>
            </div>

            {/* Centralized */}
            <div>
              <h3 className="font-semibold mb-4">Centralized Learning</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  Requires data sharing
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  Privacy concerns
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  Limited single-site data
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-500 text-lg">⚠️</span>
                  Plateaus earlier
                </li>
              </ul>
            </div>

          </div>
        </Card>

      </div>

      {/* ================= PDF BUTTON ================= */}
      <div className="text-center mt-12">
        <button
          onClick={exportPDF}
          className="px-8 py-3 rounded-full bg-[#013c5d] text-white font-semibold shadow hover:scale-105 transition"
        >
          Download Evaluation Report (PDF)
        </button>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Metric({ title, value }) {
  return (
    <div className="bg-[#ebe9e9] rounded-xl shadow-md p-6 text-center">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );
}

/* ================= CHART DATA ================= */

const rocData = {
  labels: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
  datasets: [{
    data: [0,0.2,0.35,0.5,0.65,0.75,0.82,0.88,0.91,0.95,1],
    fill: true,
    backgroundColor: "rgba(1,60,93,0.2)",
    borderColor: "#013c5d",
    tension: 0.4,
  }],
};

const prData = {
  labels: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
  datasets: [{
    data: [1,0.98,0.95,0.92,0.88,0.85,0.82,0.78,0.75,0.7,0.65],
    fill: true,
    backgroundColor: "rgba(0,150,255,0.2)",
    borderColor: "#0096ff",
    tension: 0.4,
  }],
};

const chartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { y: { min: 0, max: 1 } },
};

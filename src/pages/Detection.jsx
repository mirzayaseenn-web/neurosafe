import { useState } from "react";
import { motion } from "framer-motion";

export default function Detection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const img = e.target.files[0];
    if (!img) return;

    setFile(img);
    setPreview(URL.createObjectURL(img));
    setResult(null);
  };

  const handleDetect = async () => {
    if (!file) return;

    setLoading(true);

    /* 🔴 MOCK PREDICTION (Replace with API later) */
    setTimeout(() => {
      setResult({
        tumor: "Glioma",
        probability: 92.4,
        confidence: "High",
      });
      setLoading(false);
    }, 1800);
  };

  return (
    <section className="bg-[#dedada] min-h-screen py-16 px-4 text-[#013c5d]">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Brain Tumor Detection
          </h1>
          <p className="mt-3 text-gray-600">
            Upload MRI images to check tumor presence, probability, and type.
          </p>
        </motion.div>

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#ebe9e9] rounded-2xl shadow-xl p-8"
        >
          <div className="flex flex-col items-center gap-6">

            {/* Upload */}
            <label className="w-full max-w-md cursor-pointer">
              <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 text-center hover:border-[#013c5d] transition">
                <p className="font-medium">
                  Click to upload MRI image
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  JPG, PNG supported
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* Preview */}
            {preview && (
              <img
                src={preview}
                alt="MRI Preview"
                className="w-64 rounded-xl shadow-md"
              />
            )}

            {/* Button */}
            <button
              onClick={handleDetect}
              disabled={!file || loading}
              className={`px-8 py-3 rounded-full font-semibold transition
                ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#013c5d] text-white hover:scale-105"
                }`}
            >
              {loading ? "Analyzing..." : "Check Tumor"}
            </button>
          </div>
        </motion.div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Detection Result
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <ResultCard
                title="Tumor Type"
                value={result.tumor}
              />
              <ResultCard
                title="Probability"
                value={`${result.probability}%`}
              />
              <ResultCard
                title="Confidence"
                value={result.confidence}
              />
            </div>

            <p className="mt-6 text-sm text-center text-gray-600">
              ⚠️ This result is AI-assisted and not a medical diagnosis.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}

/* ---------- COMPONENT ---------- */

function ResultCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

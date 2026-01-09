export default function About() {
  return (
    <section className="bg-[#dedada] py-16 px-4 text-[#013c5d]">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            About NeuroSafe
          </h1>
          <p className="mt-2 text-gray-600">
            Project information and technical documentation
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-xl font-semibold mb-4">
            Project Overview
          </h2>
          <p className="leading-relaxed mb-4">
            NeuroSafe is a cutting-edge federated learning system designed for
            <strong> privacy-preserving brain tumor diagnosis</strong>. It enables
            collaborative machine learning across multiple hospitals without
            sharing sensitive patient data, representing the future of healthcare AI.
          </p>
          <p className="leading-relaxed">
            This Final Year Project (FYP) demonstrates how federated learning
            achieves high diagnostic accuracy while maintaining strict patient
            privacy standards, compliant with <strong>HIPAA</strong> and{" "}
            <strong>GDPR</strong>.
          </p>
        </div>

        {/* Project Team */}
        <div className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-xl font-semibold mb-4">
            Project Team
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                Student Researchers
              </h3>
              <ul className="list-disc list-inside space-y-1 font-bold">
                <li>Afifa Habib </li>
                <li>Amna Raja</li>
                <li>Muhammad Hanzala Raza</li>
                <li>Mirza Yaseen Baig</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Supervisors
              </h3>
              <ul className="list-disc list-inside space-y-1 font-bold">
                <li>Supervisor Name – Mr.Ilyas Younus</li>
                <li>Co-Supervisor Name – Mr Daud Abbas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-xl font-semibold mb-6">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="Privacy-Preserving">
              No raw data sharing between institutions
            </Feature>

            <Feature title="Federated Learning">
              Collaborative training using FedAvg algorithm
            </Feature>

            <Feature title="Real-time Visualization">
              Interactive charts and training metrics
            </Feature>

            <Feature title="Multi-Node Simulation">
              Simulates 4 distributed hospital nodes
            </Feature>

            <Feature title="Comprehensive Metrics">
              Accuracy, precision, recall, F1, ROC, confusion matrix
            </Feature>

            <Feature title="Security Mechanisms">
              Encryption and secure aggregation
            </Feature>
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-[#ebe9e9] rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-xl font-semibold mb-4">
            How Federated Learning Works
          </h2>

          <ol className="list-decimal list-inside space-y-2 leading-relaxed">
            <li>
              <strong>Initialization:</strong> A global model is initialized and
              distributed to all participating hospital nodes.
            </li>
            <li>
              <strong>Local Training:</strong> Each hospital trains the model on its
              local MRI dataset while data remains on-premises.
            </li>
            <li>
              <strong>Weight Extraction:</strong> Only model parameters are
              extracted — never patient data.
            </li>
            <li>
              <strong>Secure Transmission:</strong> Encrypted model updates are
              transmitted to the central server.
            </li>
            <li>
              <strong>Federated Averaging:</strong> Updates are aggregated using
              the FedAvg algorithm.
            </li>
            <li>
              <strong>Model Distribution:</strong> The improved global model is
              redistributed and the cycle repeats.
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

/* ---------- Feature Card ---------- */

function Feature({ title, children }) {
  return (
    <div className="bg-[#dedada] rounded-xl p-5 border-l-4 border-[#013c5d]">
      <h4 className="font-semibold mb-1">
        {title}
      </h4>
      <p className="text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}

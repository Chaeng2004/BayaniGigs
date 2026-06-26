import React, { useState, useEffect } from "react";
import {
  Shield,
  CheckCircle,
  Search,
  User,
  Briefcase,
  Star,
  CreditCard,
  ChevronRight,
  UploadCloud,
  MessageCircle,
  RefreshCw,
  Send,
  Check,
  Loader2,
  Sparkles,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Wrench,
  Zap,
  AlertCircle,
  MapPin,
  Navigation,
  Clock,
} from "lucide-react";
import profileImg from "./assets/profile.png";

const Logo = ({ className = "text-3xl", subtitle, light = false }) => (
  <div
    className={`flex items-center ${light ? "justify-start" : "justify-center"} drop-shadow-sm ${className}`}
  >
    <img
      src={profileImg}
      alt="BayaniGigs Logo"
      className={`h-[1.1em] w-[1.1em] shrink-0 mr-2.5 object-cover rounded-full border-[3px] shadow-sm ${
        light ? "border-white" : "border-green-500"
      }`}
    />
    <div className="flex flex-col items-start">
      <div className="font-extrabold tracking-tighter leading-none">
        <span className={light ? "text-white" : "text-green-600"}>Bayani</span>
        <span className={light ? "text-white ml-1" : "text-orange-500"}>
          Gigs
        </span>
      </div>
      {subtitle && (
        <p
          className={`${light ? "text-white/90" : "text-gray-500"} mt-1 font-medium text-[15px] tracking-normal`}
        >
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

// Sequence of steps for the prototype dev nav
const steps = [
  { view: 1, screen: "A", name: "Role Selection" },
  { view: 2, screen: "A", name: "ID Verification" },
  { view: 2, screen: "B", name: "Voice-to-Profile" },
  { view: 5, screen: "A", name: "Job Requests" },
  { view: 3, screen: "A", name: "Customer Intake" },
  { view: 3, screen: "B", name: "Matchmaking" },
  { view: 3, screen: "C", name: "Expert Location" },
  { view: 4, screen: "A", name: "Escrow Gateway" },
  { view: 4, screen: "B", name: "Job Completion" },
  { view: 4, screen: "C", name: "Funds Released" },
];

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [role, setRole] = useState(null); // 'customer' | 'worker'
  const currentStep = steps[stepIndex];

  const nextStep = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };
  const prevStep = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    setStepIndex(1);
  };

  const resetToStart = () => {
    setRole(null);
    setStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center items-center overflow-hidden font-sans">
      {/* Mobile Frame */}
      <div className="w-full max-w-[400px] bg-gray-50 h-[850px] max-h-screen sm:rounded-[3rem] sm:border-[8px] border-gray-800 shadow-2xl relative overflow-hidden flex flex-col transition-all duration-500 ring-1 ring-white/10">
        {/* Dynamic Status Bar Area */}
        <div className="h-12 w-full bg-white/80 backdrop-blur-md absolute top-0 z-40 flex justify-center items-end pb-2">
          <div className="w-1/3 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pt-14 pb-20 relative bg-gradient-to-b from-gray-50 to-gray-100">
          {/* View 1: Welcome & Role Selection */}
          {currentStep.view === 1 && (
            <div className="h-full flex flex-col justify-center animate-fly-in px-4 py-5">
              <div className="flex-1 flex flex-col justify-center">
                <div className="rounded-[2rem] border border-gray-200 bg-white/95 p-6 shadow-sm">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        Trusted local work
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        Choose your path
                      </p>
                    </div>
                  </div>

                  <div className="animate-float py-2">
                    <Logo
                      className="text-3xl justify-start"
                      subtitle="Simple, secure, local."
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Find help nearby or start a new gig with secure payments and
                    verified local support.
                  </p>

                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => selectRole("customer")}
                      className="group flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                          <Search size={20} />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">
                            I need an expert
                          </p>
                          <p className="text-sm text-gray-500">
                            Book help in seconds
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-gray-400 transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <button
                      onClick={() => selectRole("worker")}
                      className="group flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                          <Wrench size={20} />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">
                            I want to offer my skills
                          </p>
                          <p className="text-sm text-gray-500">
                            Find local gigs easily
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-gray-400 transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View 2A: ID Verification Gateway */}
          {currentStep.view === 2 && currentStep.screen === "A" && (
            <div className="p-6 h-full flex flex-col animate-fly-in">
              <div className="mb-8">
                <Logo className="text-2xl justify-start" />
                <h2 className="text-2xl font-bold mt-6 text-gray-800 tracking-tight">
                  Verify your identity
                </h2>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  To keep our community safe, we need to verify a valid
                  government ID.
                </p>
              </div>

              <div className="flex-1">
                <IDUploader onComplete={nextStep} />
              </div>
            </div>
          )}

          {/* View 2B: Voice-To-Profile Chat — workers only */}
          {currentStep.view === 2 &&
            currentStep.screen === "B" &&
            (role === "worker" ? (
              <LiveProfileChat onComplete={nextStep} />
            ) : (
              <AutoAdvance onMount={nextStep} />
            ))}

          {/* View 5A: Job Requests — workers only */}
          {currentStep.view === 5 &&
            currentStep.screen === "A" &&
            (role === "worker" ? (
              <JobRequestsScreen onComplete={nextStep} />
            ) : (
              <AutoAdvance onMount={nextStep} />
            ))}

          {/* View 3A: Customer Intake Chat — customers only */}
          {currentStep.view === 3 &&
            currentStep.screen === "A" &&
            (role === "customer" ? (
              <LiveIntakeChat onComplete={nextStep} />
            ) : (
              <AutoAdvance onMount={nextStep} />
            ))}

          {/* View 3B: AI Matchmaking Engine — customers only */}
          {currentStep.view === 3 &&
            currentStep.screen === "B" &&
            (role === "customer" ? (
              <div className="h-full flex flex-col">
                <Header title="Matchmaking" />
                <MatchmakingSim onComplete={nextStep} />
              </div>
            ) : (
              <AutoAdvance onMount={nextStep} />
            ))}

          {/* View 3C: Expert Location Map — customers only */}
          {currentStep.view === 3 &&
            currentStep.screen === "C" &&
            (role === "customer" ? (
              <div className="h-full flex flex-col bg-gray-50">
                <Header title="Expert En Route" />
                <MapView onComplete={nextStep} />
              </div>
            ) : (
              <AutoAdvance onMount={nextStep} />
            ))}

          {/* View 4A: Escrow Gateway */}
          {currentStep.view === 4 &&
            currentStep.screen === "A" &&
            (role === "customer" ? (
              <div className="h-full flex flex-col bg-white">
                <Header title="Secure Checkout" />
                <div className="p-6 flex-1 flex flex-col animate-fly-in">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Shield size={100} />
                    </div>
                    <h3 className="text-gray-300 font-medium mb-1">
                      Total to Secure
                    </h3>
                    <div className="text-5xl font-extrabold mb-6">₱350</div>
                    <div className="flex items-center gap-2 text-sm text-green-400 bg-white/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <ShieldCheck size={16} />
                      <span>Software Escrow Protected</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-auto text-blue-800 text-sm flex gap-3">
                    <div className="mt-0.5">
                      <AlertCircle size={20} className="text-blue-600" />
                    </div>
                    <p className="leading-relaxed">
                      Your funds are securely held in escrow and{" "}
                      <strong>will not be released</strong> to Mang Tonyo until
                      you mark the job as completely done.
                    </p>
                  </div>
                  <button
                    onClick={nextStep}
                    className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4.5 rounded-2xl shadow-xl transition-all active:scale-95 flex justify-center items-center gap-2 mt-8"
                  >
                    <Wallet size={20} />
                    Lock ₱350 in Secure Escrow
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col bg-gray-50">
                <Header title="Head to Customer" />
                <div className="flex-1 flex flex-col items-center justify-center p-6 animate-fly-in">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 rounded-full border-4 border-green-500 bg-white shadow-xl flex items-center justify-center overflow-hidden relative z-10">
                      <img
                        src={profileImg}
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full border-4 border-gray-50 shadow-sm z-20">
                      <MapPin size={20} fill="currentColor" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-20"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Maria Santos
                  </h2>
                  <p className="text-gray-500 text-sm mb-1">0.3 km away</p>
                  <p className="text-orange-600 font-medium text-sm mb-8 text-center max-w-[220px]">
                    Palikpik ng electric fan ko ay sira
                  </p>
                  <div className="bg-white rounded-2xl p-4 w-full flex justify-between items-center border border-gray-100 shadow-sm mb-8">
                    <span className="text-gray-500 text-sm">
                      Your Guaranteed Pay
                    </span>
                    <span className="text-2xl font-black text-gray-900">
                      ₱350
                    </span>
                  </div>
                  <button
                    onClick={nextStep}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 flex justify-center items-center gap-2"
                  >
                    <Navigation size={20} /> I'm On My Way
                  </button>
                </div>
              </div>
            ))}

          {/* View 4B: Job Completion */}
          {currentStep.view === 4 && currentStep.screen === "B" && (
            <div className="h-full flex flex-col bg-gray-50">
              <Header title="Active Job" />
              <div className="flex-1 p-6 flex flex-col justify-center items-center animate-fly-in">
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white shadow-xl z-10 relative overflow-hidden">
                    <img
                      src={profileImg}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full border-4 border-gray-50 shadow-sm z-20">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-ping opacity-20"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Job in Progress
                </h2>
                <p className="text-gray-500 text-center mb-10 max-w-[250px]">
                  {role === "worker"
                    ? "You're fixing Maria's electric fan. Mark it done when finished."
                    : "Mang Tonyo is fixing your electric fan. Once he finishes, release the funds."}
                </p>
                <button
                  onClick={nextStep}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4.5 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 flex justify-center items-center gap-2 mt-auto"
                >
                  <CheckCircle size={22} />
                  {role === "worker"
                    ? "Mark Job as Done"
                    : "Job Completed Successfully"}
                </button>
              </div>
            </div>
          )}

          {/* View 4C: Funds Released & Rating */}
          {currentStep.view === 4 && currentStep.screen === "C" && (
            <RatingScreen role={role} onComplete={resetToStart} />
          )}
        </div>

        {/* Dev Nav Floating Panel */}
        <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center shadow-2xl z-50 border border-gray-700">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Dev Nav &bull; Step {stepIndex + 1}/{steps.length}
            </span>
            <span className="text-sm font-semibold text-white">
              {currentStep.name}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevStep}
              disabled={stepIndex === 0}
              className="p-2 bg-gray-800 rounded-lg text-gray-300 disabled:opacity-50 hover:bg-gray-700 transition"
            >
              <ChevronRight className="rotate-180 w-5 h-5" />
            </button>
            <button
              onClick={nextStep}
              disabled={stepIndex === steps.length - 1}
              className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-500 transition shadow-lg shadow-green-900/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Subcomponents ---

const AutoAdvance = ({ onMount }) => {
  useEffect(() => {
    onMount();
  }, []);
  return null;
};

const Header = ({ title }) => (
  <div className="bg-white px-6 pt-4 pb-4 border-b border-gray-100 flex items-center justify-center sticky top-0 z-30">
    <h1 className="text-lg font-bold text-gray-800">{title}</h1>
  </div>
);

const ChatBubble = ({ isAi, children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div
      className={`flex w-full ${isAi ? "justify-start" : "justify-end"} animate-pop`}
      style={{ transformOrigin: isAi ? "bottom left" : "bottom right" }}
    >
      <div
        className={`max-w-[85%] p-4 text-[15px] leading-relaxed shadow-sm ${
          isAi
            ? "bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm"
            : "bg-green-600 text-white rounded-2xl rounded-tr-sm"
        }`}
      >
        {isAi && (
          <div className="flex items-center gap-1.5 mb-1.5 opacity-70 text-[11px] font-bold uppercase tracking-wide text-green-700">
            <Sparkles size={12} /> AI Coordinator
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

const AIProcessingState = ({ delay, text }) => {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    const timer2 = setTimeout(() => setDone(true), delay + 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [delay]);

  if (!visible || done) return null;

  return (
    <div className="flex justify-start animate-fly-in">
      <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-2xl rounded-tl-sm p-4 flex items-center gap-3 text-sm font-medium">
        <Loader2 className="animate-spin w-5 h-5 text-blue-600" />
        {text}
      </div>
    </div>
  );
};

const IDUploader = ({ onComplete }) => {
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, verifying, verified

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setStatus("verifying");
    setTimeout(() => {
      setStatus("verified");
      setTimeout(onComplete, 1500);
    }, 2500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-center items-center">
        {status === "idle" && (
          <label className="w-full aspect-[1.6] border-2 border-dashed border-gray-300 bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all animate-fly-in">
            <UploadCloud size={48} className="text-gray-400 mb-4" />
            <p className="text-gray-600 font-medium">Tap to upload your ID</p>
            <p className="text-xs text-gray-400 mt-2">
              Driver's License, Passport, or National ID
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </label>
        )}

        {status === "verifying" && (
          <div className="w-full aspect-[1.6] border-2 border-blue-400 bg-blue-50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
            {preview && (
              <img
                src={preview}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
            )}
            <div className="absolute inset-x-0 h-0.5 bg-blue-500 animate-scan shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <Loader2 className="animate-spin text-blue-600 w-10 h-10 mb-3 relative z-10" />
            <p className="text-blue-800 font-semibold relative z-10">
              Verifying ID...
            </p>
          </div>
        )}

        {status === "verified" && (
          <div className="w-full aspect-[1.6] border-2 border-green-500 bg-green-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-pop relative overflow-hidden">
            {preview && (
              <img
                src={preview}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            )}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-inner relative z-10">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-green-800 font-bold text-lg mb-1 relative z-10">
              Verified Identity
            </h3>
            <p className="text-green-700/80 text-sm font-medium relative z-10">
              Securely Enforced
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const JobRequestsScreen = ({ onComplete }) => {
  const jobs = [
    {
      id: 1,
      name: "Maria Santos",
      avatar: "Maria",
      issue: "Palikpik ng electric fan ko ay sira",
      location: "0.3 km away",
      budget: "₱350",
      time: "2 min ago",
      urgent: true,
    },
    {
      id: 2,
      name: "Juan dela Cruz",
      avatar: "Juan",
      issue: "Hindi umiikot ang fan, may amoy na sunog",
      location: "0.8 km away",
      budget: "₱400",
      time: "5 min ago",
      urgent: false,
    },
    {
      id: 3,
      name: "Nena Reyes",
      avatar: "Nena",
      issue: "Maingay na ang electric fan namin",
      location: "1.2 km away",
      budget: "₱300",
      time: "12 min ago",
      urgent: false,
    },
  ];
  const [accepted, setAccepted] = useState(null);

  if (accepted) {
    return (
      <div className="h-full flex flex-col bg-white">
        <Header title="Job Accepted" />
        <div className="flex-1 flex flex-col items-center justify-center p-6 animate-fly-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Job Accepted!
          </h2>
          <p className="text-gray-500 text-center mb-2 text-sm">
            You accepted a job from
          </p>
          <p className="font-bold text-gray-800 text-lg mb-1">
            {accepted.name}
          </p>
          <p className="text-gray-500 text-sm text-center mb-8 max-w-[240px]">
            {accepted.issue}
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 w-full flex justify-between items-center mb-8">
            <span className="text-gray-500 text-sm">Guaranteed Pay</span>
            <span className="text-2xl font-black text-gray-900">
              {accepted.budget}
            </span>
          </div>
          <button
            onClick={onComplete}
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all active:scale-95 flex justify-center items-center gap-2"
          >
            <Navigation size={20} /> Head to Customer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <Header title="Job Requests" />
      <div className="p-4 space-y-3 overflow-y-auto flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            {jobs.length} requests near you
          </span>
        </div>
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 animate-fly-in"
          >
            <div className="flex items-start gap-3 mb-3">
              <img
                src={profileImg}
                className="w-12 h-12 rounded-full border-2 border-orange-100 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-800">{job.name}</p>
                  {job.urgent && (
                    <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      Urgent
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-0.5 leading-snug">
                  {job.issue}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {job.time}
              </span>
              <span className="font-bold text-gray-700 text-sm">
                {job.budget}
              </span>
            </div>
            <button
              onClick={() => setAccepted(job)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-2xl transition-all active:scale-95 flex justify-center items-center gap-2 text-sm"
            >
              <CheckCircle size={16} /> Accept Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const LiveProfileChat = ({ onComplete }) => {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Magandang araw! Tell me what skills you have." },
  ]);
  const [input, setInput] = useState("");
  const [replied, setReplied] = useState(false);
  const [processing, setProcessing] = useState(false);
  const bottomRef = React.useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, processing]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || replied) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setReplied(true);
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: `Perfect! I've listed your skill as "${text}" and suggested a fair rate of ₱350. Does this look correct?`,
        },
      ]);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <Header title="Profile Setup" />
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex w-full ${msg.from === "ai" ? "justify-start" : "justify-end"} animate-pop`}
          >
            <div
              className={`max-w-[85%] p-4 text-[15px] leading-relaxed shadow-sm ${
                msg.from === "ai"
                  ? "bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm"
                  : "bg-green-600 text-white rounded-2xl rounded-tr-sm"
              }`}
            >
              {msg.from === "ai" && (
                <div className="flex items-center gap-1.5 mb-1.5 opacity-70 text-[11px] font-bold uppercase tracking-wide text-green-700">
                  <Sparkles size={12} /> AI Coordinator
                </div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        {processing && (
          <div className="flex justify-start animate-fly-in">
            <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-2xl rounded-tl-sm p-4 flex items-center gap-3 text-sm font-medium">
              <Loader2 className="animate-spin w-5 h-5 text-blue-600" />
              AI is structuring your professional listing...
            </div>
          </div>
        )}
        {replied && (
          <button
            onClick={onComplete}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 flex justify-center items-center gap-2 animate-fly-in"
          >
            <Sparkles size={20} /> Approve & List Profile
          </button>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Tell us your skills..."
          disabled={replied}
          className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={replied}
          className="bg-green-600 text-white p-3 rounded-2xl hover:bg-green-700 transition active:scale-95 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

const LiveIntakeChat = ({ onComplete }) => {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hello! What issue are you experiencing today? I'll find the perfect expert for you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [replied, setReplied] = useState(false);
  const bottomRef = React.useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    if (!replied) {
      setReplied(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: `Got it! Looking for experts who can help with: "${text}". Ready to find matches?`,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <Header title="Find an Expert" />
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex w-full ${msg.from === "ai" ? "justify-start" : "justify-end"} animate-pop`}
          >
            <div
              className={`max-w-[85%] p-4 text-[15px] leading-relaxed shadow-sm ${
                msg.from === "ai"
                  ? "bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm"
                  : "bg-green-600 text-white rounded-2xl rounded-tr-sm"
              }`}
            >
              {msg.from === "ai" && (
                <div className="flex items-center gap-1.5 mb-1.5 opacity-70 text-[11px] font-bold uppercase tracking-wide text-green-700">
                  <Sparkles size={12} /> AI Coordinator
                </div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        {replied && (
          <button
            onClick={onComplete}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex justify-center items-center gap-2 animate-fly-in"
          >
            <Search size={20} /> Find Matches
          </button>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Describe your problem..."
          className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white p-3 rounded-2xl hover:bg-green-700 transition active:scale-95"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

const MatchmakingSim = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000);
    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="flex-1 bg-gray-50 flex flex-col relative">
      {phase === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-ping opacity-30"></div>
            <div
              className="absolute inset-4 border-2 border-blue-300 rounded-full animate-ping opacity-50"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute inset-8 border-2 border-blue-400 rounded-full animate-ping opacity-70"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div className="bg-blue-600 text-white p-5 rounded-full shadow-lg shadow-blue-300 relative z-10 animate-float">
              <Search size={36} />
            </div>
          </div>
          <h2 className="mt-8 text-xl font-bold text-gray-800">
            AI Matching Algorithm Active...
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Scanning 42 verified experts nearby
          </p>
        </div>
      )}

      {phase === 1 && (
        <div className="p-6 h-full flex flex-col animate-fly-in">
          <div className="bg-green-50 text-green-700 text-sm font-bold py-2 px-4 rounded-full w-fit mb-6 flex items-center gap-2 border border-green-200 shadow-sm mx-auto">
            <CheckCircle size={16} /> Perfect Match Found
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-orange-100 to-transparent"></div>

            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md relative z-10 bg-orange-50 flex items-center justify-center mb-4">
              <img
                src={profileImg}
                alt="Mang Tonyo"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white text-white">
                <ShieldCheck size={14} />
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 z-10">
              Mang Tonyo
            </h2>
            <p className="text-orange-600 font-medium text-sm mb-4 z-10">
              Professional Electric Fan Repair
            </p>

            <div className="flex items-center gap-1 mb-6 bg-gray-50 px-3 py-1.5 rounded-full z-10">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="font-bold text-gray-800 text-sm">5.0</span>
              <span className="text-gray-400 text-xs ml-1">(124 jobs)</span>
            </div>

            <div className="w-full bg-gray-50 rounded-2xl p-4 flex justify-between items-center z-10 border border-gray-100">
              <span className="text-gray-500 text-sm font-medium">
                Guaranteed Rate
              </span>
              <span className="text-2xl font-black text-gray-900">₱350</span>
            </div>
          </div>

          <button
            onClick={onComplete}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4.5 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex justify-center items-center gap-2 mt-auto"
          >
            Book & Secure Funds
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

const RatingScreen = ({ role, onComplete }) => {
  const [rating, setRating] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRate = (r) => {
    setRating(r);
    if (r === 5) setShowConfetti(true);
  };

  const isWorker = role === "worker";

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden relative">
      {showConfetti && <ConfettiOverlay />}

      <div className="p-8 flex flex-col items-center justify-center flex-1 z-10">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner animate-pop">
          {isWorker ? (
            <Wallet size={40} className="animate-float" />
          ) : (
            <Wallet size={40} className="animate-float" />
          )}
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center tracking-tight animate-fly-in">
          {isWorker ? "Payment Received!" : "Funds Released!"}
        </h2>
        <p
          className="text-gray-500 text-center mb-10 text-sm max-w-[250px] animate-fly-in"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {isWorker
            ? "₱350 has been securely transferred to your wallet ledger."
            : "₱350 has been securely transferred to Mang Tonyo's wallet ledger."}
        </p>

        <div
          className="bg-gray-50 w-full rounded-3xl p-8 border border-gray-100 shadow-sm animate-fly-in"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <h3 className="text-center font-bold text-gray-800 mb-6 text-lg">
            {isWorker ? "Rate Maria Santos" : "Rate Mang Tonyo"}
          </h3>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRate(star)}
                className={`transition-all duration-300 ${rating >= star ? "scale-110" : "hover:scale-110 grayscale hover:grayscale-0"}`}
              >
                <Star
                  size={36}
                  className={`${rating >= star ? "text-yellow-400 fill-yellow-400 drop-shadow-md" : "text-gray-300 fill-gray-300"}`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-green-600 font-bold mt-6 animate-pop text-sm">
              {isWorker
                ? "Thanks! This builds your reputation."
                : "Thanks! This builds his reputation."}
            </p>
          )}
        </div>

        {onComplete && (
          <button
            onClick={onComplete}
            className="mt-6 w-full rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition-all hover:bg-green-100"
          >
            New Gig
          </button>
        )}
      </div>
    </div>
  );
};

const MapView = ({ onComplete }) => {
  const [eta, setEta] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulated map: a grid of streets with markers
  return (
    <div className="flex-1 flex flex-col">
      {/* Map Area */}
      <div className="flex-1 relative overflow-hidden bg-[#e8f0e9]">
        {/* Street grid */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal roads */}
          {[20, 38, 55, 72, 88].map((y) => (
            <rect
              key={`h${y}`}
              x="0"
              y={`${y}%`}
              width="100%"
              height="8"
              fill="#fff"
              opacity="0.7"
            />
          ))}
          {/* Vertical roads */}
          {[15, 35, 55, 75, 90].map((x) => (
            <rect
              key={`v${x}`}
              x={`${x}%`}
              y="0"
              height="100%"
              width="8"
              fill="#fff"
              opacity="0.7"
            />
          ))}
          {/* Green blocks */}
          <rect
            x="38%"
            y="55%"
            width="16%"
            height="16%"
            fill="#bbf7d0"
            rx="4"
          />
          <rect
            x="15%"
            y="20%"
            width="19%"
            height="17%"
            fill="#bbf7d0"
            rx="4"
          />
          <rect
            x="57%"
            y="20%"
            width="17%"
            height="17%"
            fill="#bbf7d0"
            rx="4"
          />
          {/* Route line */}
          <polyline
            points="280,80 280,160 200,160 200,260 160,260"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="8,4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Your location pin */}
        <div className="absolute bottom-[30%] left-[36%] flex flex-col items-center">
          <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
            <Navigation size={16} fill="white" />
          </div>
          <span className="text-[10px] font-bold text-blue-700 mt-1 bg-white/80 px-1.5 py-0.5 rounded-full shadow">
            You
          </span>
        </div>

        {/* Expert pin — animates toward you */}
        <div
          className="absolute flex flex-col items-center transition-all duration-1000"
          style={{ top: `${Math.max(8, 20 - (8 - eta) * 1.2)}%`, left: `63%` }}
        >
          <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg border-2 border-white">
            <Wrench size={16} />
          </div>
          <div className="mt-1 bg-white rounded-full px-2 py-0.5 shadow text-[10px] font-bold text-orange-600 flex items-center gap-1">
            <img src={profileImg} className="w-4 h-4 rounded-full" />
            Mang Tonyo
          </div>
        </div>

        {/* ETA badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 border border-gray-100">
          <Clock size={16} className="text-blue-600" />
          {eta > 0 ? (
            <span className="font-bold text-gray-800 text-sm">
              Arriving in <span className="text-blue-600">{eta} min</span>
            </span>
          ) : (
            <span className="font-bold text-green-600 text-sm">
              Mang Tonyo has arrived!
            </span>
          )}
        </div>
      </div>

      {/* Bottom card */}
      <div className="p-4 bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profileImg}
            className="w-12 h-12 rounded-full border-2 border-orange-300"
          />
          <div className="flex-1">
            <p className="font-bold text-gray-800">Mang Tonyo</p>
            <p className="text-xs text-gray-500">
              Electric Fan Specialist • ⭐ 5.0
            </p>
          </div>
          <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full">
            <MapPin size={14} />
            <span className="text-sm font-bold">
              {eta > 0 ? `${eta} min` : "Here!"}
            </span>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all active:scale-95 flex justify-center items-center gap-2"
        >
          <Wallet size={20} />
          Continue to Secure Payment
        </button>
      </div>
    </div>
  );
};

const ConfettiOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            backgroundColor: ["#f59e0b", "#10b981", "#3b82f6", "#ef4444"][
              Math.floor(Math.random() * 4)
            ],
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${1.5 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
};

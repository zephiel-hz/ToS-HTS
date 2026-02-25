import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, CheckCircle2, ChevronDown, DownloadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    // Add a small threshold (10px) to account for fractional pixel rendering issues
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 10) {
      setIsScrolledToBottom(true);
    }
  };

  const handleDecline = () => {
    // Show custom alert dialog that looks like a native error
    setShowAlert(true);
  };

  const handleAccept = () => {
    if (!isAccepted) return;
    
    // Fake installation progress for dramatic effect
    setIsInstalling(true);
    setTimeout(() => {
      setIsInstalling(false);
      setIsInstalled(true);
    }, 1500);
  };

  // Effect to check if content is already short enough to not need scrolling
  useEffect(() => {
    if (scrollRef.current) {
      const target = scrollRef.current;
      if (target.scrollHeight <= target.clientHeight) {
        setIsScrolledToBottom(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isInstalled ? (
          <motion.div
            key="installer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-[#252526] rounded-xl border border-[#3c3c3c] installer-shadow flex flex-col z-10 overflow-hidden"
          >
            {/* Fake VS Code Title Bar */}
            <div className="h-10 border-b border-[#3c3c3c] flex items-center px-4 justify-between bg-[#1e1e1e]/50 select-none">
              <div className="flex items-center gap-2 text-[#cccccc]/70 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>HTS Update Setup</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3c3c3c] hover:bg-yellow-500/50 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#3c3c3c] hover:bg-green-500/50 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#3c3c3c] hover:bg-red-500/80 cursor-pointer transition-colors" onClick={() => handleDecline()} />
              </div>
            </div>

            <div className="p-8 flex flex-col gap-6">
              {/* Header section */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-inner">
                  <DownloadCloud className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-white tracking-tight">
                    Terms of Service (ToS) Pembaruan HTS
                  </h1>
                  <p className="text-sm text-[#999999] mt-1 font-mono">
                    Patch Version: 25.02.2026 | Developer: Adit
                  </p>
                </div>
              </div>

              <p className="text-[15px] text-[#cccccc]">
                Silakan baca kesepakatan di bawah ini sebelum melanjutkan:
              </p>

              {/* Scrollable ToS Area */}
              <div className="relative group">
                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="h-[220px] bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-5 overflow-y-auto custom-scrollbar text-sm text-[#cccccc] leading-relaxed relative"
                >
                  <div className="font-mono text-xs text-primary mb-4 border-b border-[#3c3c3c]/50 pb-2">
                    // LICENSE_AGREEMENT.md
                  </div>
                  
                  <p className="font-semibold text-white mb-4">
                    END-USER LICENSE AGREEMENT (EULA) HUBUNGAN TANPA STATUS
                  </p>
                  
                  <p className="mb-4">
                    Harap baca dokumen Kesepakatan HTS ini dengan saksama sebelum melanjutkan interaksi dengan Adit.
                  </p>
                  
                  <h3 className="font-semibold text-white mt-6 mb-2">PASAL 1: PENGAKUAN KELALAIAN PIHAK PERTAMA</h3>
                  <p className="mb-4">
                    Pihak Pertama (Adit) mengakui bahwa rutinitas 'gitu-gitu doang' seperti main game dan watch party telah menyebabkan bug kebosanan tingkat tinggi pada sistem Pihak Kedua (Cia). Adit juga mengakui adanya intervensi ego saat dikritik sebagai cowok low effort.
                  </p>
                  
                  <h3 className="font-semibold text-white mt-6 mb-2">PASAL 2: KLASIFIKASI KOPI OJOL</h3>
                  <p className="mb-4">
                    Pihak Kedua harus memahami bahwa pengiriman kopi ojol siang ini bukanlah sebuah solusi permanen, melainkan upaya troubleshooting darurat agar Cia tidak mengantuk saat sedang marah-marah.
                  </p>
                  
                  <h3 className="font-semibold text-white mt-6 mb-2">PASAL 3: PEMBARUAN PROTOKOL EFFORT</h3>
                  <p className="mb-4">
                    Rutinitas HTS akan direvisi. Adit berkomitmen untuk upgrade sistem komunikasi: lebih banyak mendengarkan tanpa defensif dan mengurangi gameplay repetitif yang bikin bosen.
                  </p>
                  
                  <h3 className="font-semibold text-white mt-6 mb-2">PASAL 4: KETENTUAN STATUS HTS</h3>
                  <p className="mb-8">
                    Mengingat status ini adalah HTS, segala bentuk drama dan kebosanan diakui sebagai fitur bawaan, bukan bug. Namun, Adit menolak keras untuk melakukan uninstall (udahan) dari kehidupan Cia.
                  </p>
                </div>
                
                {/* Scroll hint indicator */}
                <AnimatePresence>
                  {!isScrolledToBottom && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                    >
                      <div className="bg-[#252526]/90 text-xs px-3 py-1.5 rounded-full border border-[#3c3c3c] shadow-lg backdrop-blur-sm text-[#cccccc] flex items-center gap-2">
                        <span>Scroll ke bawah</span>
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronDown className="w-3 h-3" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Checkbox section */}
              <div className="flex items-start space-x-3 mt-2 p-3 rounded-md transition-colors duration-300" 
                style={{ backgroundColor: isScrolledToBottom ? 'rgba(0, 122, 204, 0.05)' : 'transparent' }}>
                <Checkbox 
                  id="tos-accept" 
                  checked={isAccepted}
                  onCheckedChange={(checked) => setIsAccepted(checked as boolean)}
                  disabled={!isScrolledToBottom || isInstalling}
                  className="mt-0.5"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="tos-accept"
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed transition-colors ${!isScrolledToBottom ? 'text-[#999999]/50' : 'text-white cursor-pointer'}`}
                  >
                    Saya Cia, telah membaca dan setuju dengan patch pembaruan ini.
                  </label>
                  {!isScrolledToBottom && (
                    <p className="text-[11px] text-[#999999]/70">
                      (Wajib dibaca sampai habis sebelum bisa dicentang)
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer with Buttons */}
            <div className="p-4 px-8 border-t border-[#3c3c3c] bg-[#1e1e1e]/30 flex justify-end gap-3">
              <Button 
                variant="secondary" 
                onClick={handleDecline}
                disabled={isInstalling}
                className="bg-[#3a3d41] hover:bg-[#4d4d4d] text-white border-0"
              >
                Decline
              </Button>
              <Button 
                onClick={handleAccept}
                disabled={!isAccepted || isInstalling}
                className="bg-[#007acc] hover:bg-[#0062a3] text-white border-0 min-w-[160px] relative overflow-hidden transition-all"
              >
                {isInstalling ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Installing...</span>
                  </motion.div>
                ) : (
                  "Accept & Maafin Adit"
                )}
              </Button>
            </div>

            {/* Custom Fake Error Dialog */}
            <AnimatePresence>
              {showAlert && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-50 flex items-center justify-center p-6"
                >
                  <motion.div 
                    initial={{ scale: 0.95, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 10 }}
                    className="bg-[#252526] border border-[#3c3c3c] rounded-lg shadow-2xl w-full max-w-sm overflow-hidden"
                  >
                    <div className="h-8 border-b border-[#3c3c3c] bg-[#1e1e1e] flex items-center px-3">
                      <span className="text-xs text-[#cccccc]">System Error</span>
                    </div>
                    <div className="p-5 flex gap-4">
                      <ShieldAlert className="w-10 h-10 text-red-500 shrink-0 mt-1" />
                      <div className="text-[14px] text-[#cccccc] leading-relaxed">
                        <span className="text-white font-semibold block mb-1">Permintaan ditolak.</span>
                        Error: Adit tidak menyediakan opsi udahan untuk saat ini. Silakan klik Accept.
                      </div>
                    </div>
                    <div className="p-3 border-t border-[#3c3c3c] flex justify-end bg-[#1e1e1e]/50">
                      <Button 
                        size="sm"
                        onClick={() => setShowAlert(false)}
                        className="bg-[#007acc] hover:bg-[#0062a3] px-6"
                      >
                        OK
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center justify-center text-center max-w-xl p-8 z-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 relative"
            >
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-4xl font-bold text-white mb-6 tracking-tight"
            >
              Update Berhasil Diinstal! <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>✅</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg text-[#cccccc] leading-relaxed"
            >
              Terima kasih sayang. Nanti malam Adit bakal nelpon untuk sinkronisasi data dan dengerin semua omelan Cia. Jangan di-reject ya.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

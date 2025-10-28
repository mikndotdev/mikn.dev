"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Settings } from "@/components/animate-ui/icons/settings";
import { useConsentManager } from "@c15t/react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useCursorToys } from "@/contexts/CursorToysContext";

interface AccButtonProps {
  children?: React.ReactNode;
}

const AnimatedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <div
        className={
          "bg-primary rounded-full w-10 h-10 flex items-center justify-center"
        }
      >
        <Settings animateOnHover />
      </div>
    </motion.div>
  );
};

export default function SettingsController({ children }: AccButtonProps) {
  const [open, setOpen] = useState(false);
  const { setIsPrivacyDialogOpen } = useConsentManager();
  const { selectedToy, setSelectedToy } = useCursorToys();

  return (
    <div className="fixed z-50 bottom-5 left-5">
      <AnimatedButton onClick={() => setOpen(!open)} />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 7 }}
            className="absolute bottom-full mb-5 bg-white shadow-lg rounded-lg p-4 w-80"
          >
            <div className="flex justify-center">
              <h2 className="text-primary mb-5 text-md">Site settings</h2>
            </div>
            <div className="flex flex-col gap-3">
              <Button onClick={() => setIsPrivacyDialogOpen(true)}>
                Privacy Settings
              </Button>
              <div>
                <h3 className="text-sm font-medium mb-2">Cursor Toys</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    disabled={selectedToy === "none"}
                    onClick={() => setSelectedToy("none")}
                  >
                    None
                  </Button>
                  <Button
                    disabled={selectedToy === "spark"}
                    onClick={() => setSelectedToy("spark")}
                  >
                    Click Spark
                  </Button>
                  <Button
                    disabled={selectedToy === "splash"}
                    onClick={() => setSelectedToy("splash")}
                  >
                    Splash Cursor
                  </Button>
                  <Button
                    disabled={selectedToy === "custom"}
                    onClick={() => setSelectedToy("custom")}
                  >
                    Custom Cursor
                  </Button>
                  <Button
                    disabled={selectedToy === "target"}
                    onClick={() => setSelectedToy("target")}
                  >
                    Target Cursor
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

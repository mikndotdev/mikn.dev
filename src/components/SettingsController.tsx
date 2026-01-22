"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Settings } from "@/components/animate-ui/icons/settings";
import { useConsentManager } from "@c15t/react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useCursorToys } from "@/contexts/CursorToysContext";
import { usePathname } from "@/i18n/routing";

interface AccButtonProps {
  children?: React.ReactNode;
}

const AnimatedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
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
    </motion.button>
  );
};

export default function SettingsController({ children }: AccButtonProps) {
  const [open, setOpen] = useState(false);
  const { setIsPrivacyDialogOpen } = useConsentManager();
  const { selectedToy, setSelectedToy } = useCursorToys();
  const pathname = usePathname();

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
            <div className="flex flex-col gap-3">
              <Button onClick={() => setIsPrivacyDialogOpen(true)}>
                Privacy Settings
              </Button>
              <div>
                <h3 className="text-primary mb-3 text-md text-center font-bold">
                  Fun Cursors!
                </h3>
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
                </div>
              </div>
              <h3 className="text-primary text-md text-center font-bold">
                Page Source
              </h3>
              <a
                href={`https://github.com/mikndotdev/mikn.dev/blob/main/src/app/%5Blocale%5D${pathname}page.tsx`}
                target="_blank"
                rel="noopener noreferrer"
                className={"flex justify-center"}
              >
                <Button>View Source for {pathname}</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

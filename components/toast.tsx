import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

export default function Toast({
  type,
  message,
}: {
  type: string;
  message: string;
}) {
  let colours =
    type === "error"
      ? "border-red-400 bg-red-50 text-red-700"
      : type === "success"
      ? "border-green-400 bg-green-50 text-green-700"
      : "border-yellow-400 bg-yellow-50 text-yellow-700";
  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        key="toast"
        className={clsx(colours, "absolute top-4 right-4 border-l-4 p-4")}
      >
        <div className="flex">
          <div className="shrink-0">
            {type === "error" ? (
              <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
            ) : type === "success" ? (
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 text-green-400"
              />
            ) : (
              <ExclamationTriangleIcon
                aria-hidden="true"
                className="size-5 text-yellow-400"
              />
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

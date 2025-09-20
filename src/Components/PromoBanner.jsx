import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-br from-green-500 to-emerald-800 text-white text-sm px-4 py-2 flex items-center justify-between">
      <p className="font-medium text-center w-full">
        🎉 Save <span className="font-bold">50% OFF</span> on all products! Use code <span className="underline">SAVE50</span>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="text-white hover:text-gray-200 text-lg font-bold cursor-pointer"
      >
        ×
      </button>
    </div>
  );
}

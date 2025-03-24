import React from "react";
import { BackgroundGradientAnimation } from "./components/background";
import Home from "./components/Home"; // Import the Home component

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      {/* Render the Home component on top of the background */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <Home />
      </div>
    </BackgroundGradientAnimation>
  );
}

export default BackgroundGradientAnimationDemo;
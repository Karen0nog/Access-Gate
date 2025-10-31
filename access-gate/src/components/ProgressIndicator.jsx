import React from "react";

import "./ProgressIndicator.css";

export function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="progress-indicator-container">
      {/* Cria um array com o número total de passos e faz um loop para renderizar cada passo. */}
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="progress-step-item">
          {/* Círculo do passo */}
          <div
            className={[
              "progress-step-circle",
              step < currentStep ? "progress-done" : "",
              step === currentStep ? "progress-current" : "",
              step > currentStep ? "progress-pending" : "",
            ].join(" ")}
          >
            {step}
          </div>
          {/* Linha entre os círculos, exceto no último */}
          {step < totalSteps && (
            <div
              className={[
                "progress-step-line",
                step < currentStep ? "line-done" : "line-pending",
              ].join(" ")}
            />
          )}
        </div>
      ))}
    </div>
  );
} 
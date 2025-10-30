import React, { useState } from "react";

import { NeonButton } from "./NeonButton";
import { ProgressIndicator } from "./ProgressIndicator";

import "./Step1DateSelection.css";

const Calendar = ({ date, setDate }) => {
  const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
  const firstDayOfMonth = 3; // Outubro 2025 começa na quarta-feira
  // Índice do primeiro dia do mês (0=domingo, 1=segunda, ...). Aqui, 3=quarta-feira.
  const daysInMonth = 31;
  const totalCells = 6 * 7; // 6 semanas, 7 dias por semana
  const cells = []; // Array para armazenar as células do calendário

  //Dias finais de setembro para preencher o início do calendário
  for (let i = 28; i <= 30; i++) {
    cells.push({ num: i, type: "outside" });
  }

  //Dias de outubro
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ num: i, type: "current" });
  }
  //Dia 1 de novembro
  cells.push({ num: 1, type: "outside" });

  // Garante que só haverá 42 células (6 semanas).
  const calendarDays = cells.slice(0, totalCells);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav-button">{"<"}</button>
        <span className="uppercase">Outubro 2025</span>
        <button className="calendar-nav-button">{">"}</button>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
        {calendarDays.map((cell, index) => (
          <div
            key={index}
            className={`calendar-day ${
              cell.type === "outside" ? "day-outside" : ""
            } ${
              cell.type === "current" && date && date.getDate() === cell.num
                ? "day-selected"
                : ""
            }`}
            onClick={() =>
              cell.type === "current" && setDate(new Date(2025, 9, cell.num))
            }
          >
            {cell.num}
          </div>
        ))}
      </div>
    </div>
  );
};

export function Step1DateSelection({ onNext, onBack }) {
  const [date, setDate] = useState(new Date(2025, 9, 31));

  const handleNext = () => {
    if (date) {
      onNext({ date });
    }
  };

  return (
    <div className="step-selection-container">
        <h1 className="hero-title neon-glow-cyan">Access Gate</h1>
        <div className="header-system-title">Sistema de Reservas</div>
        <ProgressIndicator currentStep={1} totalSteps={4} />
      <div className="frosted-glass">

        <div className="selection-content">
          <h2 className="selection-title neon-glow-magenta">
            Select: Ingresso ao setor
          </h2>
          <div>
            <div className="instruction-text">
              <p>Selecione a data do evento que deseja comparecer</p>
            </div>
            <div className="calendar-wrapper">
              <div className="calendar-box">
                <Calendar date={date} setDate={setDate} />
              </div>
            </div>
            {date && (
              <div className="selected-date-display">
                Data selecionada: {date.toLocaleDateString("pt-BR")}
              </div>
            )}
          </div>

          <div className="actions-container">
            <NeonButton variant="purple" onClick={onBack}>
              ← Voltar
            </NeonButton>
            <NeonButton variant="cyan" onClick={handleNext} disabled={!date}>
              Próximo →
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useEffect, useState } from "react";

import { NeonButton } from "./NeonButton";
import { ProgressIndicator } from "./ProgressIndicator";

import "./Step2TableSelection.css";

const API_URL = "http://localhost:5000/tables";

export const Step2TableSelection = ({ onNext, onBack, selectedDate }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tables, setTables] = useState([]);

  const handleNext = () => {
    if (selectedTable) {
      onNext(selectedTable);
    }
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTables(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar mesas disponíveis:", err);
        setTables([]);
      });
  }, []);

  return (
    <div className="step-selection-container">
      <div className="main-content-wrapper">
        <div>
          <h1 className="hero-title neon-glow-cyan">Access Gate</h1>
          <div className="header-system-title">Sistema de Reservas</div>
          <ProgressIndicator currentStep={2} totalSteps={4} />
          <div className="frosted-glass">
            <div className="selection-content">
              <h2 className="selection-title neon-glow-magenta">
                Select: Selecionar Mesa VIP
              </h2>
              <div className="selected-date-display">
                Data selecionada: {selectedDate ? selectedDate.toLocaleDateString("pt-BR") : "Nenhuma data selecionada"}
              </div>
            </div>
            <div className="details-box">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className={`table-card${
                    selectedTable && selectedTable.id === table.id
                      ? " selected"
                      : ""
                  }`}
                  onClick={() => setSelectedTable(table)}
                >
                  <div className="table-name">{table.name}</div>
                  <div className="table-capacity">
                    Capacidade: {table.capacity}
                  </div>
                  <p>{table.description}</p>
                  <p>Cadeiras: {table.chairs}</p>
                  <p>Bebidas inclusas:</p>
                  <ul>
                    {table.drinks.map((drink) => (
                      <li key={drink}>{drink}</li>
                    ))}
                  </ul>
                  <p className="table-price">R$ {table.price}</p>
                  <NeonButton onClick={() => setSelectedTable(table)}>
                    Selecionar Mesa
                  </NeonButton>

                  {selectedTable && selectedTable.id === table.id && (
                    <div className="selected-message">Mesa selecionada!</div>
                  )}
                </div>
              ))}
            </div>

            <div className="actions-container">
              <NeonButton onClick={onBack}>← Voltar</NeonButton>
              <NeonButton onClick={handleNext} disabled={!selectedTable}>
                Próximo →
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

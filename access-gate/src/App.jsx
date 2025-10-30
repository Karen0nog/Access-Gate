import React, { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { NeonButton } from './components/NeonButton';

import "./App.css";

// importações comentadas para os próximos passos do formulário
const APP_STEPS = {
  LANDING: 0,
  STEP_1: 1,
  STEP_2: 2,
  STEP_3: 3,
  STEP_4: 4,
};

function App() {
  const [currentStep, setCurrentStep] = useState(APP_STEPS.LANDING);
  // O estado para armazenar todos os dados da reserva (Evento, Mesa, Usuário, Pagamento)
  const [reservationData, setReservationData] = useState({});
  // Função para iniciar a reserva, levando ao primeiro passo
  const handleStartReservation = () => {
    setCurrentStep(APP_STEPS.STEP_1);
  };

  // Função para avançar para a próxima etapa (a ser usada nos componentes de formulário)
  const handleNextStep = (data) => {
    //atualiza os dados da reserva, juntando os antigos com os novos.
    setReservationData((prev) => ({ ...prev, ...data }));
    //avança para a próxima etapa.
    setCurrentStep((prev) => prev + 1);
  };
  // Função para voltar um passo
  const handleBackStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  //decide o que mostrar na tela
  const renderContent = () => {
    switch (currentStep) {
      //Passa a função handleStartReservation para que o botão "Começar" funcione.
      case APP_STEPS.LANDING:
        return <LandingPage onStart={handleStartReservation} />;
      case APP_STEPS.STEP_1:
        return (
          <div>
            <h2>Passo 1: Seleção de Evento</h2>
            <p>Em breve...</p>
            <NeonButton onClick={() => setCurrentStep(APP_STEPS.LANDING)}>
              Voltar
            </NeonButton>
          </div>
        );
    }
  };

  return <div id="vip-grip-app">
    {renderContent()}
    </div>;
}

// O componente NeonButton é necessário aqui para os placeholders de Step 1-4

export default App;

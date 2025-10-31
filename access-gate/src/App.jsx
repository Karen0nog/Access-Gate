import React, { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { NeonButton } from "./components/NeonButton";
import { Step1DateSelection } from "./components/Step1DateSelection";
import { Step2TableSelection } from "./components/Step2TableSelection";

import "./App.css";

// importações comentadas para os próximos passos do formulário
const APP_STEPS = {
  LANDING: 0,
  Step1DateSelection: 1,
  Step2TableSelection: 2,
  Step3UserInfo: 3,
  Step4Payment: 4,
};

function App() {
  const [currentStep, setCurrentStep] = useState(APP_STEPS.LANDING);
  // O estado para armazenar todos os dados da reserva (Evento, Mesa, Usuário, Pagamento)
  const [reservationData, setReservationData] = useState({});
  // Função para iniciar a reserva, levando ao primeiro passo
  const handleStartReservation = () => {
    setCurrentStep(APP_STEPS.Step1DateSelection);
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
      case APP_STEPS.Step1DateSelection:
        return (
          <Step1DateSelection onNext={handleNextStep} onBack={handleBackStep} />
        );
        case APP_STEPS.Step2TableSelection:
          return (
            <Step2TableSelection onNext={handleNextStep} onBack={handleBackStep} selectedDate={reservationData.date} />
          );
    }
  };

  return <div id="access-gate-app">{renderContent()}</div>;
}

export default App;


import React from "react"; 
import { useEffect, useState } from "react";
import { NeonButton } from "./NeonButton";

import feather from "feather-icons";
import heroImg from "../assets/img/cyberpunk-dj-illustration(1).jpg";

import "./LandingPage.css";

const API_URL = "http://localhost:5000/events";

export function LandingPage({ onStart }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Atualiza os ícones sempre que os eventos mudam
  useEffect(() => {
    feather.replace(); 
  }, [events]);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na resposta da rede");
        }
      return res.json();
      })
      .then((data) => {
        setEvents(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message ||"Erro ao carregar eventos.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="landing-page">
      <section className="hero">
        <img src={heroImg} alt="Ilustração cyberpunk de DJ" className="hero-background" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title neon-glow-cyan">ACCESS GATE</h1>
          <p className="subtitle">Sistema de Reservas Futurista</p>
          <p className="description">
            Reserve sua mesa VIP e mergulhe na experiência cyberpunk mais
            intensa da cidade
          </p>
          <NeonButton onClick={onStart}>Reservar Agora</NeonButton>
        </div>
      </section>

      <section className="features">
        <h2 className="title-section neon-glow-purple">
          Por que escolher o ACCESS GATE?
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <i
              data-feather="calendar"
              className="feature-icon calendar-icon"
            ></i>
            <h3>Reserva Rápida</h3>
            <p>Sistema intuitivo para reservar sua mesa em segundos</p>
          </div>
          <div className="feature-card">
            <i data-feather="map-pin" className="feature-icon map-pin-icon"></i>
            <h3>Escolha seu Local</h3>
            <p>Visualize e selecione a melhor mesa para sua experiência</p>
          </div>
          <div className="feature-card">
            <i data-feather="music" className="feature-icon music-icon"></i>
            <h3>Eventos Exclusivos</h3>
            <p>Acesso aos melhores eventos da cena eletrônica</p>
          </div>
        </div>
      </section>

      <section className="events">
        <h2 className="title-section neon-glow-magenta">Eventos em Destaque</h2>
        {/* Exibe loading ou erro */}
        {loading && <p>Carregando eventos...</p>}
        {error && <p style={{ color: "var(--destructive)" }}>{error}</p>}
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id || event.title}>
              <div className="event-media">
                <img src={event.image} alt={event.title} />
                <span className="event-date">{event.date}</span>
              </div>
              <div className="event-details">
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="neon-glow-cyan">Localização</h3>
            <p>
              Av. Cyberpunk, 2077
              <br />
              São Paulo - SP
              <br />
              Brasil
            </p>
          </div>
          <div className="footer-col">
            <h3 className="neon-glow-magenta">Contato</h3>
            <p>
              contato@vipgrid.com
              <br />
              +55 11 9999-9999
              <br />
              @vipgrid
            </p>
          </div>
          <div className="footer-col">
            <h3 className="neon-glow-purple">Horário</h3>
            <p>
              Segunda à Sexta: 22h - 5h
              <br />
              Sábado: 22h - 6h
              <br />
              Domingo: Eventos Especiais
            </p>
          </div>
        </div>
        <p className="footer-copy">
          © 2025 Access Gate. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

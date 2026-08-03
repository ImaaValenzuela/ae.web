import React from 'react';
import { C } from '../../constants/theme';
import { Icon } from '../ui/Icon';
import { Card } from '../ui/Card';

interface ComingSoonViewProps {
  moduleName: string;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({ moduleName }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 16px" }}>
      <Card style={{ maxWidth: 540, width: "100%", textAlign: "center", padding: "48px 32px", borderTop: `5px solid ${C.gold}` }}>
        <div style={{
          width: 72, height: 72, background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`,
          borderRadius: 20, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 8px 24px ${C.gold}44`
        }}>
          <Icon name="lock" size={36} color={C.navy} />
        </div>

        <span style={{
          display: "inline-block", padding: "4px 12px", background: `${C.gold}22`, color: C.gold,
          borderRadius: 20, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5,
          marginBottom: 12
        }}>
          Módulo en Desarrollo
        </span>

        <h2 style={{ margin: "0 0 12px", fontSize: 26, fontWeight: 900, color: C.navy }}>
          {moduleName} — Próximamente 🔒
        </h2>

        <p style={{ margin: "0 0 24px", color: C.gray, fontSize: 15, lineHeight: 1.6 }}>
          Este módulo se encuentra bloqueado temporalmente. Actualmente toda la atención del clan está enfocada en el <strong>Ranking Mensual de Guerras</strong> por el premio del <strong>Pase de Batalla 🎫</strong> y la clasificación al torneo.
        </p>

        <div style={{
          padding: "16px", background: `${C.navy}08`, borderRadius: 12, border: `1px solid ${C.border}`,
          fontSize: 13, color: C.navy, fontWeight: 600
        }}>
          🏆 Visita la sección <strong>"Ranking"</strong> para ver la tabla acumulada de las 4 semanas de guerra.
        </div>
      </Card>
    </div>
  );
};

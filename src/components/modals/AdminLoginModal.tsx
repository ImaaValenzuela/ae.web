import React, { useState } from 'react';
import { C } from '../../constants/theme';
import { Icon } from '../ui/Icon';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [adminPass, setAdminPass] = useState('');
  const [adminErr, setAdminErr] = useState(false);

  if (!isOpen) return null;

  const handleLogin = () => {
    if (adminPass === "admin123") {
      onLoginSuccess();
      setAdminErr(false);
      setAdminPass("");
    } else {
      setAdminErr(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,22,40,.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
        padding: 16,
      }}
    >
      <div style={{ background: C.surface, borderRadius: 16, padding: 32, width: "100%", maxWidth: 360, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Icon name="lock" size={32} color={C.blue} />
          <h2 style={{ margin: "8px 0 4px", color: C.navy, fontSize: 20, fontWeight: 800 }}>Acceso Admin</h2>
          <p style={{ margin: 0, fontSize: 13, color: C.gray }}>Argentina Evo War Manager</p>
        </div>
        <Input
          type="password"
          placeholder="Contraseña"
          value={adminPass}
          onChange={e => { setAdminPass(e.target.value); setAdminErr(false); }}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
          style={{ marginBottom: 8 }}
          autoFocus
        />
        {adminErr && <p style={{ color: "#c62828", fontSize: 13, margin: "0 0 8px" }}>Contraseña incorrecta</p>}
        <div style={{ display: "flex", gap: 8 }}>
          <Button onClick={handleLogin} color={C.blue} full>Entrar</Button>
          <Button onClick={() => { onClose(); setAdminErr(false); setAdminPass(""); }} color={C.gray} full>Cancelar</Button>
        </div>
      </div>
    </div>
  );
};

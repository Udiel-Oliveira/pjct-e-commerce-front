"use client"

import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
import styles from "./form.module.css"
import Input from "./Input";
import Link from "next/link";

export default function Form() {
  const { register } = useAuth(); // Importa a função de registro do contexto
  const [formData, setFormData] = useState({
    country: "",
    email: "",
    name: "",
    password: "",
    userType: "Cliente", // Valor padrão
    termsAccepted: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [atentionMessage, setAtentionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setAtentionMessage("Você precisa aceitar os termos de serviço para continuar.");
      return;
    }

    const userTypeId = formData.userType === "Cliente" ? 1 : 2;

    const userData = {
      username: formData.name,
      email: formData.email,
      password: formData.password,
      country: formData.country,
      countryCode: formData.country === "brazil" ? "BR" : "PT", // Ajuste conforme necessário
      permissionUsers: [
        {
          permission: { id: userTypeId }, // Define o tipo de usuário
        },
      ],
    };

    try {
      await register(userData); // Chama a função do contexto
      setSuccessMessage("Conta criada com sucesso!");
    } catch (error) {
      setErrorMessage(error.message || "Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContent}>
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
          {atentionMessage && <div className={styles.atentionMessage}>{atentionMessage}</div>}
          <div className={styles.selectContainer}>
            <select
              id="country_select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Escolha seu País</option>
              <option value="brazil">Brazil</option>
              <option value="portugal">Portugal</option>
              {/* Adicione mais opções de país aqui */}
            </select>
          </div>
          <Input
            handleOnChange={handleChange}
            name="email"
            type="email"
            required
            value={formData.email}
            placeholder="Endereço de E-mail"
          />
          <Input
            name="name"
            type="text"
            placeholder="Nome ou Nickname"
            value={formData.name}
            handleOnChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            value={formData.password}
            handleOnChange={handleChange}
            required
          />
          <div className={styles.selectContainer}>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              placeholder="Escolha o tipo de conta:"
              required
            >
              <option value="" disabled hidden>Escolha o tipo de conta</option>
              <option value="Cliente">Cliente</option>
              <option value="Admin">Administrador</option>
            </select>
          </div>
        </div>

        <div className={styles.termsSection}>
          <input
            className={styles.termsInput}
            name="termsAccepted"
            type="checkbox"
            id="terms_checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms_checkbox" className={styles.checkmark}>
            <Link href="#">
              <h4>Eu li e concordo com os <strong>Termos de serviço</strong></h4>
            </Link>
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>Continuar</button>
      </form>
    </div>
  );
}

import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/39493441?s=460&u=5a58e24e095c649365351116b48ed79dc0663b8a&v=4"
          alt="Imagem Proffy"
        />
        <div>
          <strong>Abel Sena</strong>
          <span> Matematica</span>
        </div>
      </header>

      <p>
        Dentre todas as artes Ciências e tecnologia Aprecio a Matemática Gosto
        muito da Filosofia
        <br /> <br />
        Valorizo a Medicina E a beleza da Biologia Mas elevo a Literatura E
        dentro dela a Poesia.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

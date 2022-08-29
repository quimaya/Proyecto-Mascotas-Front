import React from "react";
import './Documentacion.css'

const Documentacion = () => {
  return (
    <div className="documentacion">
      <img src="/perros.jpg" alt="perros" />
      <div className="perros">
      <h2>Historia de los Perros</h2>
      <p>
        Ya desde la prehistoria se han documentado casos de asociación entre
        estos mamíferos descendientes del lobo y el ser humano. Cuando el hombre
        se dio cuenta de que podía ser un compañero de caza muy eficaz se creó
        una relación que ha evolucionado hasta la actualidad. Se cree que esta
        domesticación se produjo en Europa hace entre 20.000 y 40.000 años, a
        finales del Neolítico, dando lugar a la especie que hoy conocemos como
        Canis Lupus familiaris. Pese a que todos los perros actuales tienen un
        antepasado común, hoy en día se conocen alrededor de 800 razas distintas
        con tamaños y fisonomías muy diferentes y originadas a partir de la
        selección artificial por parte de los seres humanos. A pesar de que no
        cuentan con un gran sentido de la vista, tienen muy buen oído y el
        sentido del olfato muy desarrollado, siendo esta la herramienta que
        define sus mejores cualidades como cazador o rastreador, pero también su
        capacidad de socialización reconociendo olores familiares. Las hembras
        pasan el celo dos veces al año, su periodo de gestación dura un poco más
        de dos meses y suelen tener camadas de entre 8 y 12 crías. A pesar de
        que su esperanza de vida está entre los 12 y los 15 años, hay algunos
        que pueden alcanzar los 20 años.
      </p>
      </div>
    </div>
  );
};

export default Documentacion;

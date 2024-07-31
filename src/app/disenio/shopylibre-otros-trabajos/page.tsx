import Image from "next/image";
import Link from "next/link";

import { PiArrowCircleLeftDuotone } from "react-icons/pi";

function ShopyLibreTrabajos() {
  return (
    <div className="mx-auto">
      <div className="flex flex-grow mb-6 gap-x-6 items-center border rounded">
        <div>
          <Image src="/imagenes/shopylibre-foto-balsamo.png" alt="" width={300} height={700} />
        </div>
        <div className="p-4">
          <h6>Adobe Illustrator, Adobe Photoshop</h6>
          <h1 className="mb-6 text-slate-400">
            ShopyLibre: <span className="text-white">Otros Trabajos</span>
          </h1>
          <ul>
            <li className="mb-1">
              <strong>Cliente:</strong> Shopy Libre (Chile)
            </li>
            <li className="mb-1">
              <strong>Estado:</strong> Finalizado
            </li>
          </ul>
        </div>
      </div>
      <p>
        En 2022, a través de la plataforma Upwork, comenzamos una relación comercial con la empresa importadora{" "}
        <strong>ShopyLibre</strong> de Chile. A lo largo del tiempo, ShopyLibre me ha solicitado diversos trabajos de
        packaging. El primero de estos fue el diseño del empaque para la afeitadora{" "}
        <Link href="/disenio/packaging-rollershaver">RollerShaver</Link>, para luego realizar el diseño de packaging de
        varios productos que algunos se mostrarán a continuación.
      </p>
      <div className="bg-slate-200 p-6 text-slate-950 rounded my-6">
        <h4 className="mb-3">
          Afeitadora myCOCOS: <span className="font-normal">Rediseño de Packaging</span>
        </h4>
        <p>
          <strong>myCOCOS</strong> es una las líneas insignia de la empresa de productos para el cuidado íntimo y ya
          tenía una estética bastante establecida. Luego de un análisis de la web del producto y sus otros productos
          derivados y, siguiendo las indicaciones del cliente, se modificó el packaging de la afeitadora hacia una
          estética más sobria y despojada con un foco en la imagen del producto.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <h6 className="mt-6">Modelo Pride de referencia</h6>
            <Image
              src="/imagenes/shopylibre-afeitadora-antes.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <h6 className="mt-6">Diseño entregado</h6>
            <Image
              src="/imagenes/shopylibre-afeitadora-despues.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-6 text-slate-950 rounded my-6">
        <h4 className="mb-3">
          Bálsamo After Shave: <span className="font-normal">Tubo de cartón</span>
        </h4>
        <p>
          Se me solicitó crear un diseño simple para unos pequeños tubos de cartón que contienen un bálsamo para después
          de afeitarse. Continuando con la paleta de recursos obtenida de la investigación realizada para la afeitadora{" "}
          <strong>myCocos</strong> se obtuvo un diseño despojado y muy efectivo.
        </p>
        <div className="inline lg:flex gap-x-4 flex-row">
          <div className="basis-1/2">
            <h6 className="mt-6">Plano con troquelado y ejemplo de diseño</h6>
            <Image
              src="/imagenes/shopylibre-carton-ejemplo.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2">
            <h6 className="mt-6">Diseño final</h6>
            <Image
              src="/imagenes/shopylibre-carton-final.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-6 text-slate-950 rounded my-6">
        <h4 className="mb-3">
          Espuma para Afeitar y Bálsamo After Shave: <span className="font-normal">Etiquetas frente y dorso</span>
        </h4>
        <p>
          Otra línea de productos <strong>myCocos</strong> que necesitaba un cambio en su packaging: la espuma para
          afeitar y el bálsamo after shave, ambos productos en contenedores del estilo dispensador. El mayor reto fue
          colocar los ingredientes del producto y la información legal en la pequeña etiqueta del dorso. Para esto, se
          utilizó una tipografía condenzada, en negrita y con grandes ojos internos para que, a la hora de imprimirlo,
          no se pierda con la ganancia de punto, ya que el fondo era de un color azul oscuro.
        </p>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">Referencia</h6>
            <Image
              src="/imagenes/shopylibre-referencia-aftershave.jpg"
              alt=""
              width={300}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">Diseño final</h6>
            <Image
              src="/imagenes/shopylibre-foto-balsamo.png"
              alt=""
              width={300}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">
              After Shave: <span className="font-normal">Frente</span>
            </h6>
            <Image
              src="/imagenes/shopylibre-AfterShave-FRENTE.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">
              After Shave: <span className="font-normal">Dorso</span>
            </h6>
            <Image
              src="/imagenes/shopylibre-AfterShave-DORSO.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
        <div className="flex gap-x-4 flex-row">
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">
              Espuma de afeitar: <span className="font-normal">Frente</span>
            </h6>
            <Image
              src="/imagenes/shopylibre-Esp.Afeitar-FRENTE_Mesa de trabajo 1.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <h6 className="mt-6">
              Espuma de afeitar: <span className="font-normal">Dorso</span>
            </h6>
            <Image
              src="/imagenes/shopylibre-Esp.Afeitar-DORSO.png"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-6 text-slate-950 rounded my-6">
        <h4 className="mb-3">
          MENN EventPlanner: <span className="font-normal">Packaging contenedor</span>
        </h4>
        <p>
          Como la marca lo indica <strong>MENN</strong> es una línea de productos para hombres, idealmente nómadas
          digitales, que viajan por el mundo con su oficina a cuesta. En este caso el producto era una agenda (o{" "}
          <em>EventPlanner</em>) el cuál iba a llevar un packaging totalmente negro mate impreso con laca UV brillante
          sectorizada, obteniendo un resultado elegante y moderno.
        </p>
        <div className="inline md:flex gap-x-4 flex-row">
          <div className="basis-2/3">
            <Image
              src="/imagenes/shopylibre-eventplanner.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full mb-2"
            />
          </div>
          <iframe
            src="/videos/shopylibre-eventplaner-final.mp4"
            frameBorder="0"
            allowFullScreen
            className="w-full min-h-60"
          />
        </div>
      </div>
      <div className="mt-6">
        <Link href="/" className="flex items-center">
          <PiArrowCircleLeftDuotone className="mt-0.5 text-lg" />
          <p className="mb-0 ms-2">Volver</p>
        </Link>
      </div>
    </div>
  );
}

export default ShopyLibreTrabajos;

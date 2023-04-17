
import Footer from "@/components/Footer";
import InfoContainer from "@/components/InfoContainer";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import ceas_image from '../../../public/img/imagen_aboutus_01.jpg'
import ceas_image2 from '../../../public/img/imagen_aboutus_02.jpg'
import Image from "next/image";

export default function Home() {

    return (
        <main>
            <Head>
                <link rel="shortcut icon" href="../img/transporte.png" />
                <title> CEAS Centro de Enseñanza Automovilística Santander </title>
                <meta name="description" content="
                    Somos un equipo de trabajo conformado por personas profesionales, capacitadas y comprometidas con la calidad, aportando a la
                    comunidad en la formación de conductores de motocicletas y carros. Con un enfoque a satisfacer las necesidades de nuestros
                    clientes.
                    Somos un establecimiento docente de naturaleza privada, tenemos actividad permanente de instrucción de
                    personas que aspiran a obtener el certificado de capacitación en conducción.
                    Utilizamos estrategia pedagógica que propendan por una formación integral con conciencia social y democrática.
                    Nos identificamos como una empresa líder y reconocida por su compromiso con la educación y la seguridad vial"
                />
            </Head>
            <InfoContainer/>
            <NavBar/>
            <div className="mt-[40px] w-full h-auto flex flex-col px-[15%] gap-10 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635]" >
                    ¿QUE OFRECEMOS?
                </h3>
                <div className="flex flex-col justify-center items-start justify-items-center gap-2">
                    <p className="font-body font-extrabold ">
                        1) Capacitación teorico-practica actualizada de conducción para motocicletas, automoviles, camperos y camionetas de servicio publico y particular.
                    </p>
                    <p className="font-body font-extrabold ">
                        2) Refrendación o renovación de licencias para todas las categorias.
                    </p>
                    <p className="font-body font-extrabold ">
                        3) Recategorización de licencias de conducción para todas las categorias.
                    </p>
                    <p className="font-body font-extrabold ">
                        4) Asesorias y Tramites de Transito y Transporte a Nivel Nacional.
                    </p>
                    <p className="font-body font-extrabold ">
                        5) Pruebas de manejo defensivo teorico - práctico
                    </p>
                    <p className="font-body font-extrabold ">
                        6) Cursos de capacitación para conductores:
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center justify-items-center gap-2 md:gap-10 md:px-[8%]">
                        <div className="flex flex-col justify-center items-start justify-items-center gap-2">
                            <p className="font-body font-extrabold ">
                                - Actualización en aspectos legales, normas de transito y seguridad vial
                            </p>
                            <p className="font-body font-extrabold ">
                                -  Primeros auxilios en salud
                            </p>
                            <p className="font-body font-extrabold ">   
                                -  Mecánica básica automotriz.
                            </p>
                            <p className="font-body font-extrabold ">
                                - Manejo defensivo o previsivo
                            </p>
                            <p className="font-body font-extrabold ">
                                - Seguridad y control de incendios y manejo de extintores.
                            </p>
                            <p className="font-body font-extrabold ">
                                - Transporte y manejo de Sustancias Peligrosa
                            </p>
                            <p className="font-body font-extrabold ">
                                - Ética,comportamiento vial, convivencia y comunicación
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start justify-items-center gap-2">
                            <p className="font-body font-extrabold ">
                                - Transporte público de pasajeros
                            </p>
                            <p className="font-body font-extrabold ">
                                - Aparejador de cargas.
                            </p>
                            <p className="font-body font-extrabold ">
                                - Alistamiento de vehículos automotores.
                            </p>
                            <p className="font-body font-extrabold ">
                                - Norma para Transporte de carga.
                            </p>
                            <p className="font-body font-extrabold ">
                                - Control de derrames
                            </p>
                        </div>
                    </div>
                    <p className="font-body font-extrabold ">
                        7) Curso de Técnico Vial y Señaleros Viales o auxiliares viales.
                    </p>
                    <p className="font-body font-extrabold ">
                        8) Servicios de Técnicos Viales y Auxiliares Viales.
                    </p>
                    <p className="font-body font-extrabold ">
                        9)  Prestamos los servicios de entrenamiento y reentrenamiento de conductores o operadores de equipos de transporte.
                    </p>
                    <p className="font-body font-extrabold ">
                        10)  Realizamos trabajos de investigación con nuestros aliados estratégicos y
                        participamos en diversas iniciativas para desarrollar constantemente nuestro
                        sector de la enseñanza automovilistica, contribuyendo con el sector transportador en la mejora de la prestación del servicio de transporte y con nuestros
                        estudiantes en la mejora de su profesión.
                    </p>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col px-[15%] gap-5 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635]"> SERVICIO AL CLIENTE</h3>
                <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="flex flex-col justify-start items-start justify-items-center gap-2">
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Personalizado para las prácticas y en conjunto para las teóricas</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Horarios flexibles</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Instalaciones adecuadas</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Personal capacitado para atender al cliente</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start justify-items-center gap-2">
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Instructores con metodología y licencia para enseñar</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Entrega de certificados al finalizar la capacitación a traves de la Inspección de Tránsito</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Vehículos adaptados y con licencia para operar en la enseñanza</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Aulas acondicionadas</p>
                        </div>
                        <div className="flex justify-center items-center justify-items-center gap-2">
                            <p className="font-body font-semibold">- Talleres didácticos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col px-[15%] gap-10 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635]" >
                    BENEFICIOS
                </h3>
                <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Conocimiento del Código Nacional de Tránsito
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Evitar infracciones y sanciones
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Prevenir los accidentes de tránsito
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Conocer y operar el vehículo con seguridad
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Prevenir las fallas mecánicas y hacer el debido mantenimiento al vehículo.
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Conocer y utilizar vías a nivel urbano y rural
                    </div>
                    <div className="w-auto h-auto p-4 text-white font-tittle bg-[#056635] flex justify-center items-center justify-items-center">
                        Conducir con seguridad y buen comportamiento en el uso del vehículo e interactuar con los demás
                    </div>
                </div>
                <h3 className="font-tittle text-3xl text-center text-[#056635]" >
                    POR SU SEGURIDAD AL CONDUCIR... SERVIMOS 
                </h3>
            </div>
            <Footer/>
        </main>
    )
}

import Footer from "@/components/Footer";
import InfoContainer from "@/components/InfoContainer";
import NavBar from "@/components/NavBar";
import Head from "next/head";

import Respeto from '../../../public/img/el-respeto.png'
import compromiso from '../../../public/img/exitoso.png'
import metodologia from '../../../public/img/libro.png'
import tech from '../../../public/img/ordenador-portatil.png'
import transito from '../../../public/img/transporte.png'
import certificado from '../../../public/img/icontec.png'
import ceas_image from '../../../public/img/imagen_aboutus_01.jpg'
import ceas_image2 from '../../../public/img/imagen_aboutus_02.jpg'
import Image from "next/image";

export default function Contact() {

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
            <div className="w-full h-auto flex flex-col px-[15%] gap-5 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635] "> ¿QUIENES SOMOS? </h3>
                <p className="text-justify font-body font-bold">
                    Somos un equipo de trabajo conformado por personas profesionales, capacitadas y comprometidas con la calidad, aportando a la
                    comunidad en la formación de conductores de motocicletas y carros. Con un enfoque a satisfacer las necesidades de nuestros
                    clientes.
                    Somos un establecimiento docente de naturaleza privada, tenemos actividad permanente de instrucción de
                    personas que aspiran a obtener el certificado de capacitación en conducción.
                    Utilizamos estrategia pedagógica que propendan por una formación integral con conciencia social y democrática.
                    Nos identificamos como una empresa líder y reconocida por su compromiso con la educación y la seguridad vial.
                </p>
            </div>
            <div className="flex flex-col md:flex-row px-[15%] gap-10">
                <div className="w-full h-auto flex flex-col  gap-5 justify-start items-center justify-items-center mb-[40px]">
                    <h3 className="font-tittle text-3xl text-center text-[#056635]"> MISIÓN </h3>
                    <p className="text-justify font-body font-bold">
                        Nuestra Razón de ser es, la capacitación vial teórica y práctica para formar conductores de
                        motos y carros, con recurso humano calificado, infraestructura y vehículos acondicionados, a
                        fin de garantizar el servicio y satisfacer la demanda.
                    </p>
                </div>
                <div className="w-full h-auto flex flex-col gap-5 justify-center items-center justify-items-center mb-[40px]">
                    <h3 className="font-tittle text-3xl text-center text-[#056635]"> VISIÓN </h3>
                    <p className="text-justify font-body font-bold">
                        Consolidarnos como empresa líder
                        a nivel regional, en capacitación de
                        conductores de vehículos, con un
                        alto reconocimiento por la calidad,
                        en formación teórica y práctica,
                        prestación de excelente servicio al
                        cliente a fin de impulsar el crecimiento de nuestra empresa.
                    </p>
                </div>
            </div>
            <div className="w-full mb-[60px]">
                <Image
                    src={ceas_image}
                    alt=" Imagen ceas "
                    width={5997}
                    height={3998}
                    className=" w-full h-[60vh] object-cover "
                />
            </div>
            <div className="flex flex-col md:flex-row px-[15%] gap-10 mb-[40px] justify-center items-center justify-items-center">
                <Image
                    src={transito}
                    alt=" Icono de transito "
                    width={150}
                    height={60}
                />
                <div className="flex flex-col justify-center items-start justify-items-center gap-2">
                    <h3 className="font-tittle text-3xl text-center text-[#056635]">
                        MINISTERIO DE TRANSPORTE DE COLOMBIA
                    </h3>
                    <p className="font-body font-bold text-justify ">
                        Licencia de Ministerio de Transporte según resolución 000224 del 25 de Enero 2011 con más de 30 años
                        sirviendo al municipio de Barrancabermeja y la región, lo cual nos avala para dictar nuestros programas
                        de formación.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-[15%] justify-center items-center justify-items-center gap-10 mb-[40px]">
                <p className="order-2 md:order-1 font-body font-bold text-justify ">
                    Certificados por el Instituto Colombiano de Normas Técnicas ICONTEC
                    Certificados por el Ministerio de Educación según resoluciones 0960 y 0961 de
                    julio del 2010 como INSTITUCIÓN DE EDUCACIÓN PARA EL TRABAJO Y DESARROLLO HUMANO.
                </p>
                <Image
                    src={certificado}
                    alt=" Icono de transito "
                    width={80}
                    height={60}
                    className="order-1 md:order-2"
                />
            </div>
            <div className="w-full mb-[60px]">
                <Image
                    src={ceas_image2}
                    alt=" Imagen ceas "
                    width={5997}
                    height={3998}
                    className=" w-full h-[60vh] object-cover "
                />
            </div>
            <div className="w-full h-auto flex flex-col px-[15%] gap-5 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635]"> POLÍTICA DE CALIDAD </h3>
                <p className="text-justify font-body font-bold">
                    El Centro de Enseñanza Automovilística CEAS, se compromete a garantizar
                    y suministrar formación para conducir motocicletas y carros con criterios de
                    responsabilidad, seguridad, calidad y mejora continua, mediante el cumplimiento oportuno de los horarios, vehículos en óptimas condiciones, recurso
                    humano competente e instalaciones apropiadas que garantizan el cumplimiento eficaz de los requisitos del cliente y el mejoramiento continuo de sus
                    actividades
                </p>
            </div>
            <div className="w-full h-auto flex flex-col px-[15%] gap-5 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635] "> OBJETIVOS GENERALES </h3>
                <div className="w-full h-auto flex flex-col gap-2 justify-start items-start justify-items-start ">
                    <p className="text-justify font-body font-bold">
                        • Evaluar y calificar el nivel de conocimiento de los participantes y su tendencia a
                        aplicar los conceptos básicos sobre el tema en el ejercicio de su labor diaria.
                    </p>
                    <p className="text-justify font-body font-bold">
                        • Conocer las principales normas que rigen la vía y sus actores en el territorio nacional.
                    </p>
                    <p className="text-justify font-body font-bold">
                        • Prevenir accidentes o infracciones por medio del conocimiento y la sensibilización de las personas que transiten por las vías
                    </p>
                    <p className="text-justify font-body font-bold">
                        • Asegurar primordialmente la seguridad personal de los conductores, así como la integridad del señalizador y de los vehículos
                    </p>
                    <p className="text-justify font-body font-bold">
                        • Fomentar una actitud de autoprotección en la conducción mediante soluciones individualizadas.
                    </p>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col px-[15%] gap-5 justify-center items-center justify-items-center mb-[40px]">
                <h3 className="font-tittle text-3xl text-center text-[#056635]"> VALORES CORPORATIVOS </h3>
                <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                    <div className="w-[200px] bg-[#056635] px-4 cursor-pointer  py-4 justify-start items-center justify-items-center flex flex-col gap-2">
                        <Image
                            src={Respeto}
                            alt=" Icono del respeto, valor corporativo "
                            width={60}
                            height={60}
                        />
                        <h4 className="font-tittle text-xl text-white">RESPETO</h4>
                        <p className="font-body text-lg font-semibold text-white text-center">Respeto a la profesión, usuarios y colaboradores</p>
                    </div>
                    <div className="w-[200px] bg-[#056635] px-4 cursor-pointer  py-4 justify-start items-center justify-items-center flex flex-col gap-2">
                        <Image
                            src={compromiso}
                            alt=" Icono del compromiso, valor corporativo "
                            width={60}
                            height={60}
                        />
                        <h4 className="font-tittle text-xl text-white">COMPROMISO</h4>
                        <p className="font-body text-lg font-semibold text-white text-center">Compromiso con los usuarios</p>
                    </div>
                    <div className="w-[200px] bg-[#056635] px-4 cursor-pointer  py-4 justify-start items-center justify-items-center flex flex-col gap-2">
                        <Image
                            src={tech}
                            alt=" Icono de tech, valor corporativo "
                            width={60}
                            height={60}
                        />
                        <h4 className="font-tittle text-xl text-white"> CALIDAD TÉCNICA </h4>
                        <p className="font-body text-lg font-semibold text-white text-center"> Calidad técnica, tecnológica , del servicio y recurso humano calificado </p>
                    </div>
                    <div className="w-[200px] bg-[#056635] px-4 cursor-pointer  py-4 justify-start items-center justify-items-center flex flex-col gap-2">
                        <Image
                            src={metodologia}
                            alt=" Icono de metodologia, valor corporativo "
                            width={60}
                            height={60}
                        />
                        <h4 className="font-tittle text-xl text-white">METODOLOGÍA</h4>
                        <p className="font-body text-lg font-semibold text-white text-center"> Metodología actualizada y ajustada </p>
                    </div>
                </div>
            </div>            
            <Footer/>
        </main>
    )
}
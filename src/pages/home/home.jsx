import CardComponent from "@/components/CardComponent";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import InfoContainer from "@/components/InfoContainer";
import NavBar from "@/components/NavBar";
import moto from '../../../public/img/moto.png';
import carro from '../../../public/img/carro.png';
import camioneta from '../../../public/img/camioneta.png';
import Head from "next/head";

export default function Home() {

    const licencias = [
        {
            "image"      : moto,
            "id"         :  1,
            "tittle"     : "A1 y A2",
            "orderText"  : "md:order-2",
            "orderImage" : "md:order-1",
            "descripcion": "La categoria A1 y A2 permite conducir todo tipo de motos que cuenten con un motor superior a 125 cc. Esto incluye tanto a motocicletas, motociclos y mototriciclos que tengan esta cilindrada, y abarca a también al nivel de motos más pequeñas que pertenece a la licencia A1."
        },
        {
            "image"      : carro,
            "id"         :  2,
            "tittle"     : "B1 y B2",
            "orderText"  : "md:order-1",
            "orderImage" : "md:order-2",
            "descripcion": "La categoria B1 corresponde a: automóviles, motocarros, cuatrimotos, camperos, camionetas y furgones de servicio particular. También es necesaria una licencia B1 (mínimo) para conducir vehículos agrícolas y montacargas que transiten por vías públicas."
        },
        {
            "image"      : camioneta,
            "id"         :  3,
            "tittle"     : "C1",
            "orderText"  : "md:order-2",
            "orderImage" : "md:order-1",
            "descripcion": " La categoría C1 permite conducir automóviles, motocarros, cuatrimotor, camperos, camionetas y microbuses de servicio público. En ese sentido, esta es la licencia apropiada para taxistas, conductores de bus y microbuses, trasporte escolar y corporativo, etc. Igualmente, las personas con licencia de categoría C1 pueden manejar vehículos de la categoría B, es decir, vehículos particulares, sin necesidad de portar dos permisos distintos."
        }
    ]

    return (
        <main>
            <Head>
                <link rel="shortcut icon" href="../img/LogoCeas.jpg" />
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
            <Carousel/>
            <FloatingActionButton/>
            <div className="w-full h-auto px-[15%] py-10 gap-5 flex flex-col justify-center items-center justify-items-center ">
                <h2 className="font-semibold text-center text-2xl font-tittle">¡APRENDE CON LOS MEJORES PROFESIONALES!</h2>
                <span className="text-center font-body font-semibold">
                    Somos una institución de educación para el trabajo y el desarrollo humano cuyo propósito es capacitar y 
                    certificar personas como conductores competentes en pro de la seguridad vial.
                </span>
                {
                    licencias ? (
                        licencias.map((data) => (
                            <CardComponent
                                key={data.id}
                                image={data.image}
                                tittle={data.tittle}
                                orderText={data.orderText}
                                orderImage={data.orderImage}
                                descripcion={data.descripcion}
                            />
                        ))
                    ) : null 
                }
            </div>
            <div className="w-full h-auto px-[15%] py-10 gap-5 flex flex-col justify-center items-center justify-items-center" >
                <h2 className="font-semibold text-2xl font-tittle text-center">Contacta con nosotros y saca tu licencia ya mismo! </h2>
                <div className="w-full flex flex-col md:flex-row justify-center items-center justify-items-center gap-3">
                    <div className="w-full md:w-1/3 h-[250px] flex flex-col justify-center items-center justify-items-center bg-[#056635] px-4 py-2 ">
                        <h3 className="font-tittle text-white"> Contacto </h3>
                        <span className="font-body font-semibold text-center text-white" > WhatsApp: 302 384 2100 </span>
                        <span className="font-body font-semibold text-center text-white" > Direccion: Cr. 28 No. 47 - 65 Palmira  </span>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.31003092319!2d-73.86608046746092!3d7.058826245495828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42ecaf28f7a19b%3A0x9eb256f2fc0ef701!2sCEAS!5e0!3m2!1ses!2sco!4v1681419319694!5m2!1ses!2sco" className=" w-full md:w-10/12 h-[250px]" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer/>
        </main>
    )
}
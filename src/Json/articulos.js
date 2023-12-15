import clinica from '../Img/clinica.png'
import calculator from '../Img/tip-calculator.png'
import ppt from '../Img/ppt.png'
import rating from '../Img/rating.png'
import mesumo from '../Img/me-sumo.png'
import proyecto from '../Img/proyecto-final.png'

export const Articulos = [
    {
        id: 1,
        descripcion: "Creación de eventos deportivos en clubes que ofrecen turnos asociados a canchas y que finalizan como reservas al completarse el cupo. Arquitectura de microservicios: usuario, club y reservas.Infraestructura en AWS, utilizando EC2s para los microservicios,y S3s para desplegar el Front y para el repositorio de imágenes.En el Frontend se utilizó React.js con Vite y MUI. Los despliegues automatizados se programaron con GitHub Actions tras PRs aramas troncales supervisadas.",
        linkWeb: "http://me-sumo-frontend.s3-website-us-east-1.amazonaws.com/",
        linkCodigo: "https://github.com/aquamantop/Me-Sumo",
        img: mesumo,
        alt: "Me sumo app"
    },
    {
        id: 2,
        descripcion: "Sitio de alquiler de autos. Este es el proyecto integrador final del Certified Tech Developer en Digital House. El proyecto se desarrollo bajo la metolodia de sprints (4) a lo largo de 2 meses con un grupo de trabajo mediante GitLab, yo estuve encargado del backend de la pagina creando la API del sitio y ayudando en lo que es base de datos y la infraestructura en AWS.",
        img: proyecto,
        alt: "digital booking, alquiler de autos"
    },
    {
        id: 3,
        descripcion: "Aplicación de turnos odontológicos con Spring Boot y API Rest principalmente, Hibernate como ORM, PostgreSQL como BBDD y JavaScrip para el front. Utilizando Heroku para el deploy.",
        linkCodigo: "https://github.com/aquamantop/Clinica-dental",
        img: clinica,
        alt:"clinica dental"
    },
    {
        id: 4,
        descripcion: "App funcional para calcular la propina a dar teniendo en cuenta el monto total, la cantidad de personas que pagan y el porcentaje que se desea dejar a modo de propina. Luego, mostrar el monto total y monto de la propina a pagar por persona.",
        linkWeb: "https://aquamantop.github.io/tip-calculator/",
        linkCodigo: "https://github.com/aquamantop/tip-calculator",
        img: calculator,
        alt: "pagina para calcular propina"
    },
    {
        id: 5,
        descripcion: "Clasico juego de piedra, papel o tijera eligiendo por medio de tarjetas.",
        linkWeb: "https://aquamantop.github.io/Minijuego/",
        linkCodigo: "https://github.com/aquamantop/Minijuego",
        img: ppt,
        alt: "pagina de piedra papel y tijera"
    },
    {
        id: 6,
        descripcion: "Pagina simple con una tarjeta donde se puntua del 1 al 5, devolviendo otra tarjeta con la puntuacion y un agradecimiento.",
        linkWeb: "https://aquamantop.github.io/Interactive-rating-component/",
        linkCodigo: "https://github.com/aquamantop/Interactive-rating-component",
        img: rating,
        alt: "rating interactive-rating"
    }
]
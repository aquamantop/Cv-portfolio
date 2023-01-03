import clinica from '../Img/clinica.png'
import calculator from '../Img/tip-calculator.png'
import ppt from '../Img/ppt.png'
import rating from '../Img/rating.png'
import form from '../Img/form.png'
import proyecto from '../Img/proyecto-final.png'

export const Articulos = [
    {
        id: 1,
        descripcion: "Sitio de alquiler de autos. Este es el proyecto integrador final del Certified Tech Developer en Digital House. El proyecto se desarrollo bajo la metolodia de sprints (4) " +
        "a lo largo de 2 meses con un grupo de trabajo, yo estuve encargado del backend de la pagina creando la API del sitio y ayudando en lo que es base de datos " +
        "y la infraestructura en AWS",
        linkRepo: "http://0521ptc1n1-grupo7.s3-website.us-east-2.amazonaws.com",
        img: proyecto,
        alt: "digital booking, alquiler de autos"
    },
    {
        id: 2,
        descripcion: "Aplicación de turnos odontológicos con Spring Boot y API Rest principalmente, Hibernate como ORM, PostgreSQL como BBDD y JavaScrip para el front. Utilizando Heroku para el deploy. (Datos para el inicio de sesion: username: usuario@gmail.com / password: usuario)",
        linkRepo: "https://clinica-dental-backend.herokuapp.com/html/home.html",
        linkCodigo: "https://github.com/aquamantop/Clinica-dental",
        img: clinica,
        alt:"clinica dental"
    },
    {
        id: 3,
        descripcion: "App funcional para calcular la propina a dar teniendo en cuenta el monto total, la cantidad de personas que pagan y el porcentaje que se desea dejar a modo de propina. Luego, mostrar el monto total y monto de la propina a pagar por persona.",
        linkRepo: "https://aquamantop.github.io/tip-calculator/",
        linkCodigo: "https://github.com/aquamantop/tip-calculator",
        img: calculator,
        alt: "pagina para calcular propina"
    },
    {
        id: 4,
        descripcion: "Clasico juego de piedra, papel o tijera eligiendo por medio de tarjetas.",
        linkRepo: "https://aquamantop.github.io/Minijuego/",
        linkCodigo: "https://github.com/aquamantop/Minijuego",
        img: ppt,
        alt: "pagina de piedra papel y tijera"
    },
    {
        id: 5,
        descripcion: "Pagina simple con una tarjeta donde se puntua del 1 al 5, devolviendo otra tarjeta con la puntuacion y un agradecimiento.",
        linkRepo: "https://aquamantop.github.io/Interactive-rating-component/",
        linkCodigo: "https://github.com/aquamantop/Interactive-rating-component",
        img: rating,
        alt: "rating interactive-rating"
    },
    {
        id: 6,
        descripcion: "Formularios para iniciar, registrarse, dejar comentarios, etc. Pero sin ser funcional, solo maquetado con html y css.",
        linkRepo: "https://aquamantop.github.io/Formularios/index.html",
        linkCodigo: "https://github.com/aquamantop/Formularios",
        img: form,
        alt: "pagina de formularios ingreso"
    }
]
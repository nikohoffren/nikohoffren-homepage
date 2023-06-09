import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Loader from "../components/Loader";

export default function Home() {
    const { language } = useContext(LanguageContext);
    const cvUrl = "/nikohoffren-cv.pdf";
    const [inProp, setInProp] = useState(false);
    const [textInProp, setTextInProp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imageLoaded = () => {
        setIsLoading(false);
    };

    React.useEffect(() => {
        setInProp(true);
        setTextInProp(true);
    }, []);

    return (
        <div className={`mx-auto container px-4 sm:px-6 lg:px-8 mt-8`}>
            <div className="py-10" />
            <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <h1 className="text-6xl font-semibold mb-2">
                                    {language === "en"
                                        ? "I'm Niko Hoffrén"
                                        : "Olen Niko Hoffrén"}
                                </h1>
                            </CSSTransition>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <h2 className="text-xl font-semibold mb-4 mt-4">
                                    {language === "en"
                                        ? "Software developer"
                                        : "Ohjelmistokehittäjä"}
                                </h2>
                            </CSSTransition>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <Link to="/contact">
                                    <button className="btn btn-primary btn-ghost btn-shine text-white">
                                        {language === "en"
                                            ? "HIRE ME"
                                            : "PALKKAA MINUT"}
                                    </button>
                                </Link>
                            </CSSTransition>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <div className="mt-4 text-base space-y-4">
                                    <p>
                                        {language === "en"
                                            ? "Welcome to my website! I'm a software developer from Kuopio, Finland. In my spare time, I like to spend time with my son, play video games, and code something interesting."
                                            : "Tervetuloa kotisivuilleni! Olen ohjelmistokehittäjä Kuopiosta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, pelata videopelejä sekä koodata jotain mielenkiintoista."}
                                    </p>
                                    <p>
                                        {language === "en"
                                            ? "The page you are currently reading has been created using Vite and React with TypeScript. In addition, I have developed, among other things, various projects which you can find in the "
                                            : "Sivu jota luet tällä hetkellä on luotu Viten avulla käyttäen Reactia TypeScriptin kera. Lisäksi olen tehnyt lukuisasti muita projekteja joista lisätietoja löydät "}
                                        <Link
                                            className="underline text-blue-600 hover:text-red-600"
                                            to="/projects"
                                        >
                                            {language === "en"
                                                ? "Projects"
                                                : "Projektit"}
                                        </Link>
                                        {language === "en"
                                            ? "-section."
                                            : "-osiosta."}
                                    </p>
                                    <p>
                                        {language === "en"
                                        ? "Contributing to open-source software is one of the ways I've chosen to give back to the community. I believe that open-source not only promotes transparency and collaborative learning but also pushes the boundaries of technological innovation."
                                        : "Avointen lähdekoodien ohjelmistojen kehittämiseen osallistuminen on yksi tapa, jolla olen valinnut antaa panokseni yhteisölle. Uskon, että avoimen lähdekoodin ohjelmistot eivät ainoastaan edistä läpinäkyvyyttä ja yhteisöllistä oppimista, vaan myös siirtävät teknologisen innovaation rajoja."}
                                    </p>
                                    <p>
                                        {language === "en"
                                            ? "I'm always eager to connect with like-minded individuals, potential collaborators, or anyone curious about my work. Feel free to reach out to me with any queries or opportunities. Let's code, collaborate, and create together!"
                                            : "Olen aina innokas yhdistämään voimia samanhenkisten yksilöiden, potentiaalisten yhteistyökumppaneiden tai kenen tahansa kanssa, joka on utelias työstäni. Ota rohkeasti yhteyttä minuun, jos sinulla on kysyttävää tai mahdollisuuksia tarjolla. Koodataan, tehdään yhteistyötä ja luodaan yhdessä!"}
                                    </p>
                                    {/* <p>
                                        {language === "en"
                                            ? "Since 2019, I have been working as a music producer, as well as an audio mixer and mastering engineer. I also have nearly eight years of experience in the logistics industry, where I have held managerial positions."
                                            : "Vuodesta 2019 olen työskennellyt musiikkituottajana sekä myös audiomiksaajana ja masteroijana. Minulla on myös lähes kahdeksan vuoden kokemus logistiikka-alalta, joissa olen toiminut myös esimiestehtävissä."}
                                    </p> */}
                                </div>
                            </CSSTransition>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <h4 className="mt-4 text-lg font-semibold">
                                    {language === "en"
                                        ? "You can download my CV here:"
                                        : "Lataa CV:ni tästä linkistä:"}
                                </h4>
                            </CSSTransition>
                            <CSSTransition
                                in={textInProp}
                                timeout={500}
                                classNames="slide-text"
                            >
                                <a
                                    href={cvUrl}
                                    download
                                    className={`mt-2 inline-block py-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm uppercase tracking-widest`}
                                >
                                    {language === "en"
                                        ? "Download CV"
                                        : "Lataa CV"}
                                </a>
                            </CSSTransition>
                        </>
                    </div>
                    <div>
                        {isLoading && <Loader />}
                        <CSSTransition
                            in={inProp}
                            timeout={500}
                            classNames="slide"
                        >
                            <img
                                src="NH-photo3.JPG.png"
                                alt="Niko Hoffrén"
                                className="w-full h-auto"
                                onLoad={imageLoaded}
                            />
                        </CSSTransition>
                    </div>
                </div>
            </section>
        </div>
    );
}

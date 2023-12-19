// I am adding images that are stored in my assets/images folder
import film from '../assets/images/film.jpg'; 
import lumiere from '../assets/images/lumiere.jpg'
import mickey from '../assets/images/mickey.jpg'
import ET from '../assets/images/ET.jpg'
import nflix from '../assets/images/nflix.jpg'
//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';
//this page contains css
function History() {
    return (
      <div className="history-container" style= {{fontFamily: 'Roboto, sans-serif'}} >
        <h1 className="history-title">History of Film</h1>
        <p className="history-description"> 
          The history of film is a captivating journey that spans over a century, filled with innovation, creativity, and cultural impact. It all began in the late 19th century when inventors and visionaries around the world started exploring the possibilities of capturing and projecting moving images. The following decades witnessed the rapid evolution of this groundbreaking medium, shaping the way we entertain, educate, and communicate.
        </p>
        <img src={film} alt="Film History" className="small-image" />
        <p className="history-description">
          The Lumière Brothers, Auguste and Louis Lumière, are often credited with pioneering the birth of cinema in 1895 when they screened their short films to a mesmerized audience in Paris. These early films featured simple scenes of everyday life, such as workers leaving a factory and a train arriving at a station. The magic of motion pictures had begun, and it quickly spread across the globe.
        </p>
        <img src={lumiere} alt="Lumiere" className="small-image" />
        <p className="history-description">
          The silent film era saw the emergence of legendary figures like Charlie Chaplin, Buster Keaton, and Greta Garbo. Filmmakers experimented with storytelling techniques and visual effects, pushing the boundaries of what could be achieved on screen. Silent films relied on expressive acting, music, and intertitles to convey emotions and narratives to audiences.
        </p>
        <p className="history-description">
          The introduction of sound in the late 1920s revolutionized cinema with "talkies" becoming the new standard. This era gave rise to the Golden Age of Hollywood, marked by the dominance of major studios like MGM, Warner Bros., and Paramount. Iconic movies such as "Gone with the Wind" and "The Wizard of Oz" were produced during this time.
        </p>
        <img src={mickey} alt="MickeyMouse" className="small-image" />
        <p className="history-description">
          Post-World War II cinema witnessed significant changes with the rise of independent filmmaking and various new wave movements around the world, challenging traditional narratives and techniques. This period also saw the advent of color films becoming mainstream, adding a new dimension to cinematic storytelling.
        </p>
        <p className="history-description">
        The 1970s and 1980s heralded the blockbuster era in film, revolutionizing production and marketing. Films like "Jaws" and "Star Wars" not only introduced nationwide releases and massive advertising but also set new standards in special effects and sound design. This period saw the rise of franchises and high-concept films, emphasizing visual spectacle and broad appeal. Spielberg's "E.T." exemplified this trend, blending advanced effects with universal storytelling. This era fundamentally shifted Hollywood's focus towards creating large-scale, audience-attracting cinematic experiences.
        </p>
        <img src={ET} alt="ET" className="small-image" />
        <p className="history-description">
        The late 20th and early 21st centuries marked a significant digital revolution in the film industry, radically altering film production, distribution, and exhibition. The emergence of digital filmmaking technologies enabled more efficient and creative production processes, making high-quality visual effects and animation more accessible. The internet's expansion and the advent of streaming services revolutionized film distribution, allowing viewers unprecedented access to a vast array of content from around the globe. This shift not only changed audience viewing habits but also opened new avenues for independent filmmakers to reach wider audiences. The digital era also brought challenges, such as piracy and the need for traditional cinemas to innovate to remain competitive. Despite these challenges, the digital revolution has fostered a more dynamic, diverse, and globally connected film industry.
        </p>
        <p className="history-description">
          Today, film continues to evolve, with diverse voices emerging from different parts of the world, and new technologies like virtual reality opening up unprecedented possibilities for storytelling. The history of film is not just a story of technological advancement but a reflection of human creativity and cultural evolution.
        </p>
        <img src={nflix} alt="Netflix" className="small-image" />
        <br /><br /><br /><br />
        {/* Adding buttons at the bottom this page to return to other pages */}
        <Link to="/">
                <button className="stylish-button">Home</button>
            </Link>
            <Link to="/create">
                <button className="stylish-button">Add</button>
            </Link>
            <Link to="/read">
                <button className="stylish-button">Read</button>
            </Link>
            <Link to="/reviews">
                <button className="stylish-button">Reviews</button>
            </Link>
            <Link to="/trailers">
                <button className="stylish-button">Old Trailers</button>
            </Link>
            <Link to="/modernTrailers">
                <button className="stylish-button">New Trailers</button>
            </Link>
      </div>
    );
  }
  
  export default History;
  
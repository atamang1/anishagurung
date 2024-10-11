//Home section 
const Home = () => {
    return (
    <section id="home-section" className="container-fluid full-height d-flex justify-content-center flex-column align-items-center">

        <div className="container text-center">
            <p id="name" className="display-1 display-md-2 display-lg-3 fw-bold">
                Anisha Gurung
            </p>
        </div>

        <div className="container d-flex justify-content-center">
            <ul id="home-info" className="d-flex flex-wrap gap-5"
            style={{
                position: "relative", 
                listStyleType: "square", 
            }}>
                <li>Student</li>
                <li>Marketing</li>
                <li>4th year</li>
                <li>The University of Akron</li>
            </ul>
        </div>

    </section>

    );
};
//About me section 
const AboutMe = () => {
    const aboutMe = ` 
    This is example text. This is example text. 
    This is example text. This is example text.
        This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.
    This is example text. This is example text. 
    This is example text. This is example text.

     `;// do not delete this 


    return (
    <section id="about-me-section" style={{paddingTop:"60px"}}>

        <div className="container text-center">
            <p id="about-me-header" className="display-3 display-md-2 display-lg-3">
                About me
            </p>
        </div>
        <div className="container text-center" style={{border: "2px solid black"}}>
            <pre>
                {aboutMe}
            </pre>

        </div>

    </section>

    );
};

//Resume section 
const Resume = () => {

    //format dates 
    const months = [ 
        'Present',
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'];
    const monthsJoin = months.join('|');
    const regexDate = new RegExp(
        `((${monthsJoin})\\s?\\d{4}(?:\\s?-?\\s?(${monthsJoin})(\\s?\\d{4}?)?)?)`, 
        'gi'
    );
    const resumeSection = [
        'Education', 
        'Relevant Coursework', 
        'Internship Experience', 
        'On-Campus Work Experience', 
        'Work Experience', 
        'Leadership and Extracurricular Experience',
        'Technical Skills'
    ]//do not delete this 
    //regular expression that matchs any keywords
    const regexSection = new RegExp(`(${resumeSection.join('|')})`, 'gi'); //global and cases-insensitive


    const filePath = `./resume/resume.docx`; //path of file

    fetch(filePath)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.arrayBuffer();
    })
    .then(arrayBuffer => {
        return mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
    })
    .then(result => {
        const html = result.value.replace(regexSection, '<span class="resumeSectionsHeader"><u>$1</u></span>');
        document.getElementById('resume-data').innerHTML = html.replace(regexDate, '<span class="resumeDates">($1)</span>');
    })
    .catch(err => console.error('Error loading DOCX:', err));

    return (
        <section id="resume-section" className="height-full pb-5" style={{paddingTop:"60px"}}>
            <div className="container text-center">
                <p id="resume-header" className="display-3 display-md-2 display-lg-3">
                    Resume
                </p>
            </div>
            <div id="resume-data" className=" container p-5" style={{border: "2px solid grey"}}/>
        </section>
    )
} /* End of Resume Component */


//Blogs section
const Blogs = () => {
    return (
        <section id="blogs-section" style={{paddingTop:"60px"}}>
            <div className="container text-center">
                <p id="blogs-header" className="display-3 display-md-2 display-lg-3">
                    Blogs
                </p>
            </div>            
        </section>

    )
}

//Contact me section
const ContactMe = () => {
    return (
        <section id="contact-me-section" style={{paddingTop:"60px"}}>
            <div className="container text-center">
                <p id="contact-me-header" className="display-3 display-md-2 display-lg-3">
                    Contact me
                </p>
            </div>            
        </section>

    )
}




const Portfolio = () => {
    return (
        <div>
            {/*Home section */}
            <Home/>
            {/*About me section */}
            <AboutMe/>
            {/*Resume section */}
            <Resume/>
            {/*Blogs section */}
            <Blogs/>
            {/*Contact me section */}
            <ContactMe/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Portfolio/>) 
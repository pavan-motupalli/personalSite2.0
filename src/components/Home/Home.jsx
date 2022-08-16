import React from 'react';
import './Home.css';
import Headshot from '../../images/secHeadshot.jpg';
import PageWrapper from '../Navbar/PageWrapper';
import LinkButtons from './LinkButtons';
import Typewriter from 'typewriter-effect';


function HomeCard(){
    const buttonData = [
        {
            imgSrc: "https://img.icons8.com/metro/52/356285/linkedin.png",
            href: "https://www.linkedin.com/in/pavan-motupalli/",
            title: "LinkedIn"
        },
        {
            imgSrc: "https://img.icons8.com/metro/52/356285/github.png",
            href: "https://github.tamu.edu/pmotupalli14",
            title: "GitHub"  
        },
        {
            imgSrc: "https://img.icons8.com/ios-filled/48/356285/gmail.png",
            href: "mailto:pmotupalli14@gmail.com",
            title: "Email"
        }
    ]

    return (
        <div className='m-auto bg-white rounded-lg border shadow-md min-w-md max-w-4xl overflow-hidden content-start mb-4'>
            <div className=''>
                <img className='object-scale-down h-1/3 w-1/3 rounded-full float-right m-px border-4' src={Headshot} alt="head" />
            </div>
            <div className="text-black text-left text-2xl m-3">
                <p>My name is Pavan Motupalli and I am a senior Computer Science major at Texas A&M. I am also pursuing a minor in business. Welcome to my website!</p>
            </div>
            <div className='w-auto'>
                <div className='float-left mr-2 ml-2'>
                {buttonData.map((page) =>(
                    <LinkButtons  
                        imgSrc={page.imgSrc}
                        href={page.href}
                        title={page.title}
                    />
                ))}
                </div>
                <div className='text-black text-left text-lg'>
                    <p>I am currently looking for full time Software Engineering roles. If you are interested, contact me at pmotupalli14@gmail.com</p>
                </div>
            </div>
        </div>
    );
}




function HomeComponent(){
    
    return (
    <div className=''>
        <div className='font-semibold text-8xl mb-8'>
            <h1>Howdy!</h1>
        </div>
        <HomeCard />
        <div className='text-7xl mb-8'>
            <h1>
            <Typewriter
                options={{
                    strings: ['Engineer', 'Leader', 'Problem Solver', 'Innovator', 'Student'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </h1>
        </div>
        <div className='m-auto bg-white rounded-lg border shadow-md min-w-sm max-w-md content-start mb-4'>
            <h2 className='text-black text-lg'>Copyright Pavan Motupalli {(new Date().getFullYear())} ©</h2>
            <h2 className='text-black text-lg'>All Rights reserved.</h2>
        </div>
    </div>
    )
}

function Home(){
    return (
        <PageWrapper current="Home" component={<HomeComponent />} />
    );
}

export default Home;
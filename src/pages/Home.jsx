import "../styles/Home.css";
import React, {useRef,useEffect} from "react";
import { gsap,ScrollTrigger } from "gsap/all";
import  animateVideo,{animate} from "../utils/animate"
import mainVideo from "../assets/mainVideo.mp4";
import { useNavigate } from "react-router-dom";

import {projects} from "../data/projects";
import { animateProjects,scrollBlogPosts,scrollCircle,scrollDiscover } from "../utils/animate";
import { blogPosts } from "../data/projects";


export default function Home(){

    const navigate = useNavigate();
    
    const refMain = useRef(null);
    const refTrigger =  useRef(null);
    const refTrigger2 = useRef(null);
    const refVideo =    useRef(null);
    const refTextHeaderLeft = useRef(null);
    const refTextHeaderRight = useRef(null);
    const refProjects = useRef(null);
    const refProjectsSlider = useRef(null);
    const refProjectsSticky = useRef(null);
    const refBlog0 = useRef(null);
    const refBlogImage0 = useRef(null);
    const refBlog1 = useRef(null);
    const refBlogImage1 = useRef(null);
    const refBlog2 = useRef(null);
    const refBlogImage2 = useRef(null);
    const refBlogSection = useRef(null);
    const refCircleSection = useRef(null);
    const refCircle = useRef(null);
    const refDiscoverTextLeft = useRef(null);
    const refDiscoverTextRight = useRef(null);
    const refDiscoverContainer = useRef(null);
    const refFooterSection = useRef(null);
    let refSeparators = useRef([]);

    let refMainText = useRef([]);
   
    
    
        // useEffect(()=>{
        //     gsap.registerPlugin(ScrollTrigger);
    
        //     const tl = gsap.timeline();
    
        //     tl.to(refVideo.current,{
        //         scale:0.70,
        //         duration:1,
        //         scrollTrigger:{
        //             trigger:refTrigger.current,
        //             start:"top bottom",
        //             end:"bottom bottom",
        //             scrub:3,
        //         }
        //     })
    
        //     tl.fromTo(refVideo.current,
        //         {scale:0.70},
        //         {   
        //             scale:0.95,
        //             scrollTrigger:{
        //                 trigger:refTrigger2.current,
        //                 start:"50% bottom",
        //                 end:"bottom bottom",
        //                 pin:refVideo.current,
        //                 scrub:3,
                      
        //             }
        //         } 
        //     )
     
    
        // },[])
    
        useEffect(()=>{

            refMain.current.addEventListener("mousemove",(event)=>{
                
                gsap.to(".cursor",{
                    x:event.pageX,
                    y:event.pageY,
                    ease:"easeInOut"
                })
            })

            refMain.current.addEventListener("scroll",()=>{
                
                animateVideo(refTrigger2.current,refVideo.current,refTextHeaderLeft.current, refTextHeaderRight.current);
                scrollBlogPosts(refBlogSection.current,[refBlogImage0.current, refBlogImage1.current, refBlogImage2.current]);
                scrollCircle(refCircleSection.current, refCircle.current);

            })  

            console.log(refVideo.current.getBoundingClientRect());

            gsap.registerPlugin(ScrollTrigger);
            
            // welcome hero section animation
            gsap.from(".reveal_span_main",{

                y:"110%",
                duration:1,
                stagger:0.2,
                ease:"easeInOut",

            })
            gsap.from(".separator",{
                opacity:0,
                duration:1,
                stagger:0.2,
                ease:"easeInOut"
            })

            // video scaling
            // gsap.to(refVideo.current,{
            //     scale:1,
            //     scrollTrigger:{
            //         trigger:refTrigger2.current,
            //         scroller:refMain.current,
            //         start:"top bottom",
            //         end:"bottom bottom",
            //         scrub:1,
            //         markers:true,
            //     }
            // })

            // video slider horizontal scroll
            gsap.to(refProjectsSlider.current,{
                x:"-100%",
                scrollTrigger:{
                    scroller:refMain.current,
                    trigger:refProjects.current,
                    start:"top top",
                    end:"bottom  bottom",
                    scrub:1,
          
                    pin:refProjectsSticky.current,
                }
            })  

            // blogs animation
            // gsap.to(refBlogImage0.current,{
            //     scale:0.75,
            //     opacity:0,
            //     scrollTrigger:{
            //         scroller:refMain.current,
            //         trigger:refBlog0.current,
            //         start:"top top",
            //         end:"bottom top",
            //         scrub:1,
            //         pin:refBlog0.current,
        
            //     }
            // })
            // gsap.to(refBlogImage1.current,{
            //     scale:0.75,
            //     opacity:0,
            //     scrollTrigger:{
            //         scroller:refMain.current,
            //         trigger:refBlog1.current,
            //         start:"top top",
            //         end:"bottom top",
            //         scrub:1,
            //         pin:refBlog1.current,
                
            //     }
            // })
            // gsap.to(refBlogImage2.current,{
            //     scale:0.75,
            //     opacity:0,
            //     scrollTrigger:{
            //         scroller:refMain.current,
            //         trigger:refBlog2.current,
            //         start:"top top",
            //         end:"top top",
            //         scrub:1,
            //         pin:refBlog2.current,
          
            //     }
            // })

            // blog reveal text
            gsap.from(".reveal_span_blog",{
                y:"110%",
                duration:1,
                stagger:0.2,
                ease:"easeInOut",
                scrollTrigger:{
                    trigger:refBlogSection.current,
                    scroller:refMain.current,
                    start:"top top",
            

                }
            })

            // discover text left
            gsap.from(refDiscoverTextLeft.current,{

                x:"-50%",
                opacity:0.5,
                scrollTrigger:{
                    trigger:refDiscoverContainer.current,
                    scroller:refMain.current,
                    start:"44% bottom",
                    end:"top top",
                    scrub:2,
                }
            })
            // dicover text right
            gsap.from(refDiscoverTextRight.current,{

                x:"50%",
                opacity:0.5,
                scrollTrigger:{
                    trigger:refDiscoverContainer.current,
                    scroller:refMain.current,
                    start:"44% bottom",
                    end:"top top",
                    scrub:2,
                }
            })
           
            // reveal text endText
            gsap.from(".reveal_span_endText",{
                y:"110%",
                duration:1,
                stagger:0.2,
                ease:"easeInOut",
                scrollTrigger:{
                    trigger:refFooterSection.current,
                    scroller:refMain.current,
                    start:"top 70%",

 

                }
            })

        },[])


    return(
        <div>
            <div className="line_container">

                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
            </div>

            <div className="bg-white cursor h-3 w-3 rounded-full mix-blend-difference absolute z-[99] "></div>

            <main ref={refMain}>
                <div className="scroll_container">

                <section id="hero">
                    <div className="hero_container">
                        <div className="hero_title">
                            <h1 className="hero_title_header text_reveal">

                                <span className="reveal_span_main">Q</span>
                                <span className="reveal_span_main">U</span>
                                <span className="reveal_span_main">E</span>
                                <span className="reveal_span_main">R</span>
                                <span className="reveal_span_main">I</span>
                                <span className="reveal_span_main">F</span>
                                <span className="reveal_span_main">Y</span>
                            </h1>
                        </div>
                        <div onClick={()=> navigate("/signup")} className="hero_cta text-[2rem] flex items-center cursor-pointer"> ( SIGN UP )</div>
                    </div>
                </section> 
                
    
                <section id="about">
                    <div className="about_container">
                        <div className="about_text">
                            <p>Elevate your surveying experience with Querify. Our platform offers a wide range of professionally crafted forms across all categories. From customer feedback to event polls, Querify provides intuitive tools to create impactful surveys effortlessly. Join us to unlock valuable insights and drive meaningful connections today.</p>
                        </div>
                    </div>
                </section>  

                {/* Video section */}
                <section ref={refTrigger2} id="video">
                    {/* // sim is transparent div to prevent the playing of video when user on mobile touches it */}
                    
                    <div className="shim"/>
                    
                    <div ref={refTrigger} className="video_sticky">
                       
                        <video className="main_video" ref={refVideo}  autoPlay={true} muted={true} loop={true} playsInline={true} src={mainVideo}></video>
                        
                        <div className="video_text_overlay">
                            
                            <h2 ref={refTextHeaderLeft}  className="text_header_left ">SURVEY</h2>
                            <h2 ref={refTextHeaderRight} className="text_header_right ">FUTURE</h2>
                            
                        </div>
                   
                    </div>
                
                </section> 

                {/* slider */}
                <section ref={refProjects} id="projects">
                    <div ref={refProjectsSticky} class="projects_sticky">
                        <div class="slider_container">
                            <div ref={refProjectsSlider} class="projects_slider">
                            { projects.map((project,idx)=>(

                                <div className={`project ${project.pos}`}>
                                    <div className="image_container">
                                        <img src={project.image} alt={`img_${idx}`} className="project_image"/>
                                    </div>
                                    <div className="project_details flex items-center">
                                            <p>{project.name}</p>
                                            <p>{project.type}</p>
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </section>  

                {/* Blog */}

                <section ref={refBlogSection} id="blog">
                    <div className="blog_hero">
                        <h2 className="text_reveal">
                            <span className="reveal_span_blog">B</span>
                            <span className="reveal_span_blog">L</span>
                            <span className="reveal_span_blog">O</span>
                            <span className="reveal_span_blog">G</span>
                        </h2>
                    </div>

                   
                    <div ref={refBlog0} className="blog_post">
                        <div ref={refBlogImage0} className="post">
                            <div  className="post_image_container">
                                <img src={blogPosts[0].image} alt="blogImg" className="blog_post_image"/>
                            </div>
                                        
                            <div className="post_details">
                                <p>{blogPosts[0].title}</p>
                                <p>{blogPosts[0].time}</p>
                            </div>
                        </div>
                    </div>  

                    <div ref={refBlog1} className="blog_post">
                        <div ref={refBlogImage1} className="post">
                            <div className="post_image_container">
                                <img src={blogPosts[1].image} alt="blogImg" className="blog_post_image"/>
                            </div>
                                        
                            <div className="post_details">
                                <p>{blogPosts[1].title}</p>
                                <p>{blogPosts[1].time}</p>
                            </div>
                        </div>
                    </div>      
                    <div ref={refBlog2} className="blog_post">
                        <div ref={refBlogImage2} className="post">
                            <div className="post_image_container">
                                <img src={blogPosts[2].image} alt="blogImg" className="blog_post_image"/>
                            </div>
                                        
                            <div className="post_details">
                                <p>{blogPosts[2].title}</p>
                                <p>{blogPosts[2].time}</p>
                            </div>
                        </div>
                    </div>      

                </section>

                {/* Circle */}
                <section ref={refCircleSection} id="circle_section">

                    <div className="circle_sticky">
                        <h2>TBI</h2>
                        <div className="circle_container">
                            <div ref={refCircle} className="circle">

                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Discover */}
                <section id="discover">
                    <div ref={refDiscoverContainer} className="discover_container">
                        <p ref={refDiscoverTextLeft} className="text_left">THIS SITE WAS DESIGNED BY FAVORITE X</p>
                        <p ref={refDiscoverTextRight} className="text_right">EXLUSIVE FOR THE BRAND IDENTITY</p>

                        <div className="mt-7">
                            <button className="discover_button">DISCOVER</button>
                        </div>  
                    </div>
                </section>
            
                {/* End  Video */}
                
                <section id="end_video">
                    <div class="shim"></div>
                    <div className="end_video_container">
                    <video className="end_video"   autoPlay={true} muted={true} loop={true} playsInline={true} src="https://framerusercontent.com/assets/sagu9WJMRc7UvZaZc4N2cUQ68Z4.mp4"></video>
                    </div>
                </section>
            
                {/* Footer */}

                <section ref={refFooterSection} id="footer">
                    <div className="footer_container">
                        <div className="footer_title">
                            <h2 className="text_reveal">
                            <span className="reveal_span_endText">Q</span>
                            <span className="reveal_span_endText">U</span>
                            <span className="reveal_span_endText">E</span>
                            <span className="reveal_span_endText">R</span>
                            <span className="reveal_span_endText">I</span>
                            <span className="reveal_span_endText">F</span>
                            <span className="reveal_span_endText">Y</span>
                            
                        </h2>
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </div>
        
    )
}



    

import Iframe from 'react-iframe';


export const Insta = () => {
    return (
   
           //Iframe to show instagram profile
        // not completelty tested BE CAREFUL MIGHT EXPLODE
            <div className='h-[2000px]'>
            <Iframe url="https://www.instagram.com/ntihelsingborg/embed"
               width="100%"
               height="100%"
               id=""
               className=""
               display="block"
               position="relative"
               scrolling='no'
               />
            </div>
      
            )
            }
            
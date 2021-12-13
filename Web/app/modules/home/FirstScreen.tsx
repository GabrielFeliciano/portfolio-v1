import Image from 'next/image'
import AnchorMenu from '@component/AnchorMenu';
import { AnchorButton } from '@/types/anchor';
import SliderTransition from '@/components/SliderTransition';
import Particle from '@/components/Particle';
import { useInView } from 'react-intersection-observer';

interface FirstScreenProps {
    img: string,
    title: string,
    description: string,
    menuButtons: AnchorButton[]
}
 
const FirstScreen = (props: FirstScreenProps) => {
    return (
        <section className='text-gray-200 first-screen grid grid-cols-2 h-screen bg-gray-800'>
            <div className='row-span-2 relative'>
                <Picture img={props.img} />
            </div>
            <div>
                <SliderTransition 
                    time={2}
                    sliderClassName='w-[.25rem]'
                    wrapper={{
                        className: 'my-4'
                    }}
                >
                    <h1 className='border-red-500 border-l-[.25rem] px-8 py-4 text-6xl font-bold'>
                        {props.title}
                    </h1>
                    <p className='p-8 text-xl'>{ props.description }</p>
                </SliderTransition>
            </div>
            <div>
                <AnchorMenu buttons={props.menuButtons} />
            </div>
        </section>
    );
}

function Picture (props: { img: string }) {
    const [image, imageInView] = useInView({
        triggerOnce: false
    });

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div 
                className='inline-block w-96 rounded-full overflow-hidden'
                style={imageInView ? {animation: 'picture 1.5s ease-in-out forwards'} : {}}
                ref={image}
            >
                <img 
                    className='h-auto content-contain select-none bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
                    src={props.img}
                    alt="" 
                />
            </div>
        </div>
    )
}
 
export default FirstScreen;
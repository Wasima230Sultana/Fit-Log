import Image from 'next/image';
import logo from '@/app/assets/logo.png'

const Footer = () => {
    return (
        <div className=''>
            <div className="divider "></div>
            <footer className="footer sm:footer-horizontal text-neutral-content items-center pb-5 flex flex-wrap text-center md:justify-between px-20 bg-base-100">
                <div className='flex justify-center'>
                    <Image className="w-10 " src={logo} alt='Logo' width={30} height={1}
                    ></Image>
                    <h2 className=" text-3xl font-extrabold">FITLOG</h2>

                </div>
                <div>
                    <p>Copyright © {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.</p>
                </div>



            </footer>
        </div>
    );
};

export default Footer;
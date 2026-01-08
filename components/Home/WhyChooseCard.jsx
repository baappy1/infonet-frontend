import Image  from "next/image"

export default function WhyChooseCard(){
    return(
        <>
            <div className="why-choose-card bg-white p-[20px] lg:p-[30px] h-full flex flex-col justify-between rounded-[8px]">
                <div 
                    className="card-icon">
                    <Image 
                        src="https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/why-choose-icon-01.svg"
                        width={60}
                        height={60}
                        className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] object-contain mb-[20px] lg:mb-[30px]"
                    />
                </div>
                <div className="card-content">
                     <h3 className="mb-[10px] text-[20px] leading-[24px] md:text-[24px] md:leading-[30px] font-manrope">25+ Years</h3>
                     <p className="font-manrope font-medium text-[14px] leading-[20px]">Delivering reliable, industry-focused solutions to fuel retailers and convenience stores across North America.</p>
                </div>
            </div>  
        </>
    )
}
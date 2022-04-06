export default function About(){
    return(
        <div name='about' className="md:pl-16 w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border border-[#E8FFC2] px-4">
                        About
                        </p>
                    </div>
                    <div></div>
                </div>
                    <div className="w-max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>I'm Kadek, Nice to meet you. Please take a look arround </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat repellendus placeat quasi ipsa vitae perspiciatis esse non, aliquam tenetur praesentium numquam excepturi quod eaque assumenda ad quae libero porro.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
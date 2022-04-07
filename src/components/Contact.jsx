function Contact (){
    
    const handleSubmit = (e)=>{
        e.preventDevault();
        console.log('you click')
    }
    return(
        <div name='contact' className="w-full sm:h-screen h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="https://getform.io/f/32bc0b7a-81c9-49ca-a984-52c1fcdc0724" method="post" className="flex flex-col max-w-[600px] w-full" onSubmit={handleSubmit}> 
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#ffff7f] text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">Submit the form bellow or shoot me an email - kadekriyan16@gmail.con</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" id="name" required/>
                <input className="my-4 p-2 bg-[#ccd6f6]" placeholder="Email" name="email" type="email"  required/>
                <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder="Message" rows="10" required></textarea>
                <button className="text-white border-2 hover:bg-[#ffff7f] hover:text-black px-4 py-3 my-8 mx-auto flex items-center rounded-xl" type="submit" >Let's Collaborate</button>
            </form>
        </div>
    )
}


export default Contact

function test() {
    return (
      <div className=' bg-slate-200'>
  
      <div className='min-h-screen'>
      <nav className='flex items-center px-10 py-3 bg-slate-300'>
        <div>
          <div className='bg-red-500 w-10 h-10 rounded-full'/>
        </div>
        <ul className='flex ml-auto gap-3'>
          <li className=''>
            <a className='text-gray-600 hover:text-gray-800 cursor-pointer' >Home</a>
            </li>
          <li className=''>
            <a className='text-gray-600 hover:text-gray-800 cursor-pointer' >Contet</a>
            </li>
          <li className=''>
            <a className='text-gray-600 hover:text-gray-800 cursor-pointer' >About</a>
            </li>
        </ul>
      </nav>
      {/* jumbotron */}
      <div className='flex justify-between mt-20 px-5 md:px-28 '>
        <div className='md:w-1/2 w-full'>
          <span className='text-sm text-gray-800'>Hi, Saya</span>
          <h4 className='text-4xl uppercase font-bold  text-gray-800 py-2'>KADEK RIYAN KUSUMA PUTRA</h4>
          <p className='text-sm'>Python && NODE JS Developer</p>
          <span>{` 
            `}</span>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-center'>
          <div className='h-56 justify-center items-center flex rounded-full w-56 border-4 border-slate-500'>
            Image
          </div>
        </div>
      </div>
  
      </div>
  
      {/* contetn */}
  
      <div className='px-10 md:px-20 py-14 gap-14 grid grid-cols-1 md:grid-cols-3'>
        <div className=''>
          <h2 className='text-lg font-bold py-3'>Visi Misi</h2>
          <p className='text-sm'>Visi dan misi saya adalah menaklukan semua bahasa <b>Pemrograman</b> alias mem-<u>FullStack</u>. Tidak peduli kata orang tentang saya, saya tetaplah <b>Programmer</b> FullStack</p>
        </div>
        <div className=''>
          <h2 className='text-lg font-bold py-3'>List Yang Dikuasai</h2>
          <ul className=''>
            <li className='text-sm'>NODE JS</li>
            <li className='text-sm'>React</li>
            <li className='text-sm'>Anaconda</li>
            <li className='text-sm'>{`Python -> saya GG lhoo`}</li>
            <li className='text-sm'>
              <img src='/logo.svg' height={50} width={70} />
            </li>
          </ul>
        </div>  
        <div className=''>
          <h2 className='text-lg font-bold py-3'> Lorem</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis odio nulla sit, nisi officia doloribus, illum eum quam fugit labore corporis soluta.</p>
        </div>
      </div>
      </div>
      
    );
  }
  
  
  
  export default test;
  
import React, { useEffect, useState, useRef } from 'react'

export default function SwitchProyects(props) {
    const arr = props.remainingProyects
    const idx = props.idx
    const nerArr = [...arr]
    const lengthArr = nerArr.length

    const menuRef = useRef(null);
   
    
    const index = arr.indexOf(idx)
    console.log('aee' , nerArr);
    nerArr.splice(index,1)
    console.log('despues' , nerArr);
    
    const [isMenuVisble, setMenuVisble] = useState(false)
    
    const handleClickOutsideMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            // Se hizo clic fuera del menú
          setMenuVisble(false);
        }
      };

    const handleVisibleMenu = () =>{
        setMenuVisble(!isMenuVisble)
    }

    useEffect(() => {
        // Agrega el event listener cuando el componente se monta
        document.addEventListener('click', handleClickOutsideMenu);
    
        // Limpia el event listener cuando el componente se desmonta
        return () => {
          document.removeEventListener('click', handleClickOutsideMenu);
        };
      }, []);


  return (
    <nav   class="">
    <ul ref={menuRef} id="items_menu" class="text-[#a09f9d] flex flex-col relative  h gap-5">
        <a className="item_menu"  onClick={handleVisibleMenu} id='menu_switch_proyects' href="" data-page="MichL">
            <li className="flex gap-3  py-2 px-5 rounded-2xl cursor-pointer text-sm items-center hover:bg-[#353537]  transition-transform-background hover:duration-500">
                <div className="p-2 bg-gradient-to-b from-[#fff27a] to-[#fff27a4c] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke='black' fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>
                </div>
                <p className="text-white hidden sm:block">{idx}</p>
                <div className="p-1 bg-[#2f2f2f] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3" /><path d="M12 15v6" /><path d="M15 6l-3 -3l-3 3" /><path d="M12 3v6" /></svg>
                </div>
            </li>
        </a>
       <div className={`flex z-50 absolute h-fit top-20 inset-0 bg-opacity-90 py-3 rounded-2xl backdrop-blur-sm bg-[#242529] gap-3 flex-col transition-opacity duration-300 ease-in-out animate-appearance-in ${isMenuVisble ? 'opacity-100 visible' : 'opacity-0 hidden'}`}>
       {
            nerArr.map((proyect, index) => (
                <>
                    <a href={`/${proyect}`}>
                        <li className="flex gap-3  py-2 px-5  rounded-2xl cursor-pointer text-sm items-center hover:bg-[#353537]  transition-transform-background hover:duration-500">
                            <div className="hidden sm:block p-2 bg-gradient-to-b from-[#fff27a] to-[#fff27a4c] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke='black' fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>
                            </div>
                            <p className="text-white text-nowrap">{proyect}</p>
                        </li>
                    </a>
                    {index < lengthArr-2 && (
                        <div className='w-full flex justify-center items-center'>
                            <hr className=' w-3/4 border-[#4c4c4e]' />
                        </div>
                    )}
                </>
            ))
        }
       </div>
    </ul>
</nav>
  )
}

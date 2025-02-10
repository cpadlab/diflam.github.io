import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../config/firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

export const Navbar = () => {

    const [collections, setCollections] = React.useState([]);
    const [collectionsDialog, setCollectionsDialog] = React.useState(false);
    const collectionsDialogRef = React.useRef(null);

    const [categories, setCategories] = React.useState([]);
    const [categoriesDialog, setCategoriesDialog] = React.useState(false);
    const categoriesDialogRef = React.useRef(null);

    React.useEffect(() => {
        const fetchCollections = async () => {
            const querySnapshot = await getDocs(collection(db, "collections"));
            const docs = querySnapshot.docs
                .filter(doc => doc.data().isActive)
                .map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url
                }));
            setCollections(docs);
        };

        fetchCollections();

    }, []);

    React.useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = (await getDoc(doc(db, "server/public"))).data();
            setCategories(querySnapshot.categories);
        };

        fetchCategories();

    }, []);

    const handleClickOutside = (event) => {
        if (collectionsDialogRef.current && !collectionsDialogRef.current.contains(event.target)) {setCollectionsDialog(false);}
        if (categoriesDialogRef.current && !categoriesDialogRef.current.contains(event.target)) {setCategoriesDialog(false);}
    };
    
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <nav className='items-center gap-4 col-span-2 group lg:flex hidden'>
                    
            <Link to={"/about"} className='text-sm text-island-spice-50 uppercase font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'><span className='group-hover:opacity-50 hover:opacity-100 transition-all duration-200'>Nosotros</span></Link>

            <div className='relative flex'>
                
                <button onClick={() => setCategoriesDialog(!categoriesDialog)} className='text-sm  text-island-spice-50 uppercase font-semibold relative  flex items-center gap-1 cursor-pointer'>
                    <span className='group-hover:opacity-50 hover:opacity-100 transition-all duration-200'>products</span>
                    <svg className={`group-hover:opacity-50 hover:opacity-100 transition-all duration-200 w-4 h-4 ${categoriesDialog ? "-rotate-90" : "rotate-0"}`} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                
                <div ref={collectionsDialogRef} className={`absolute ${categoriesDialog ? 'top-[calc(100%+10px)] pointer-events-auto opacity-100' : 'opacity-0 top-0 pointer-events-none'} bg-island-spice-950 border border-island-spice-800 shadow-xl rounded-2xl flex flex-col transition-all duration-500`}>
                    <ul className='flex flex-col p-2 px-4'>
                        {categories.map((cat, index) => (
                            <li key={index}>
                                <Link to={`/products/?category=${cat.param}`} className='text-sm text-island-spice-50 uppercase text-nowrap font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'>{cat.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='p-2 px-4 border-t border-t-island-spice-800'>
                        <Link to={`/products/`} className='text-sm text-island-spice-50 uppercase text-nowrap font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'>+ products</Link>
                    </div>
                </div>

            </div>
                    
            <div className='relative flex'>
                
                <button onClick={() => setCollectionsDialog(!collectionsDialog)} className=' text-sm  text-island-spice-50 uppercase font-semibold relative items-center gap-1 cursor-pointer flex'>
                    <span className='group-hover:opacity-50 hover:opacity-100 transition-all duration-200'>collections</span>
                    <svg className={`group-hover:opacity-50 hover:opacity-100 transition-all duration-200 w-4 h-4 ${collectionsDialog ? "-rotate-90" : "rotate-0"}`} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                
                <div ref={categoriesDialogRef} className={`absolute ${collectionsDialog ? 'top-[calc(100%+10px)] pointer-events-auto opacity-100' : 'opacity-0 top-0 pointer-events-none'} bg-island-spice-950 border border-island-spice-800 shadow-xl rounded-2xl flex flex-col transition-all duration-500`}>
                    <ul className='flex flex-col p-2 px-4'>
                        {collections.map((coll, index) => (
                            <li key={index}>
                                <Link to={`/collections/${coll.url}`} className='text-sm text-island-spice-50 uppercase text-nowrap font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'>{coll.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='p-2 px-4 border-t border-t-island-spice-800'>
                        <Link to={`/collections/`} className='text-sm text-island-spice-50 uppercase text-nowrap font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'>+ collections</Link>
                    </div>
                </div>

            </div>

            <Link to={"/histories"} className='text-sm text-island-spice-50 uppercase xl:flex hidden font-semibold relative after:absolute after:w-0 after:h-px after:bg-island-spice-50 after:transition-all after:duration-150 after:easy-in after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:content-[""]'> <span className='group-hover:opacity-50 hover:opacity-100 transition-all duration-200'>Historias</span></Link>

        </nav>
    )
}

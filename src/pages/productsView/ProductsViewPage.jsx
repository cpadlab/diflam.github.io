import React from 'react'
import { db } from '../../config/firebase'
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { Header } from '../../components/Header/Header'
import { SmoothScroll } from '../../components/SmoothScrolll'

import { Images } from './components/Images';
import { Info } from './components/Info';

import { HighlightedProductsSection } from '../home/sections/HighlightedProductsSection';

export const ProductsViewPage = ({ user }) => {

    const { path } = useParams();
    const [product, setProduct] = React.useState([]);
    const [rating, setRating] = React.useState(0)
    const [totalReviews, setTotalReviews] = React.useState(0)

    const [amount, setAmount] = React.useState(1);

    React.useEffect(() => {

        const fetchProduct = async () => {
            try {
                const productsRef = collection(db, 'products');
                const q = query(productsRef, where('url', '==', path));

                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        setProduct(doc.data());
                        console.log(doc.data())
                    });
                } else {console.log('No matching documents.');}

            } catch (error) {console.error('Error fetching product:', error);}
        };

        fetchProduct();
    }, [path]);

    return (
        <React.Fragment>

            <SmoothScroll _lerp={0.07} />

            <main className='relative'>                
                <Header user={user} />

                {product && product.length !== 0 && (
                    <React.Fragment>
                        <div className='w-[90%] mx-auto lg:grid flex flex-col grid-cols-2 mt-12 gap-4'>
                            <Images images={product.images} /> 
                            <Info amount={amount} setAmount={setAmount} rating={rating} totalReviews={totalReviews} product={product} />
                        </div>
                    </React.Fragment>
                )}

                <HighlightedProductsSection />
            </main>

        </React.Fragment>
    )
}
